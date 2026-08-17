// The reef: filterable, sortable view over the same data the README is
// rendered from (window.__PLUGINS__, emitted by scripts/render.mjs).

const TAG_LABEL = {
  ui: "Web UI", terminal: "Terminal", capabilities: "Capabilities",
  vision: "Vision", agents: "Agents", memory: "Memory", models: "Models",
  interop: "Interop", channels: "Channels", notifications: "Notify",
  usage: "Usage & cost", observability: "Observability", safety: "Safety",
  marketplace: "Stores", devtools: "Devtools", knowledge: "Knowledge", fun: "Fun",
};

const state = {
  tag: "all",
  category: "all",
  query: "",
  sort: "stars",
  plugins: [],
};

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function repoUrl(p) {
  return p.path ? `https://github.com/${p.repo}/tree/HEAD/${p.path}` : `https://github.com/${p.repo}`;
}

function installCmd(p) {
  if (p.official) return null;
  if (p.category === "skill") return null;
  const ref = p.path ? `github:${p.repo}#path:/${p.path}` : `github:${p.repo}`;
  return `dsh plugin --profile web add ${ref}`;
}

function starRank(p) {
  return p.official ? 0 : p.stars ?? 0;
}

function activityLabel(p) {
  if (!p.pushedAt) return "";
  const days = Math.max(0, Math.floor((Date.now() - Date.parse(p.pushedAt)) / 86400000));
  const when = days === 0 ? "today" : days === 1 ? "yesterday" : days <= 30 ? `${days}d ago` : `on ${p.pushedAt}`;
  const cls = days <= 14 ? "fresh" : "";
  return ` · <span class="activity ${cls}">pushed ${esc(when)}</span>`;
}

function starsLabel(p) {
  if (p.stars === undefined) return "";
  const n = p.stars >= 1000 ? `${(p.stars / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(p.stars);
  return `★ ${n}`;
}

const SORTS = {
  // Official entries inherit the whole harness monorepo's stars; ranking them
  // by it would wall off the top of every list, so they rank neutrally here.
  stars: (a, b) => starRank(b) - starRank(a) || a.name.localeCompare(b.name),
  newest: (a, b) => String(b.added || "").localeCompare(String(a.added || "")) || a.name.localeCompare(b.name),
  name: (a, b) => a.name.localeCompare(b.name),
};

function applyView() {
  const q = state.query.trim().toLowerCase();
  const rows = state.plugins.filter((p) => {
    if (state.tag !== "all" && !(p.tags ?? []).includes(state.tag)) return false;
    if (state.category !== "all" && p.category !== state.category) return false;
    if (q) {
      const hay = `${p.name} ${p.description || ""} ${p.repo || ""} ${(p.tags ?? []).join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  rows.sort(SORTS[state.sort] || SORTS.stars);
  return rows;
}

function badge(cls, text) {
  return `<span class="badge ${cls}">${esc(text)}</span>`;
}

function card(p) {
  const cmd = installCmd(p);
  const badges = [];
  if (p.featured) badges.push(badge("pick", "editor's pick"));
  if (p.official) badges.push(badge("official", "official"));
  badges.push(badge("cat", p.category));
  for (const t of p.tags ?? []) badges.push(badge("tag", TAG_LABEL[t] ?? t));
  const install = cmd
    ? `<p class="install"><code>${esc(cmd)}</code><button type="button" class="copy" data-copy="${esc(cmd)}">Copy</button></p>`
    : "";
  const stars = starsLabel(p);
  // "verified" is worth nothing on its own. Where the install path was found
  // is a file anyone can open, so the status links to it.
  const label = p.status === "verified"
    ? `${esc(p.verifiedAgainst)} · ${esc(p.lastVerified)}`
    : esc(p.status);
  const verified = p.evidence
    ? `<a class="proof" href="https://github.com/${esc(p.repo)}/blob/HEAD/${esc(p.evidence.split("#")[0])}" rel="noopener" title="install path proven in ${esc(p.evidence)}">${label}</a>`
    : label;
  const activity = activityLabel(p);
  return `<article class="card${p.featured ? " is-pick" : ""}">
    <div class="head">
      <h3><a href="${esc(repoUrl(p))}" rel="noopener">${esc(p.name)}</a></h3>
      ${stars ? `<span class="stars" title="repo stars${p.path || p.official ? " (whole repo — monorepo entry)" : ""}">${esc(stars)}</span>` : ""}
    </div>
    <div class="badges">${badges.join("")}</div>
    <p class="desc">${esc(p.description)}</p>
    ${install}
    <p class="meta">${verified}${activity}</p>
  </article>`;
}

function shelfCard(p) {
  return `<a class="pickcard" href="${esc(repoUrl(p))}" rel="noopener">
    <strong>${esc(p.name)}</strong>
    <span class="pickdesc">${esc(p.description)}</span>
    <span class="pickmeta">${esc(starsLabel(p))} · ${esc(TAG_LABEL[p.tags?.[0]] ?? "")}</span>
  </a>`;
}

function renderShelf() {
  const picks = state.plugins.filter((p) => p.featured).sort(SORTS.stars);
  document.getElementById("shelf").innerHTML = picks.map(shelfCard).join("");
}

function renderStats(shown) {
  const all = state.plugins;
  const el = document.getElementById("stats");
  el.textContent = shown.length === all.length
    ? `${all.length} corals · ${all.filter((p) => p.featured).length} picks`
    : `${shown.length} of ${all.length} corals`;
}

// The reef outgrew one-shot rendering. Building every card up front means
// tens of thousands of DOM nodes on first paint for a view that shows twelve,
// and it is the phone that pays. Cards come in tides instead: filtering and
// sorting still run over the whole registry (a few milliseconds of string
// matching), only the drawing is deferred, so nothing about search changes.
const TIDE = 60;
let shown = 0;
let rows = [];

function growReef() {
  const root = document.getElementById("reef");
  const next = rows.slice(shown, shown + TIDE);
  if (!next.length) return;
  document.getElementById("tide")?.remove();
  root.insertAdjacentHTML("beforeend", next.map(card).join(""));
  shown += next.length;
  if (shown < rows.length) {
    root.insertAdjacentHTML(
      "beforeend",
      `<p class="tide" id="tide">${rows.length - shown} more below the surface…</p>`);
    tideWatcher?.observe(document.getElementById("tide"));
  }
}

// Falls back to a plain button-free "keep scrolling" only if the browser has
// no IntersectionObserver; every card is still reachable through search.
const tideWatcher = typeof IntersectionObserver === "function"
  ? new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) growReef();
  }, { rootMargin: "800px 0px" })
  : null;

