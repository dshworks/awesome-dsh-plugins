#!/usr/bin/env node
// Validate data/plugins.json against data/schema.json, then run registry
// invariants a JSON Schema cannot express: uniqueness, date ordering, and
// candidate-queue hygiene. Node stdlib only.
//
// The schema validator below implements the JSON Schema subset schema.json
// uses and throws on any keyword it does not implement, so the schema file
// stays the single source of truth and cannot silently drift ahead of the
// validator.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));

// --- minimal JSON Schema subset validator ---------------------------------

const ANNOTATIONS = new Set([
  "$schema", "$id", "title", "description", "examples", "default", "$defs",
]);
const SUPPORTED = new Set([
  "type", "properties", "required", "additionalProperties", "items",
  "enum", "pattern", "minLength", "maxLength", "format", "$ref",
]);

function resolveRef(ref, rootSchema) {
  if (!ref.startsWith("#/")) throw new Error(`unsupported $ref: ${ref}`);
  let node = rootSchema;
  for (const part of ref.slice(2).split("/")) {
    node = node?.[part];
    if (node === undefined) throw new Error(`unresolved $ref: ${ref}`);
  }
  return node;
}

function typeOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value; // object, string, number, boolean
}

function validateNode(schema, value, path, rootSchema, errors) {
  for (const key of Object.keys(schema)) {
    if (!ANNOTATIONS.has(key) && !SUPPORTED.has(key)) {
      throw new Error(`validator does not implement schema keyword "${key}" at ${path}; extend scripts/validate.mjs before using it`);
    }
  }

  if (schema.$ref) {
    validateNode(resolveRef(schema.$ref, rootSchema), value, path, rootSchema, errors);
    return;
  }

  if (schema.type) {
    const allowed = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!allowed.includes(typeOf(value))) {
      errors.push(`${path}: expected ${allowed.join("|")}, got ${typeOf(value)}`);
      return;
    }
  }

  if (schema.enum && !schema.enum.includes(value)) {
    errors.push(`${path}: "${value}" not in [${schema.enum.join(", ")}]`);
  }

  if (typeOf(value) === "string") {
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      errors.push(`${path}: shorter than minLength ${schema.minLength}`);
    }
    if (schema.maxLength !== undefined && value.length > schema.maxLength) {
      errors.push(`${path}: longer than maxLength ${schema.maxLength} (${value.length})`);
    }
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
      errors.push(`${path}: does not match pattern ${schema.pattern}`);
    }
    if (schema.format === "date" && !isRealDate(value)) {
      errors.push(`${path}: "${value}" is not a real YYYY-MM-DD date`);
    }
  }

  if (typeOf(value) === "object") {
    const props = schema.properties ?? {};
    for (const req of schema.required ?? []) {
      if (!(req in value)) errors.push(`${path}: missing required "${req}"`);
    }
    for (const [key, sub] of Object.entries(value)) {
      if (key in props) {
        validateNode(props[key], sub, `${path}.${key}`, rootSchema, errors);
      } else if (schema.additionalProperties === false) {
        errors.push(`${path}: unknown property "${key}"`);
      }
    }
  }

  if (typeOf(value) === "array" && schema.items) {
    value.forEach((item, i) =>
      validateNode(schema.items, item, `${path}[${i}]`, rootSchema, errors));
  }
}

