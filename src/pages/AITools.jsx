import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./AITools.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";
const TOKEN_KEY = "aiToolsAdminToken";

async function readJson(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`);
  return data;
}

export default function AITools() {
  const [tools, setTools] = useState([]);
  const [query, setQuery] = useState("");
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(() => Boolean(sessionStorage.getItem(TOKEN_KEY)));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", url: "", category: "General", description: "" });

  const authHeaders = useMemo(() => token ? { Authorization: `Bearer ${token}` } : {}, [token]);

  const loadTools = useCallback(async (search = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("q", search.trim());
      const suffix = params.toString() ? `?${params.toString()}` : "";
      const data = await readJson(await fetch(`${API_BASE_URL}/api/ai-tools${suffix}`));
      setTools(Array.isArray(data) ? data : []);
    } catch (error) {
      setMessage(error.message || "Could not load AI tools. Check that Flask is running.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadTools(""); }, [loadTools]);

  const login = async (event) => {
    event.preventDefault();
    setMessage("");
    try {
      const data = await readJson(await fetch(`${API_BASE_URL}/api/ai-tools/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }));
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setIsAdmin(true);
      setPassword("");
      setMessage("Admin login successful. You can now manage AI tools.");
    } catch (error) {
      setMessage(error.message || "Admin login failed.");
    }
  };

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setIsAdmin(false);
    setEditingId(null);
    setForm({ name: "", url: "", category: "General", description: "" });
    setMessage("Logged out.");
  };

  const saveTool = async (event) => {
    event.preventDefault();
    if (!token) { setMessage("Please log in as admin first."); return; }
    setSaving(true);
    setMessage("");
    try {
      const editing = editingId !== null;
      const response = await fetch(`${API_BASE_URL}/api/ai-tools${editing ? `/${editingId}` : ""}`, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json", ...authHeaders },
        body: JSON.stringify(form),
      });
      const data = await readJson(response);
      setMessage(editing ? "AI tool updated." : "AI tool added.");
      setForm({ name: "", url: "", category: "General", description: "" });
      setEditingId(null);
      await loadTools(query);
    } catch (error) {
      if (/expired|invalid admin session/i.test(error.message)) logout();
      setMessage(error.message || "Could not save AI tool.");
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (tool) => {
    setEditingId(tool.id);
    setForm({ name: tool.name, url: tool.url, category: tool.category || "General", description: tool.description || "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteTool = async (tool) => {
    if (!window.confirm(`Delete "${tool.name}"? This cannot be undone.`)) return;
    try {
      await readJson(await fetch(`${API_BASE_URL}/api/ai-tools/${tool.id}`, { method: "DELETE", headers: authHeaders }));
      setMessage("AI tool deleted.");
      await loadTools(query);
    } catch (error) {
      if (/expired|invalid admin session/i.test(error.message)) logout();
      setMessage(error.message || "Could not delete AI tool.");
    }
  };

  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <main className="ai-tools-page">
      <header className="ai-tools-heading">
        <div><p className="ai-tools-eyebrow">DIGITAL MARKETING COMMAND CENTER</p><h1>AI Tools</h1><p>Discover and manage your team's AI resources.</p></div>
        <span className="ai-tools-count">{tools.length} tools</span>
      </header>

      {message && <div className="ai-tools-message" role="status">{message}</div>}

      {!isAdmin ? (
        <details className="ai-tools-admin-login">
          <summary>Office Admin Login</summary>
          <form onSubmit={login} className="ai-tools-form ai-tools-login-form">
            <label>Admin username<input autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required /></label>
            <label>Admin password<input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
            <button type="submit">Login to Manage Tools</button>
          </form>
          <p className="ai-tools-hint">Only credentials configured on the Flask server can sign in.</p>
        </details>
      ) : (
        <section className="ai-tools-admin-panel">
          <div className="ai-tools-panel-top"><h2>{editingId ? "Edit AI Tool" : "Add an AI Tool"}</h2><button type="button" className="ai-tools-secondary" onClick={logout}>Logout</button></div>
          <form onSubmit={saveTool} className="ai-tools-form">
            <div className="ai-tools-form-grid">
              <label>Tool name<input name="name" value={form.name} onChange={change} maxLength={120} required placeholder="e.g. ChatGPT" /></label>
              <label>Website URL<input name="url" type="url" value={form.url} onChange={change} maxLength={2048} required placeholder="https://example.com" /></label>
              <label>Category<input name="category" value={form.category} onChange={change} maxLength={80} placeholder="Writing, SEO, Images..." /></label>
              <label className="ai-tools-description-field">Description<textarea name="description" value={form.description} onChange={change} maxLength={1000} rows={3} placeholder="What is this tool useful for?" /></label>
            </div>
            <div className="ai-tools-actions"><button type="submit" disabled={saving}>{saving ? "Saving..." : editingId ? "Update Tool" : "Add Tool"}</button>{editingId && <button type="button" className="ai-tools-secondary" onClick={() => { setEditingId(null); setForm({ name: "", url: "", category: "General", description: "" }); }}>Cancel Edit</button>}</div>
          </form>
        </section>
      )}

      <section className="ai-tools-list-section">
        <div className="ai-tools-list-heading"><div><h2>Available Tools</h2><p>Search by name, category, URL, or description.</p></div><form className="ai-tools-search" onSubmit={(e) => { e.preventDefault(); loadTools(query); }}><input aria-label="Search AI tools" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search AI tools..." /><button type="submit">Search</button></form></div>
        {loading ? <p>Loading AI tools...</p> : tools.length === 0 ? <div className="ai-tools-empty">No AI tools found. {isAdmin ? "Add your first tool above." : "Office admin can add tools after login."}</div> : (
          <div className="ai-tools-grid">{tools.map((tool) => <article className="ai-tool-card" key={tool.id}><div className="ai-tool-card-top"><span className="ai-tool-category">{tool.category || "General"}</span>{isAdmin && <div className="ai-tool-admin-actions"><button type="button" className="ai-tools-small-secondary" onClick={() => startEdit(tool)}>Edit</button><button type="button" className="ai-tools-small-danger" onClick={() => deleteTool(tool)}>Delete</button></div>}</div><h3>{tool.name}</h3><p>{tool.description || "No description added yet."}</p><a href={tool.url} target="_blank" rel="noopener noreferrer">Open website ↗</a></article>)}</div>
        )}
      </section>
    </main>
  );
}
