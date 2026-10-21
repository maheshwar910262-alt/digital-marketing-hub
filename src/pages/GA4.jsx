
import React from "react";
import { Link } from "react-router-dom";
import "./GA4.css";

const topics = [
  {
    icon: "📘",
    title: "GA4 Fundamentals",
    description:
      "Understand Google Analytics 4, how it works and why businesses use it.",
  },
  {
    icon: "🌐",
    title: "Property Setup",
    description:
      "Learn about GA4 properties, web data streams and measurement IDs.",
  },
  {
    icon: "📊",
    title: "Realtime Reports",
    description:
      "Explore recent user activity and events received by your property.",
  },
  {
    icon: "👥",
    title: "User & Traffic Reports",
    description:
      "Analyze users, sessions, traffic sources, devices and locations.",
  },
  {
    icon: "⚡",
    title: "Events & Parameters",
    description:
      "Understand page_view, click, form_submit and custom event tracking.",
  },
  {
    icon: "🎯",
    title: "Key Events & Conversions",
    description:
      "Measure valuable actions such as registrations, enquiries and purchases.",
  },
  {
    icon: "🔗",
    title: "UTM Campaign Tracking",
    description:
      "Use campaign parameters to understand which marketing campaigns bring visitors.",
  },
  {
    icon: "🏷️",
    title: "GTM Integration",
    description:
      "Learn how Google Tag Manager can help deploy and manage analytics tags.",
  },
  {
    icon: "🛒",
    title: "E-commerce Analytics",
    description:
      "Understand product views, add-to-cart actions, checkout and purchase events.",
  },
  {
    icon: "📈",
    title: "Reports & Exploration",
    description:
      "Create useful reports to understand engagement and marketing performance.",
  },
  {
    icon: "🔐",
    title: "Privacy & Data Settings",
    description:
      "Understand consent, data retention, access permissions and privacy settings.",
  },
  {
    icon: "🧪",
    title: "Debugging & Validation",
    description:
      "Check whether analytics events are configured and received correctly.",
  },
];

const tools = [
  {
    name: "Google Analytics",
    description: "Access the GA4 analytics platform.",
    url: "https://analytics.google.com/",
  },
  {
    name: "Google Tag Manager",
    description: "Manage website tags and tracking configurations.",
    url: "https://tagmanager.google.com/",
  },
  {
    name: "Google Analytics Help",
    description: "Read official setup instructions and reporting guides.",
    url: "https://support.google.com/analytics/",
  },
];

export default function GA4() {
  return (
    <main className="ga4-page">
      <nav className="ga4-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Google Analytics 4</span>
      </nav>

      <section className="ga4-hero">
        <div className="ga4-hero-content">
          <span className="ga4-label">
            DIGITAL MARKETING LEARNING HUB
          </span>
          <h1>Google Analytics 4 (GA4)</h1>
          <p>
            Learn how to measure website traffic, understand user behavior,
            track marketing campaigns and analyze conversions.
          </p>
          <div className="ga4-points">
            <span>✓ Traffic Analysis</span>
            <span>✓ Event Tracking</span>
            <span>✓ Conversion Reports</span>
          </div>
        </div>

        <div className="ga4-hero-icon" aria-hidden="true">
          <span>📊</span>
          <strong>Measure. Analyze. Improve.</strong>
        </div>
      </section>

      <section className="ga4-section">
        <div className="ga4-heading">
          <span>LEARNING MODULES</span>
          <h2>GA4 Topics to Learn</h2>
          <p>
            Follow these modules to understand analytics from setup to reporting.
          </p>
        </div>

        <div className="ga4-grid">
          {topics.map((topic, index) => (
            <article className="ga4-card" key={topic.title}>
              <div className="ga4-icon">{topic.icon}</div>
              <span className="ga4-number">
                MODULE {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ga4-project">
        <div className="ga4-project-icon">🚀</div>
        <div>
          <span className="ga4-label">PRACTICAL PROJECT</span>
          <h2>Analyze a Website's Performance</h2>
          <p>
            Practice with a test property or a website you are authorized to
            measure. Configure events and prepare a simple analytics report.
          </p>
          <ul>
            <li>Identify the main website traffic sources.</li>
            <li>Review users, sessions and engagement reports.</li>
            <li>Track a test enquiry or registration event.</li>
            <li>Use UTM parameters for a sample campaign.</li>
            <li>Summarize findings and suggest improvements.</li>
          </ul>
          <p className="ga4-note">
            Reports may take time to process. Use Realtime and DebugView when
            validating new tracking configurations.
          </p>
        </div>
      </section>

      <section className="ga4-section">
        <div className="ga4-heading">
          <span>OFFICIAL RESOURCES</span>
          <h2>Explore Analytics Tools</h2>
        </div>

        <div className="ga4-tools">
          {tools.map((tool) => (
            <article className="ga4-tool-card" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a href={tool.url} target="_blank" rel="noreferrer">
                Open Resource ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="ga4-bottom">
        <h2>Make Data-Driven Decisions</h2>
        <p>
          Learn to understand visitors, measure campaign results and improve
          website performance with analytics.
        </p>
        <Link to="/" className="ga4-button">
          ← Back to All Topics
        </Link>
      </section>
    </main>
  );
}