function isRealDate(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

// --- registry invariants ---------------------------------------------------

function checkRegistry(registry, errors) {
  const seen = { name: new Map(), npm: new Map(), source: new Map() };
  registry.plugins.forEach((p, i) => {
    const at = `plugins[${i}] (${p.name ?? "?"})`;
    for (const [field, map] of [
      ["name", seen.name],
      ["npm", seen.npm],
    ]) {
      const v = p[field];
      if (v === undefined) continue;
      if (map.has(v)) errors.push(`${at}: duplicate ${field} "${v}" (also plugins[${map.get(v)}])`);
      map.set(v, i);
    }
    const sourceKey = p.path ? `${p.repo}#${p.path}` : p.repo;
    if (seen.source.has(sourceKey)) {
      errors.push(`${at}: duplicate source "${sourceKey}" (also plugins[${seen.source.get(sourceKey)}])`);
    }
    seen.source.set(sourceKey, i);
    if (p.added && p.lastVerified && p.lastVerified < p.added) {
      errors.push(`${at}: lastVerified ${p.lastVerified} predates added ${p.added}`);
    }
  });
}

function checkCandidates(candidates, registry, rejected, errors) {
  if (typeOf(candidates) !== "object" || !Array.isArray(candidates.candidates)) {
    errors.push("candidates.json: expected { updated, candidates: [] }");
    return;
  }
  if (!isRealDate(candidates.updated ?? "")) {
    errors.push(`candidates.json: bad updated date "${candidates.updated}"`);
  }
  const registrySources = new Set(
    registry.plugins.filter((p) => !p.path).map((p) => p.repo.toLowerCase()));
  const rejectedSlugs = new Set(
    (rejected.rejected ?? []).map((r) => (r.repo ?? "").toLowerCase()));
  const seen = new Set();
  candidates.candidates.forEach((c, i) => {
    const at = `candidates[${i}]`;
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(c.repo ?? "")) {
      errors.push(`${at}: bad repo slug "${c.repo}"`);
      return;
    }
    const slug = c.repo.toLowerCase();
    if (seen.has(slug)) errors.push(`${at}: duplicate candidate "${c.repo}"`);
    seen.add(slug);
    if (registrySources.has(slug)) {
      errors.push(`${at}: "${c.repo}" is already in plugins.json; drop it from the queue`);
    }
    if (rejectedSlugs.has(slug)) {
      errors.push(`${at}: "${c.repo}" was already rejected (data/rejected.json); drop it from the queue`);
    }
  });
}

function checkRejected(rejected, registry, errors) {
  if (typeOf(rejected) !== "object" || !Array.isArray(rejected.rejected)) {
    errors.push("rejected.json: expected { updated, rejected: [] }");
    return;
  }
  if (!isRealDate(rejected.updated ?? "")) {
    errors.push(`rejected.json: bad updated date "${rejected.updated}"`);
  }
  const registrySources = new Set(
    registry.plugins.map((p) => p.repo.toLowerCase()));
  const seen = new Set();
  rejected.rejected.forEach((r, i) => {
    const at = `rejected[${i}]`;
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(r.repo ?? "")) {
      errors.push(`${at}: bad repo slug "${r.repo}"`);
      return;
    }
    const slug = r.repo.toLowerCase();
    if (seen.has(slug)) errors.push(`${at}: duplicate rejection "${r.repo}"`);
    seen.add(slug);
    if (typeof r.reason !== "string" || r.reason.length === 0) {
      errors.push(`${at}: missing rejection reason for "${r.repo}"`);
    }
    if (!isRealDate(r.date ?? "")) {
      errors.push(`${at}: bad date "${r.date}"`);
    }
    if (registrySources.has(slug)) {
      errors.push(`${at}: "${r.repo}" is both rejected and in plugins.json; pick one`);
    }
  });
}

// --- main ------------------------------------------------------------------

const schema = read("data/schema.json");
const registry = read("data/plugins.json");
const candidates = read("data/candidates.json");
const rejected = read("data/rejected.json");

const errors = [];
validateNode(schema, registry, "registry", schema, errors);
if (errors.length === 0) {
  // Invariants assume shape; only run them on schema-clean data.
  checkRegistry(registry, errors);
}
checkRejected(rejected, registry, errors);
checkCandidates(candidates, registry, rejected, errors);

if (errors.length > 0) {
  console.error(`validate: ${errors.length} error(s)`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `validate: ok (${registry.plugins.length} plugins, ${candidates.candidates.length} candidates, ${rejected.rejected.length} rejected)`);
