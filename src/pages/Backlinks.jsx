
import "./Backlinks.css";
import { useEffect, useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

const backlinkSites = [
  { name: "AdmyURL", url: "https://www.admyurl.com" },
  { name: "SoMuch", url: "https://www.somuch.com" },
  { name: "Blue Sparkle Directory", url: "https://www.bluesparkledirectory.com/" },
  { name: "SubmitX", url: "https://submitx.com/" },
  { name: "Product Selector", url: "https://www.productselectoren.com" },
  { name: "DMOZ EBMD Attorneys", url: "https://dmoz.ebmdattorneys.com" },
  { name: "Submission Web Directory", url: "https://www.submissionwebdirectory.com/" },
  { name: "TagsHub", url: "https://tagshub.com" },
  { name: "USA Websites Directory", url: "https://www.usawebsitesdirectory.com" },
  { name: "QuickLinks", url: "https://quicklinks.net/" },
  { name: "GainWeb", url: "https://gainweb.org" },
  { name: "UK Internet Directory", url: "https://www.ukinternetdirectory.net" },
  { name: "Promote Business Directory", url: "https://www.promotebusinessdirectory.com" },
  { name: "All States USA Directory", url: "https://www.allstatesusadirectory.com" },
  { name: "Travel Tourism Directory", url: "https://www.traveltourismdirectory.net" },
  { name: "Viesearch Submit", url: "https://viesearch.com/submit" },
  { name: "Craigslist Directory", url: "https://www.craigslistdir.org" },
  { name: "FamilyDir", url: "https://www.familydir.com" },
  { name: "Marketing Web Directory", url: "https://www.marketingwebdirectory.com" },
  { name: "Submit.biz", url: "https://www.submit.biz/submit_url.php" },
  { name: "Marketing Internet Directory", url: "https://www.marketinginternetdirectory.com" },
  { name: "Skoobe", url: "https://www.skoobe.biz/" },
  { name: "Link Directory Listings", url: "https://linkdirectorylistings.org" },
  { name: "Abicloud", url: "https://abicloud.org/" },
  { name: "Homepage Seek", url: "https://homepageseek.com/" },
  { name: "Activ Directory", url: "https://activdirectory.net" },
  { name: "CAIDA", url: "https://caida.eu" },
  { name: "Cipinet", url: "https://www.cipinet.com/" },
  { name: "Sites Plus", url: "https://www.sites-plus.com" },
  { name: "Business Connect Directory", url: "https://businessconnect.directory/" },
  { name: "Canada Web Directory", url: "https://www.canadawebdir.com/" },
  { name: "Smart SEO Link", url: "https://smartseolink.org" },
  { name: "BestBuyDir", url: "https://bestbuydir.com" },
  { name: "Dentons", url: "https://dentons.net/advertise/create/basic" },
  { name: "Made With Vue JS", url: "https://madewithvuejs.com" },
  { name: "Craigslist Directory", url: "https://www.craigslistdirectory.net/" },
  { name: "Free Web Submission", url: "https://www.freewebsubmission.com/" },
  { name: "Web Directory Health", url: "https://www.webdirectoryhealth.com/" },
  { name: "Expansion Directory", url: "https://www.expansiondirectory.com" },
  { name: "WebSquash", url: "https://www.websquash.com/cgi-bin/search/search.pl?Mode=AnonAdd" },
  { name: "Black Green Directory", url: "https://www.blackgreendirectory.com" },
  { name: "Sites On Display", url: "https://www.sitesondisplay.com/" },
  { name: "A Web List", url: "https://www.aweblist.org/" },
  { name: "Directory6", url: "https://www.directory6.org/" },
  { name: "OnTopList", url: "https://www.ontoplist.com" },
  { name: "Submit Express", url: "https://www.submitexpress.com/free-tools/free-website-submission/" },
  { name: "Britain Business Directory", url: "https://www.britainbusinessdirectory.com" },
  { name: "Just Directory", url: "https://www.justdirectory.org" },
  { name: "Viesearch", url: "https://www.viesearch.com/" },
  { name: "Directory Free", url: "https://www.directory-free.com" },
  { name: "Websites Index", url: "https://websitesindex.medicalbillinglogic.com" },
  { name: "Idaho Index", url: "https://www.idahoindex.com" },
  { name: "Fire Directory", url: "https://www.fire-directory.com" },
  { name: "BlueBook Directory", url: "https://www.bluebook-directory.com" },
  { name: "Blogville", url: "https://blogville.us" },
  { name: "SEO Optimization Directory", url: "https://seooptimizationdirectory.com" },
  { name: "European Navigator", url: "https://europeannavigator.eu" },
  { name: "BIS Project", url: "https://bis-project.eu" },
  { name: "Seek Websites", url: "https://seekwebsites.innovasysindia.com" },
  { name: "eBay Directory", url: "https://ebay-dir.com" },
  { name: "Jayde", url: "https://www.jayde.com" },
  { name: "The SEO Backlink", url: "https://www.theseobacklink.com" },
  { name: "MediaFire Direct Link", url: "https://www.mediafiredirectlink.com" },
  { name: "LinkCentre", url: "https://www.linkcentre.com" },
  { name: "Brown Edge Directory", url: "https://brownedgedirectory.com" },
  { name: "Submit", url: "https://www.submit.biz" },
  { name: "Dentons", url: "https://dentons.net" },
  { name: "Homedirectory", url: "https://www.homedirectory.biz" },
  { name: "Sitepromotiondirectory", url: "https://www.sitepromotiondirectory.com" },
];

const DONE_TIME = 24 * 60 * 60 * 1000;
const TOKEN_KEY = "aiToolsAdminToken";

function Backlinks() {
  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("backlinkCompleted") || "{}");
    } catch {
      return {};
    }
  });

  const [savedSites, setSavedSites] = useState([]);
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [loadingSites, setLoadingSites] = useState(true);
  const [apiError, setApiError] = useState("");

  const [token, setToken] = useState(
    () => sessionStorage.getItem(TOKEN_KEY) || ""
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const authHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setPassword("");
    setLoginError("");
  };

  const login = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/ai-tools/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      if (!data.token) {
        throw new Error("Server did not return an authentication token.");
      }

      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setPassword("");
    } catch (error) {
      setLoginError(error.message || "Unable to log in.");
    } finally {
      setLoginLoading(false);
    }
  };

  const loadSites = async () => {
    setLoadingSites(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/backlinks`);

      if (!response.ok) {
        throw new Error("Backlinks list load కాలేదు.");
      }

      const data = await response.json();
      setSavedSites(Array.isArray(data) ? data : []);
      setApiError("");
    } catch (error) {
      console.error(error);
      setApiError(
        `Flask backend connection failed (${API_BASE_URL}). Check whether the backend is running.`
      );
    } finally {
      setLoadingSites(false);
    }
  };

  useEffect(() => {
    loadSites();
  }, []);

  useEffect(() => {
    let active = true;

    const syncStatuses = async () => {
      const now = Date.now();

      let localSaved = {};
      try {
        localSaved = JSON.parse(
          localStorage.getItem("backlinkCompleted") || "{}"
        );
      } catch {
        localSaved = {};
      }

      let serverSaved = {};
      try {
        const response = await fetch(`${API_BASE_URL}/api/backlink-status`);

        if (response.ok) {
          serverSaved = await response.json();
        }
      } catch (error) {
        console.error("Backlink status load failed:", error);
      }

      if (!active) return;

      const allUrls = new Set([
        ...Object.keys(localSaved),
        ...Object.keys(serverSaved),
      ]);

      const updated = {};

      for (const url of allUrls) {
        const localTime = Number(localSaved[url] || 0);
        const serverTime = Number(serverSaved[url] || 0);
        const timestamp = Math.max(localTime, serverTime);

        if (timestamp > 0 && now - timestamp < DONE_TIME) {
          updated[url] = timestamp;

          if (token && timestamp !== serverTime) {
            try {
              await fetch(`${API_BASE_URL}/api/backlink-status`, {
                method: "POST",
                headers: authHeaders(),
                body: JSON.stringify({
                  url,
                  completed_at: timestamp,
                }),
              });
            } catch (error) {
              console.error("Backlink status sync failed:", error);
            }
          }
        } else if (token && serverSaved[url] !== undefined) {
          try {
            await fetch(`${API_BASE_URL}/api/backlink-status`, {
              method: "POST",
              headers: authHeaders(),
              body: JSON.stringify({
                url,
                completed_at: null,
              }),
            });
          } catch (error) {
            console.error("Expired status cleanup failed:", error);
          }
        }
      }

      if (!active) return;

      localStorage.setItem("backlinkCompleted", JSON.stringify(updated));
      setCompleted(updated);
    };

    syncStatuses();

    const timer = setInterval(syncStatuses, 60 * 1000);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [token]);

  const addBacklink = async (event) => {
    event.preventDefault();

    if (!token) {
      alert("Please log in with the Office Admin account first.");
      return;
    }

    const name = siteName.trim();
    let url = siteUrl.trim();

    if (!name || !url) {
      alert("Website పేరు, URL రెండూ నమోదు చేయండి.");
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    try {
      new URL(url);
    } catch {
      alert("Valid website URL నమోదు చేయండి.");
      return;
    }

    const normalize = (value) =>
      String(value).replace(/\/+$/, "").toLowerCase();

    const duplicate = [...backlinkSites, ...savedSites].some(
      (site) => normalize(site.url) === normalize(url)
    );

    if (duplicate) {
      alert("ఈ URL ఇప్పటికే ఉంది.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/backlinks`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ name, url }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 401) logout();
        throw new Error(result.error || "Backlink జోడించలేకపోయాం.");
      }

      setSiteName("");
      setSiteUrl("");
      await loadSites();
      alert("Backlink విజయవంతంగా జోడించబడింది.");
    } catch (error) {
      alert(error.message || "Backend connection failed.");
    }
  };

  const deleteBacklink = async (site) => {
    if (!token) {
      alert("Please log in with the Office Admin account first.");
      return;
    }

    if (!site.id) {
      alert(
        "ఈ website default list‌లో ఉంది. Database‌లో add చేసిన websites మాత్రమే delete చేయవచ్చు."
      );
      return;
    }

    if (!window.confirm(`"${site.name}" ను తొలగించాలా?`)) {
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/backlinks/${site.id}`,
        {
          method: "DELETE",
          headers: authHeaders(),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 401) logout();
        throw new Error(result.error || "Delete చేయలేకపోయాం.");
      }

      setCompleted((previous) => {
        const updated = { ...previous };
        delete updated[site.url];
        localStorage.setItem("backlinkCompleted", JSON.stringify(updated));
        return updated;
      });

      await loadSites();
    } catch (error) {
      alert(error.message || "Delete చేయలేకపోయాం.");
    }
  };

  const markDone = async (url) => {
    const timestamp = Date.now();
    const updated = { ...completed, [url]: timestamp };

    setCompleted(updated);
    localStorage.setItem("backlinkCompleted", JSON.stringify(updated));

    if (!token) {
      alert(
        "Done status ఈ browser‌లో save అయింది. అన్ని users‌కు database‌లో save చేయడానికి Office Admin login చేయండి."
      );
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/backlink-status`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({
          url,
          completed_at: timestamp,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) logout();
        throw new Error("Database save failed.");
      }
    } catch (error) {
      console.error("SQLite save failed:", error);
      alert("Browser‌లో status save అయింది, కానీ database sync కాలేదు.");
    }
  };

  const copyURL = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL Copied!");
    } catch {
      alert("URL copy కాలేదు. Website URL‌ను manually copy చేయండి.");
    }
  };

  const getRemainingTime = (timestamp) => {
    const remaining = DONE_TIME - (Date.now() - Number(timestamp));

    if (remaining <= 0) return "";

    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor(
      (remaining % (60 * 60 * 1000)) / (60 * 1000)
    );

    return `${hours}h ${minutes}m`;
  };

  const combinedSites = [
    ...backlinkSites.map((site) => ({ ...site, source: "default" })),
    ...savedSites.map((site) => ({ ...site, source: "database" })),
  ];

  return (
    <div className="backlinks-page">
      <header className="backlinks-header">
        <div className="backlinks-banner"></div>
      </header>

      <section className="backlink-info">
        <h2>Office Admin Login</h2>

        {token ? (
          <div>
            <p>Office Admin logged in. You can manage backlinks.</p>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <form
            onSubmit={login}
            style={{
              display: "grid",
              gap: "10px",
              maxWidth: "400px",
            }}
          >
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Office Username"
              autoComplete="username"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Office Password"
              autoComplete="current-password"
              required
            />

            <button type="submit" disabled={loginLoading}>
              {loginLoading ? "Logging in..." : "Office Admin Login"}
            </button>

            {loginError && (
              <p style={{ color: "red" }}>{loginError}</p>
            )}
          </form>
        )}
      </section>

      <section className="backlink-info">
        <h2>Backlink Submission Websites</h2>
        <p>
          Open the website, complete your backlink submission and click Done.
        </p>
      </section>

      {token && (
        <section className="backlink-info">
          <h2>➕ కొత్త Backlink జోడించండి</h2>

          <form
            onSubmit={addBacklink}
            style={{
              display: "grid",
              gap: "10px",
              maxWidth: "650px",
            }}
          >
            <input
              type="text"
              value={siteName}
              onChange={(event) => setSiteName(event.target.value)}
              placeholder="Website పేరు"
              aria-label="Website పేరు"
              required
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />

            <input
              type="url"
              value={siteUrl}
              onChange={(event) => setSiteUrl(event.target.value)}
              placeholder="https://example.com"
              aria-label="Website URL"
              required
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />

            <button type="submit" className="done-btn">
              Add Backlink
            </button>
          </form>
        </section>
      )}

      {apiError && <p style={{ color: "red" }}>{apiError}</p>}

      <button
        type="button"
        onClick={loadSites}
        style={{ marginTop: "10px" }}
      >
        Refresh Websites
      </button>

      {loadingSites && <p>Websites load అవుతున్నాయి...</p>}

      <section className="backlink-list">
        {combinedSites.map((site, index) => {
          const doneTime = completed[site.url];
          const isDone =
            doneTime && Date.now() - Number(doneTime) < DONE_TIME;

          return (
            <div
              className={`backlink-card ${
                isDone ? "completed-card" : ""
              }`}
              key={site.id ? `db-${site.id}` : site.url}
            >
              <div className="site-number">{index + 1}</div>

              <div className="site-info">
                <h3>{site.name}</h3>
                <p>{site.url}</p>

                {isDone && (
                  <span className="expiry-time">
                    ⏱️ Done for {getRemainingTime(doneTime)}
                  </span>
                )}

                {site.source === "database" && (
                  <small>Database లో సేవ్ అయింది</small>
                )}
              </div>

              <div className="site-actions">
                <button
                  type="button"
                  onClick={() => copyURL(site.url)}
                  className="copy-btn"
                >
                  📋 Copy
                </button>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-btn"
                >
                  🔗 Open
                </a>

                {!isDone ? (
                  <button
                    type="button"
                    onClick={() => markDone(site.url)}
                    className="done-btn"
                  >
                    ✓ Done
                  </button>
                ) : (
                  <button
                    type="button"
                    className="completed-btn"
                    disabled
                  >
                    ✓ DONE
                  </button>
                )}

                {token && site.source === "database" && (
                  <button
                    type="button"
                    onClick={() => deleteBacklink(site)}
                    className="done-btn"
                    style={{ background: "#b42318" }}
                  >
                    🗑 Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Backlinks;
