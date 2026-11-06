
import { useEffect, useState } from "react";

function BackendTest() {
  const [websites, setWebsites] = useState([]);
  const [message, setMessage] = useState("Loading websites...");
  const [error, setError] = useState("");

  async function loadWebsites() {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/backlinks"
      );

      if (!response.ok) {
        throw new Error("Unable to load websites");
      }

      const data = await response.json();
      setWebsites(data);
      setMessage(
        data.length === 0
          ? "No websites saved yet."
          : `${data.length} website(s) loaded successfully.`
      );
    } catch (err) {
      setError("Flask backend start అయ్యిందో check చేయండి.");
      setMessage("");
    }
  }

  useEffect(() => {
    loadWebsites();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h2>Backlink Websites Database</h2>

      <button onClick={loadWebsites}>
        Refresh Websites
      </button>

      <p>{message}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {websites.map((site) => (
        <div
          key={site.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "8px"
          }}
        >
          <h3>{site.name}</h3>

          <a href={site.url} target="_blank" rel="noreferrer">
            {site.url}
          </a>

          <p>Completed: {site.completed ? "Yes" : "No"}</p>
          <p>Best: {site.best ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default BackendTest;
