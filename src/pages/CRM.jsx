
import React from "react";
import { Link } from "react-router-dom";
import "./CRM.css";

const crmTopics = [
  {
    icon: "📘",
    title: "CRM Fundamentals",
    description:
      "Understand CRM, its benefits, customer relationships and business use cases.",
  },
  {
    icon: "👥",
    title: "Customer Data Management",
    description:
      "Organize customer names, contact details, preferences and interaction history.",
  },
  {
    icon: "🎯",
    title: "Lead Management",
    description:
      "Capture leads, assign owners, track lead status and qualify potential customers.",
  },
  {
    icon: "📊",
    title: "Sales Pipeline",
    description:
      "Track prospects through stages such as new lead, qualified, proposal and won.",
  },
  {
    icon: "📞",
    title: "Follow-ups & Activities",
    description:
      "Manage calls, meetings, reminders, tasks and customer follow-up schedules.",
  },
  {
    icon: "✉️",
    title: "Email & Communication",
    description:
      "Understand customer communication history and email integration with CRM.",
  },
  {
    icon: "⚙️",
    title: "CRM Automation",
    description:
      "Learn how workflows can assign leads, send reminders and update records.",
  },
  {
    icon: "📈",
    title: "CRM Reports & Analytics",
    description:
      "Measure sales performance, lead conversion, customer retention and team activity.",
  },
  {
    icon: "🔐",
    title: "CRM Security",
    description:
      "Understand user roles, permissions, customer data privacy and secure access.",
  },
  {
    icon: "🤖",
    title: "AI in CRM",
    description:
      "Explore AI-assisted lead scoring, customer insights and sales recommendations.",
  },
];

const crmTools = [
  {
    name: "HubSpot CRM",
    description: "Explore CRM features and customer management tools.",
    url: "https://www.hubspot.com/products/crm",
  },
  {
    name: "Salesforce",
    description: "Learn about sales, service and customer relationship management.",
    url: "https://www.salesforce.com/",
  },
  {
    name: "Zoho CRM",
    description: "Explore lead management, sales automation and CRM analytics.",
    url: "https://www.zoho.com/crm/",
  },
];

function CRM() {
  return (
    <main className="crm-page">
      <nav className="crm-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>CRM & Customer Management</span>
      </nav>

      <section className="crm-hero">
        <div className="crm-hero-content">
          <span className="crm-label">DIGITAL MARKETING LEARNING HUB</span>
          <h1>CRM & Customer Management</h1>
          <p>
            Learn how businesses manage customers, track leads, organize sales
            pipelines and build stronger customer relationships.
          </p>

          <div className="crm-hero-points">
            <span>✓ Beginner Friendly</span>
            <span>✓ Practical Learning</span>
            <span>✓ Career Skills</span>
          </div>
        </div>

        <div className="crm-hero-icon" aria-hidden="true">
          <span>👥</span>
          <div>Customer Relationships</div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-section-heading">
          <span>LEARNING MODULES</span>
          <h2>CRM Topics to Learn</h2>
          <p>Start with the basics and progress to practical CRM workflows.</p>
        </div>

        <div className="crm-topic-grid">
          {crmTopics.map((topic, index) => (
            <article className="crm-topic-card" key={topic.title}>
              <div className="crm-topic-icon">{topic.icon}</div>
              <span className="crm-topic-number">
                MODULE {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="crm-project">
        <div className="crm-project-icon">🚀</div>
        <div>
          <span className="crm-label">PRACTICAL PROJECT</span>
          <h2>Build a Simple Customer Management System</h2>
          <p>
            Create a sample customer list, add lead status, track follow-up
            dates, organize sales stages and prepare a basic sales report.
          </p>
          <ul>
            <li>Create 20 sample customer records.</li>
            <li>Classify leads as New, Qualified, In Progress or Won.</li>
            <li>Record follow-up dates and next actions.</li>
            <li>Calculate lead conversion using sample data.</li>
          </ul>
          <p className="crm-note">
            Practice using fictional customer data. Do not upload real customer
            information without proper authorization.
          </p>
        </div>
      </section>

      <section className="crm-section crm-tools-section">
        <div className="crm-section-heading">
          <span>USEFUL RESOURCES</span>
          <h2>Explore CRM Tools</h2>
          <p>Visit these official websites to explore their features.</p>
        </div>

        <div className="crm-tools-grid">
          {crmTools.map((tool) => (
            <article className="crm-tool-card" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a href={tool.url} target="_blank" rel="noreferrer">
                Explore Tool <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="crm-bottom">
        <h2>Ready to Learn CRM?</h2>
        <p>
          Understand customers better, organize leads and improve your sales
          management skills.
        </p>
        <Link to="/" className="crm-home-button">
          ← Back to All Topics
        </Link>
      </section>
    </main>
  );
}

export default CRM;
