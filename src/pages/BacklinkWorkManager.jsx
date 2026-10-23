
import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import "./BacklinkWorkManager.css";

// Temporary working list. Add more verified websites here later.
const initialSites = [
  
  { name: "1ABC", url: "https://www.1abc.org" },
  { name: "1WebsDirectory", url: "https://www.1websdirectory.com" },
  { name: "4All Blahoo", url: "https://www.4all.blahoo.net" },
  { name: "Botid", url: "https://www.botid.org" },
  { name: "Hotvsnot", url: "https://www.hotvsnot.com" },
  { name: "LinkCentre", url: "https://www.linkcentre.com" },
  { name: "Triple W Directory", url: "https://www.triplewdirectory.com" },
  { name: "Cipinet", url: "https://www.cipinet.com" },
  { name: "5Submission", url: "https://www.5submission.com" },
  { name: "9Sites", url: "https://www.9sites.net" },
  { name: "10Directory", url: "https://www.10directory.com" },
  { name: "101Bookmarks", url: "https://www.101bookmarks.com" },
  { name: "411FreeDirectory", url: "https://www.411freedirectory.com" },
  { name: "A1WebDirectory", url: "https://www.a1webdirectory.org" },
  { name: "AAA Agency Search", url: "https://www.aaaagencysearch.com" },
  { name: "Bedwan", url: "https://www.bedwan.com" },
  { name: "Boing Boing", url: "https://www.boingboing.net" },
  { name: "USA Listing Directory", url: "https://www.usalistingdirectory.com" },
  { name: "Sonic Run", url: "https://www.sonicrun.com" },
  { name: "Nonar", url: "https://www.nonar.com" }

];

const STORAGE_KEY = "backlinkWorkManager_v1";

function readSavedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export default function BacklinkWorkManager() {
  const [savedData, setSavedData] = useState(readSavedData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    } catch {
      setNotice("Browser storage unavailable. Your latest changes may not persist.");
    }
  }, [savedData]);

  const sites = useMemo(
    () =>
      initialSites.map((site) => ({
        ...site,
        ...(savedData[site.url] || {}),
      })),
    [savedData]
  );

  const filteredSites = sites.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.url.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "done" && site.done) ||
      (filter === "pending" && !site.done) ||
      (filter === "best" && site.best);

    return matchesSearch && matchesFilter;
  });

  function updateSite(url, changes) {
    setSavedData((previous) => ({
      ...previous,
      [url]: {
        ...(previous[url] || {}),
        ...changes,
      },
    }));
  }

  async function copyURL(url) {
    try {
      await navigator.clipboard.writeText(url);
      setNotice("URL copied!");
    } catch {
      setNotice("Copy failed. Please copy the URL manually: " + url);
    }
  }

  function toggleSelected(url) {
    setSelected((previous) =>
      previous.includes(url)
        ? previous.filter((item) => item !== url)
        : [...previous, url]
    );
  }

  function downloadExcel() {
    const chosen = sites.filter((site) => selected.includes(site.url));

    if (!chosen.length) {
      setNotice("First select the websites you want to export.");
      return;
    }

    const rows = chosen.map((site) => ({
      Website: site.name,
      URL: site.url,
      Status: site.done ? "Done" : "Pending",
      "Selected as Best": site.best ? "Yes" : "No",
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Backlink Websites");
    XLSX.writeFile(workbook, "selected-backlink-websites.xlsx");
    setNotice(`${chosen.length} selected websites exported.`);
  }

  const completedCount = sites.filter((site) => site.done).length;

  return (
    <main className="bwm-page">
      <header className="bwm-header">
        <span className="bwm-kicker">SEO WORKSPACE</span>
        <h1>Backlink Work Manager</h1>
        <p>
          Track your backlink outreach, save completed work, and export only
          the websites you select.
        </p>
      </header>

      <section className="bwm-summary">
        <div className="bwm-summary-card">
          <span>Total websites</span>
          <strong>{sites.length}</strong>
        </div>
        <div className="bwm-summary-card">
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </div>
        <div className="bwm-summary-card">
          <span>Selected for Excel</span>
          <strong>{selected.length}</strong>
        </div>
      </section>

      <section className="bwm-toolbar">
        <input
          type="search"
          placeholder="Search website or URL..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search websites"
        />

        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          aria-label="Filter websites"
        >
          <option value="all">All websites</option>
          <option value="pending">Pending</option>
          <option value="done">Completed</option>
          <option value="best">Marked Best</option>
        </select>

        <button className="bwm-export" onClick={downloadExcel}>
          Download Selected Excel
        </button>
      </section>

      {notice && (
        <div className="bwm-notice" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice("")} aria-label="Dismiss message">
            ×
          </button>
        </div>
      )}

      <section className="bwm-list">
        {filteredSites.map((site, index) => (
          <article
            className={`bwm-card ${site.done ? "is-done" : ""}`}
            key={site.url}
          >
            <label className="bwm-select" title="Select for Excel export">
              <input
                type="checkbox"
                checked={selected.includes(site.url)}
                onChange={() => toggleSelected(site.url)}
                aria-label={`Select ${site.name} for Excel`}
              />
            </label>

            <span className="bwm-number">{index + 1}</span>

            <div className="bwm-site-info">
              <h2>
                {site.done && <span className="bwm-green-tick">✓ </span>}
                {site.name}
              </h2>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.url}
              </a>
              <span className={`bwm-status ${site.done ? "done" : "pending"}`}>
                {site.done ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="bwm-actions">
              <button onClick={() => copyURL(site.url)}>Copy</button>

              <a
                className="bwm-open"
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open ↗
              </a>

              <button
                className={site.best ? "bwm-best active" : "bwm-best"}
                onClick={() => updateSite(site.url, { best: !site.best })}
              >
                {site.best ? "★ Best" : "☆ Mark Best"}
              </button>

              <button
                className={site.done ? "bwm-done active" : "bwm-done"}
                onClick={() => updateSite(site.url, { done: !site.done })}
              >
                {site.done ? "✓ Done" : "Mark Done"}
              </button>
            </div>
          </article>
        ))}

        {filteredSites.length === 0 && (
          <div className="bwm-empty">No websites match your search.</div>
        )}
      </section>

      <p className="bwm-footnote">
        Note: These are platform homepages, not verified submission pages.
        Some platforms restrict promotional links or require approval. Review
        each platform's rules before posting. A green tick records your own
        progress; it does not verify that a backlink was published or indexed.
      </p>
    </main>
  );
}
