
import React, { useState } from "react";
import "./SEOAudit.css";

const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

export default function SEOAudit() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [report, setReport] = useState(null);

  async function runAudit(event) {
    event.preventDefault();
    setError("");
    setReport(null);

    let parsed;
    try {
      parsed = new URL(url.trim());
      if (!["http:", "https:"].includes(parsed.protocol)) {
        throw new Error("Invalid protocol");
      }
    } catch {
      setError("Valid website URL enter cheyyandi. Example: https://example.com");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/seo-audit/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: parsed.href }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Audit failed. Please try again.");
      }

      setReport(data);
    } catch (err) {
      setError(
        err.message ||
          "Backend connect avvaledu. Django server running lo undho check cheyyandi."
      );
    } finally {
      setLoading(false);
    }
  }

  function downloadCSV() {
    if (!report) return;

    const rows = [
      ["SEO Audit Report", report.url],
      ["SEO Score", report.score],
      ["Check", "Status", "Details", "Recommendation"],
      ...report.checks.map((item) => [
        item.title,
        item.status,
        item.details,
        item.recommendation,
      ]),
    ];

    const csv = rows
      .map((row) =>
        row
          .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\r\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "seo-audit-report.csv";
    link.click();
    URL.revokeObjectURL(downloadUrl);
  }

  const passed = report?.checks.filter((c) => c.status === "pass").length ?? 0;
  const issues = report?.checks.filter((c) => c.status === "issue").length ?? 0;

  return (
    <main className="seo-audit-page">
      <div className="seo-audit-breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <span>SEO Audit Tool</span>
      </div>

      <section className="seo-audit-hero">
        <span className="seo-audit-eyebrow">PRACTICAL SEO TOOLKIT</span>
        <h1>Website SEO Audit</h1>
        <p>
          Analyze important on-page SEO elements and identify areas to improve
          on a website you own or are authorized to audit.
        </p>

        <form className="seo-audit-form" onSubmit={runAudit}>
          <label htmlFor="seo-audit-url">Website URL</label>
          <div className="seo-audit-input-row">
            <input
              id="seo-audit-url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Auditing..." : "Run SEO Audit"}
            </button>
          </div>
          <small>Basic on-page checks. This does not guarantee Google rankings.</small>
        </form>
      </section>

      {loading && (
        <div className="seo-audit-message" role="status">
          <span className="seo-audit-spinner" />
          Website audit run avutundi. Please wait...
        </div>
      )}

      {error && (
        <div className="seo-audit-error" role="alert">
          {error}
        </div>
      )}

      {report && (
        <section className="seo-audit-results">
          <div className="seo-audit-results-heading">
            <div>
              <span className="seo-audit-eyebrow">AUDIT RESULTS</span>
              <h2>SEO Overview</h2>
              <p className="seo-audit-result-url">{report.url}</p>
              <p className="seo-audit-result-url">
                HTTP status: {report.http_status}
              </p>
            </div>
            <button className="seo-audit-download" onClick={downloadCSV}>
              Download CSV
            </button>
          </div>

          <div className="seo-audit-stats">
            <article className="seo-audit-stat">
              <span>SEO Score</span>
              <strong>{report.score}/100</strong>
            </article>
            <article className="seo-audit-stat">
              <span>Passed checks</span>
              <strong>{passed}</strong>
            </article>
            <article className="seo-audit-stat">
              <span>Needs attention</span>
              <strong>{issues}</strong>
            </article>
          </div>

          <h2 className="seo-audit-checks-title">SEO Checks</h2>

          <div className="seo-audit-checks">
            {report.checks.map((item) => (
              <article className="seo-audit-check" key={item.key}>
                <div className="seo-audit-check-top">
                  <h3>{item.title}</h3>
                  <span className={`seo-audit-status ${item.status}`}>
                    {item.status === "pass" ? "Passed" : "Needs attention"}
                  </span>
                </div>
                <p>{item.details}</p>
                {item.status === "issue" && (
                  <p className="seo-audit-recommendation">
                    <strong>Recommendation:</strong> {item.recommendation}
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="seo-audit-disclaimer">
            This is an automated preliminary audit. Some checks need manual
            review or Google Search Console confirmation.
          </p>
        </section>
      )}
    </main>
  );
}
