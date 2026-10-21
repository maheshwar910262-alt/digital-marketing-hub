
import React from "react";
import { Link } from "react-router-dom";
import "./InfluencerMarketing.css";

const topics = [
  {
    icon: "🤝",
    title: "Influencer Marketing Basics",
    description:
      "Learn how brands collaborate with creators to promote products and services.",
  },
  {
    icon: "👥",
    title: "Types of Influencers",
    description:
      "Understand nano, micro, macro and mega influencers and their audiences.",
  },
  {
    icon: "🔎",
    title: "Influencer Research",
    description:
      "Find creators whose audience, content and values match a brand.",
  },
  {
    icon: "📊",
    title: "Audience Analysis",
    description:
      "Evaluate audience relevance, engagement quality and content performance.",
  },
  {
    icon: "💰",
    title: "Budget & Pricing",
    description:
      "Plan campaign budgets and understand different creator compensation models.",
  },
  {
    icon: "📝",
    title: "Campaign Briefs",
    description:
      "Prepare campaign goals, content requirements, deadlines and brand guidelines.",
  },
  {
    icon: "🎬",
    title: "Content Collaboration",
    description:
      "Plan Reels, Shorts, product demonstrations, reviews and creator-led stories.",
  },
  {
    icon: "📣",
    title: "Influencer Outreach",
    description:
      "Learn professional outreach, collaboration proposals and follow-up communication.",
  },
  {
    icon: "⚖️",
    title: "Disclosure & Agreements",
    description:
      "Understand sponsorship disclosures, usage rights, deliverables and agreements.",
  },
  {
    icon: "📈",
    title: "Campaign Measurement",
    description:
      "Measure reach, engagement, referral traffic, conversions and campaign ROI.",
  },
];

const tools = [
  {
    name: "Instagram for Creators",
    description: "Explore creator resources and professional account features.",
    url: "https://creators.instagram.com/",
  },
  {
    name: "YouTube Creator Academy",
    description: "Learn about channel growth, content and creator development.",
    url: "https://creatoracademy.youtube.com/",
  },
  {
    name: "Google Analytics",
    description: "Measure website traffic and conversions from campaign links.",
    url: "https://analytics.google.com/",
  },
];

export default function InfluencerMarketing() {
  return (
    <main className="influencer-page">
      <nav className="influencer-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Influencer Marketing</span>
      </nav>

      <section className="influencer-hero">
        <div className="influencer-hero-content">
          <span className="influencer-label">
            DIGITAL MARKETING LEARNING HUB
          </span>
          <h1>Influencer Marketing</h1>
          <p>
            Learn how brands work with content creators to build awareness,
            reach relevant audiences and measure campaign results.
          </p>
          <div className="influencer-points">
            <span>✓ Creator Research</span>
            <span>✓ Campaign Planning</span>
            <span>✓ Performance Tracking</span>
          </div>
        </div>

        <div className="influencer-hero-icon" aria-hidden="true">
          <span>🤝</span>
          <strong>Brands + Creators</strong>
        </div>
      </section>

      <section className="influencer-section">
        <div className="influencer-heading">
          <span>LEARNING MODULES</span>
          <h2>Topics to Learn</h2>
          <p>Learn the complete influencer campaign workflow step by step.</p>
        </div>

        <div className="influencer-grid">
          {topics.map((topic, index) => (
            <article className="influencer-card" key={topic.title}>
              <div className="influencer-icon">{topic.icon}</div>
              <span className="influencer-number">
                MODULE {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="influencer-project">
        <div className="influencer-project-icon">🚀</div>
        <div>
          <span className="influencer-label">PRACTICAL PROJECT</span>
          <h2>Plan a Creator Campaign</h2>
          <p>
            Create a sample campaign for a digital marketing course or local
            business using fictional campaign information.
          </p>
          <ul>
            <li>Define the target audience and campaign objective.</li>
            <li>Shortlist three relevant creators.</li>
            <li>Prepare a campaign brief and estimated budget.</li>
            <li>Plan trackable campaign links using UTM parameters.</li>
            <li>Measure reach, engagement, leads and conversions.</li>
          </ul>
        </div>
      </section>

      <section className="influencer-section">
        <div className="influencer-heading">
          <span>OFFICIAL RESOURCES</span>
          <h2>Explore Creator Tools</h2>
        </div>

        <div className="influencer-tools">
          {tools.map((tool) => (
            <article className="influencer-tool-card" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a href={tool.url} target="_blank" rel="noreferrer">
                Explore Resource ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="influencer-bottom">
        <h2>Build Better Creator Campaigns</h2>
        <p>
          Learn to choose relevant creators, plan collaborations and evaluate
          marketing results.
        </p>
        <Link to="/" className="influencer-button">
          ← Back to All Topics
        </Link>
      </section>
    </main>
  );
}
