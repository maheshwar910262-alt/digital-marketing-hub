import { Link } from "react-router-dom";
import "./GoogleTagManager.css";

const topics = [
  {
    number: "01",
    title: "What is Google Tag Manager?",
    description:
      "Google Tag Manager (GTM) అనేది website tracking tags ని ఒకే place నుంచి manage చేయడానికి ఉపయోగపడే tool.",
    points: [
      "Understand GTM basics",
      "Create a GTM account",
      "Create a container",
      "Install GTM on your website",
    ],
  },
  {
    number: "02",
    title: "Tags",
    description:
      "Tags అనేవి website activity లేదా user actions గురించి tracking tools కి information పంపే code snippets లేదా configurations.",
    points: [
      "Google tag",
      "Google Analytics 4 configuration",
      "Conversion tracking tags",
      "Third-party marketing tags",
    ],
  },
  {
    number: "03",
    title: "Triggers",
    description:
      "ఏ action జరిగినప్పుడు tag fire కావాలో triggers ద్వారా configure చేస్తారు.",
    points: [
      "Page View",
      "Click",
      "Form Submission",
      "Custom Events",
    ],
  },
  {
    number: "04",
    title: "Variables",
    description:
      "Variables ద్వారా page URL, click text లేదా event information వంటి values capture చేయవచ్చు.",
    points: [
      "Built-in variables",
      "Click URL",
      "Page URL",
      "Data Layer Variables",
    ],
  },
  {
    number: "05",
    title: "Google Analytics 4",
    description:
      "GTM ద్వారా website events ని Google Analytics 4 కి పంపే setup నేర్చుకోండి.",
    points: [
      "Connect GA4",
      "Track page views",
      "Track button clicks",
      "Verify events in DebugView",
    ],
  },
  {
    number: "06",
    title: "Form Tracking",
    description:
      "Website forms ద్వారా enquiries వస్తున్నాయా అనే విషయాన్ని track చేయవచ్చు.",
    points: [
      "Form submission event",
      "Thank-you page tracking",
      "Lead conversion event",
      "Test duplicate events",
    ],
  },
  {
    number: "07",
    title: "Button Click Tracking",
    description:
      "Contact, Register, Download వంటి important buttons మీద clicks track చేయవచ్చు.",
    points: [
      "Enable click variables",
      "Configure click trigger",
      "Create GA4 event tag",
      "Test using Preview mode",
    ],
  },
  {
    number: "08",
    title: "Preview & Debug",
    description:
      "Publish చేయడానికి ముందు tags, triggers మరియు events సరిగ్గా పనిచేస్తున్నాయో పరీక్షించాలి.",
    points: [
      "Open Preview mode",
      "Connect Tag Assistant",
      "Check fired tags",
      "Fix tracking errors",
    ],
  },
  {
    number: "09",
    title: "Consent & Privacy",
    description:
      "Website visitors privacy choices మరియు applicable consent requirements ని గౌరవిస్తూ tracking setup చేయాలి.",
    points: [
      "Consent management",
      "Consent Mode basics",
      "Privacy policy",
      "Respect visitor preferences",
    ],
  },
  {
    number: "10",
    title: "Publish & Version Control",
    description:
      "Testing complete అయిన తర్వాత changes ని version తో publish చేయడం నేర్చుకోండి.",
    points: [
      "Review workspace changes",
      "Add version name",
      "Write a change description",
      "Publish and verify",
    ],
  },
];

function GoogleTagManager() {
  return (
    <div className="gtm-page">
      <div className="gtm-container">
        <Link to="/" className="gtm-home">
          ← Home
        </Link>

        <header className="gtm-hero">
          <span>TRACKING & ANALYTICS</span>
          <h1>Google Tag Manager</h1>
          <p>
            Learn website tags, triggers, variables, GA4 events,
            conversion tracking and debugging step by step.
          </p>

          <div className="gtm-flow">
            <span>Website</span>
            <b>→</b>
            <span>GTM</span>
            <b>→</b>
            <span>Events</span>
            <b>→</b>
            <span>Analytics</span>
          </div>
        </header>

        <section className="gtm-intro">
          <span>BEGINNER TO PRACTICAL</span>
          <h2>What Can You Do With GTM?</h2>
          <p>
            Website visits, button clicks, form submissions మరియు
            conversions ని track చేయడానికి tracking setup నేర్చుకోండి.
            GTM container ని website కి connect చేసి, tags ని test చేసి,
            publish చేయడం practice చేయండి.
          </p>
        </section>

        <section className="gtm-topics">
          {topics.map((topic) => (
            <article className="gtm-card" key={topic.number}>
              <div className="gtm-number">{topic.number}</div>
              <div className="gtm-card-content">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <ul>
                  {topic.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="gtm-project">
          <span>PRACTICAL PROJECT</span>
          <h2>Track Website Lead Form</h2>
          <p>
            మీ practice website లో form submit చేసినప్పుడు GA4 event
            record అయ్యేలా GTM setup చేయండి.
          </p>

          <div className="gtm-project-grid">
            <div>
              <strong>Goal</strong>
              <p>Track successful lead submissions</p>
            </div>
            <div>
              <strong>Trigger</strong>
              <p>Form success event</p>
            </div>
            <div>
              <strong>Tag</strong>
              <p>GA4 Event</p>
            </div>
            <div>
              <strong>Test</strong>
              <p>GTM Preview and GA4 DebugView</p>
            </div>
          </div>

          <h3>Project Checklist</h3>
          <ul className="gtm-checklist">
            <li>✓ Create GTM account and container</li>
            <li>✓ Connect the practice website</li>
            <li>✓ Configure the GA4 event</li>
            <li>✓ Test the event before publishing</li>
            <li>✓ Confirm the event in GA4</li>
          </ul>
        </section>

        <section className="gtm-tools">
          <span>OFFICIAL RESOURCES</span>
          <h2>Practice With Google's Tools</h2>
          <div className="gtm-resource-list">
            <a
              href="https://tagmanager.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Tag Manager →
            </a>
            <a
              href="https://support.google.com/tagmanager/"
              target="_blank"
              rel="noreferrer"
            >
              GTM Help Center →
            </a>
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics →
            </a>
            <a
              href="https://tagassistant.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Tag Assistant →
            </a>
          </div>
        </section>

        <footer className="gtm-footer">
          Google Tag Manager Learning Hub
        </footer>
      </div>
    </div>
  );
}

export default GoogleTagManager;