function render() {
  rows = applyView();
  shown = 0;
  renderStats(rows);
  const root = document.getElementById("reef");
  if (!rows.length) {
    root.innerHTML = `<p class="empty">Nothing on this patch of reef. The sea is young.</p>`;
    return;
  }
  root.innerHTML = "";
  growReef();
  if (!tideWatcher) while (shown < rows.length) growReef();
}

function polyps() {
  const host = document.getElementById("polyps");
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.style.setProperty("--x", `${Math.random() * 100}%`);
    s.style.setProperty("--h", `${18 + Math.random() * 40}px`);
    s.style.setProperty("--d", `${Math.random() * 6}s`);
    s.style.setProperty("--hue", Math.random() > 0.5 ? "#ff7a59" : "#1ec8c8");
    host.appendChild(s);
  }
}

function heart(x, y) {
  const el = document.createElement("div");
  el.className = "heart";
  el.textContent = "❤️";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

async function copyText(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  if (btn) {
    btn.classList.add("is-copied");
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.textContent = "Copy";
    }, 1400);
  }
}

function markPressed(group, btn) {
  group.forEach((el) => {
    const on = el === btn;
    el.classList.toggle("is-on", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function boot() {
  const data = window.__PLUGINS__ || { plugins: [] };
  state.plugins = data.plugins || [];
  polyps();

  const n = (x) => x.toLocaleString("en-US");
  document.getElementById("hero-count").textContent = n(state.plugins.length);

  // Anyone can publish how many repos carry a tag. This says how many were
  // opened and read — and what reading them threw out.
  const cov = window.__COVERAGE__;
  const sounding = document.getElementById("sounding");
  if (cov && sounding) {
    const authors = new Set(state.plugins.map((p) => p.repo.split("/")[0])).size;
    const pct = Math.round((cov.decided / cov.topic) * 100);
    sounding.innerHTML = [
      `From <b>${n(authors)}</b> authors.`,
      `Of the <b>${n(cov.topic)}</b> repositories carrying a dsh topic on ${esc(cov.measured)},`,
      `<b>${n(cov.decided)}</b> — ${pct}% — have been opened, read, and decided;`,
      `<b>${n(cov.noInstallPath)}</b> carried the topic and nothing else.`,
      `Every rejection is <a href="https://github.com/dshworks/awesome-dsh-plugins/blob/main/data/rejected.json" rel="noopener">published with its reason</a>.`,
    ].join(" ");
  }

  // Tag chips, ordered by size so the busiest areas come first.
  const counts = {};
  for (const p of state.plugins) for (const t of p.tags ?? []) counts[t] = (counts[t] || 0) + 1;
  const row = document.getElementById("tag-row");
  for (const t of Object.keys(TAG_LABEL).sort((a, b) => (counts[b] || 0) - (counts[a] || 0))) {
    if (!counts[t]) continue;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.dataset.tag = t;
    b.setAttribute("aria-pressed", "false");
    b.textContent = `${TAG_LABEL[t]} ${counts[t]}`;
    row.appendChild(b);
  }
  const tagChips = [...row.querySelectorAll(".chip[data-tag]")];
  row.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".chip[data-tag]");
    if (!btn) return;
    state.tag = btn.dataset.tag;
    markPressed(tagChips, btn);
    render();
  });

  const sorts = [...document.querySelectorAll(".chip[data-sort]")];
  sorts.forEach((btn) => btn.addEventListener("click", () => {
    state.sort = btn.dataset.sort;
    markPressed(sorts, btn);
    render();
  }));

  document.getElementById("category").addEventListener("change", (ev) => {
    state.category = ev.target.value;
    render();
  });

  const search = document.getElementById("search");
  let timer = 0;
  search.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.query = search.value;
      render();
    }, 120);
  });

  document.getElementById("heart-anchor").addEventListener("click", (ev) => {
    heart(ev.clientX, ev.clientY);
  });
  document.getElementById("reef").addEventListener("click", (ev) => {
    const btn = ev.target.closest(".copy");
    if (!btn) return;
    ev.preventDefault();
    copyText(btn.dataset.copy || "", btn);
  });

  renderShelf();
  render();
}

boot();
