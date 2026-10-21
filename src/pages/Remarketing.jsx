
import React from "react";
import { Link } from "react-router-dom";
import "./Remarketing.css";

const topics = [
  {
    icon: "🔄",
    title: "Remarketing Basics",
    description:
      "Understand how businesses reconnect with people who previously interacted with their website or ads.",
  },
  {
    icon: "🎯",
    title: "Audience Segmentation",
    description:
      "Group audiences by website visits, product interests and permitted customer interactions.",
  },
  {
    icon: "🔎",
    title: "Google Ads Remarketing",
    description:
      "Explore audience segments and eligible remarketing campaign options in Google Ads.",
  },
  {
    icon: "📱",
    title: "Meta Pixel",
    description:
      "Learn how the Meta Pixel can measure eligible website events and campaign performance.",
  },
  {
    icon: "🛒",
    title: "Cart Abandonment",
    description:
      "Understand ways to reconnect with shoppers who leave before completing a purchase.",
  },
  {
    icon: "📈",
    title: "Conversion Tracking",
    description:
      "Measure purchases, registrations and other valuable actions after an ad interaction.",
  },
  {
    icon: "✉️",
    title: "Email Retargeting",
    description:
      "Learn consent-based follow-up emails for subscribers and existing customers.",
  },
  {
    icon: "💰",
    title: "Budget & Bidding",
    description:
      "Understand campaign budgets, bidding strategies and frequency management.",
  },
  {
    icon: "🔐",
    title: "Privacy & Consent",
    description:
      "Learn about consent requirements, privacy notices and advertising platform policies.",
  },
  {
    icon: "📊",
    title: "Campaign Optimization",
    description:
      "Evaluate reach, conversions, cost per conversion and return on ad spend.",
  },
];

const tools = [
  {
    name: "Google Ads",
    description: "Explore audience segments and advertising campaign options.",
    url: "https://ads.google.com/",
  },
  {
    name: "Meta Events Manager",
    description: "Explore website event measurement and data sources.",
    url: "https://www.facebook.com/events_manager2/",
  },
  {
    name: "Google Analytics",
    description: "Analyze website audiences, events and conversions.",
    url: "https://analytics.google.com/",
  },
];

export default function Remarketing() {
  return (
    <main className="remarketing-page">
      <nav className="remarketing-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Remarketing & Retargeting</span>
      </nav>

      <section className="remarketing-hero">
        <div className="remarketing-hero-content">
          <span className="remarketing-label">DIGITAL MARKETING LEARNING HUB</span>
          <h1>Remarketing & Retargeting</h1>
          <p>
            Learn how businesses reconnect with previous website visitors,
            understand audience behavior and improve advertising conversions.
          </p>
          <div className="remarketing-points">
            <span>✓ Audience Targeting</span>
            <span>✓ Campaign Tracking</span>
            <span>✓ Practical Learning</span>
          </div>
        </div>

        <div className="remarketing-hero-icon" aria-hidden="true">
          <span>🔁</span>
          <strong>Reach the Right Audience</strong>
        </div>
      </section>

      <section className="remarketing-section">
        <div className="remarketing-heading">
          <span>LEARNING MODULES</span>
          <h2>Topics to Learn</h2>
          <p>Learn the concepts and understand how advertising platforms work.</p>
        </div>

        <div className="remarketing-grid">
          {topics.map((topic, index) => (
            <article className="remarketing-card" key={topic.title}>
              <div className="remarketing-icon">{topic.icon}</div>
              <span className="remarketing-number">
                MODULE {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="remarketing-project">
        <div className="remarketing-project-icon">🚀</div>
        <div>
          <span className="remarketing-label">PRACTICAL PROJECT</span>
          <h2>Plan a Remarketing Campaign</h2>
          <p>
            Create a sample campaign plan for a course website. Use fictional
            audience data and define how you would measure results.
          </p>
          <ul>
            <li>Define the campaign goal, such as course registrations.</li>
            <li>Create audience groups for visitors and course-page viewers.</li>
            <li>Plan suitable ad messages for each audience group.</li>
            <li>Choose conversion events and performance metrics.</li>
            <li>Document privacy, consent and frequency considerations.</li>
          </ul>
        </div>
      </section>

      <section className="remarketing-section">
        <div className="remarketing-heading">
          <span>OFFICIAL RESOURCES</span>
          <h2>Explore Marketing Tools</h2>
        </div>

        <div className="remarketing-tools">
          {tools.map((tool) => (
            <article className="remarketing-tool-card" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a href={tool.url} target="_blank" rel="noreferrer">
                Explore Tool ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="remarketing-bottom">
        <h2>Turn Previous Visits into Opportunities</h2>
        <p>
          Learn audience targeting, campaign measurement and responsible
          advertising practices.
        </p>
        <Link to="/" className="remarketing-button">
          ← Back to All Topics
        </Link>
      </section>
    </main>
  );
}
