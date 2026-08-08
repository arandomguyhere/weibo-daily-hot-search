const RAW_BASE = "https://raw.githubusercontent.com/arandomguyhere/weibo-daily-hot-search/master/raw";
const WEIBO_BASE_URL = "https://s.weibo.com";
const CACHE_KEY = "hotSearchCache";
const CACHE_TTL_MS = 5 * 60 * 1000;

const storage = (typeof browser !== "undefined" ? browser : chrome).storage.local;

const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");
const updatedEl = document.getElementById("updated");
const refreshEl = document.getElementById("refresh");
const tabsEl = document.getElementById("filter-tabs");

let allWords = [];
let activeStatus = "all";

function utcDateString(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return d.toISOString().slice(0, 10);
}

function formatCount(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return String(n);
}

async function fetchDay(dateStr) {
  const res = await fetch(`${RAW_BASE}/${dateStr}.json`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function loadData(force = false) {
  if (!force) {
    try {
      const { [CACHE_KEY]: cached } = await storage.get(CACHE_KEY);
      if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
        return cached;
      }
    } catch {
      // storage unavailable — fall through to network
    }
  }

  // Data files are named by the scraper's UTC date; fall back a day if today's
  // file hasn't been created yet.
  let words, date;
  try {
    date = utcDateString();
    words = await fetchDay(date);
  } catch {
    date = utcDateString(-1);
    words = await fetchDay(date);
  }

  const result = { words, date, fetchedAt: Date.now() };
  try {
    await storage.set({ [CACHE_KEY]: result });
  } catch {
    // caching is best-effort
  }
  return result;
}

function render() {
  const query = searchEl.value.trim().toLowerCase();
  const filtered = allWords.filter((w) => {
    if (activeStatus !== "all" && (w.status || "hot") !== activeStatus) return false;
    if (!query) return true;
    return (
      w.text.toLowerCase().includes(query) ||
      (w.textEn || "").toLowerCase().includes(query)
    );
  });

  listEl.textContent = "";

  if (filtered.length === 0) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = "No topics match.";
    listEl.appendChild(msg);
    return;
  }

  filtered.forEach((w, i) => {
    const a = document.createElement("a");
    a.className = "item";
    a.href = w.url.startsWith("http") ? w.url : WEIBO_BASE_URL + w.url;
    a.target = "_blank";
    a.rel = "noopener";

    const rank = document.createElement("div");
    rank.className = "rank" + (i < 3 ? " top" : "");
    rank.textContent = String(i + 1);

    const body = document.createElement("div");
    body.className = "body";

    const topic = document.createElement("div");
    topic.className = "topic";
    topic.textContent = w.text;
    body.appendChild(topic);

    if (w.textEn && w.textEn !== w.text) {
      const en = document.createElement("div");
      en.className = "topic-en";
      en.textContent = w.textEn;
      body.appendChild(en);
    }

    const meta = document.createElement("div");
    meta.className = "meta";

    const count = document.createElement("span");
    count.className = "count";
    count.textContent = formatCount(w.count) + " \u{1F525}";
    meta.appendChild(count);

    if (w.status) {
      const badge = document.createElement("span");
      badge.className = "badge " + w.status;
      badge.textContent = w.status;
      meta.appendChild(badge);
    }

    if (
      typeof w.velocity === "number" &&
      w.status !== "new" &&
      w.status !== "gone" &&
      w.velocity !== 0
    ) {
      const vel = document.createElement("span");
      vel.className = "velocity " + (w.velocity > 0 ? "up" : "down");
      vel.textContent = (w.velocity > 0 ? "+" : "") + w.velocity + "%";
      meta.appendChild(vel);
    }

    body.appendChild(meta);
    a.appendChild(rank);
    a.appendChild(body);
    listEl.appendChild(a);
  });
}

function showMessage(text, isError = false) {
  listEl.textContent = "";
  const msg = document.createElement("div");
  msg.className = "message" + (isError ? " error" : "");
  msg.textContent = text;
  listEl.appendChild(msg);
}

async function refresh(force = false) {
  refreshEl.classList.add("spinning");
  try {
    const { words, date, fetchedAt } = await loadData(force);
    allWords = words;
    updatedEl.textContent =
      `${date} · fetched ${new Date(fetchedAt).toLocaleTimeString()}`;
    render();
  } catch (e) {
    showMessage(`Failed to load data (${e.message}). Check your connection and try again.`, true);
  } finally {
    refreshEl.classList.remove("spinning");
  }
}

searchEl.addEventListener("input", render);

tabsEl.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  tabsEl.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  activeStatus = tab.dataset.status;
  render();
});

refreshEl.addEventListener("click", () => refresh(true));

refresh();
