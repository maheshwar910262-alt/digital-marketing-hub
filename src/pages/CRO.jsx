import { Link } from "react-router-dom";
import "./CRO.css";

const topics = [
  {
    number: "01",
    title: "What is CRO?",
    description:
      "Conversion Rate Optimization అంటే website visitors లో ఎక్కువ మందిని leads లేదా customers గా convert చేయడానికి website ని improve చేయడం.",
    points: [
      "Conversion basics",
      "Conversion rate calculation",
      "Business goals",
      "User experience",
    ],
  },
  {
    number: "02",
    title: "Understand Your Audience",
    description:
      "Visitors ఏం కోరుకుంటున్నారు, ఎక్కడ ఇబ్బంది పడుతున్నారు అనేది తెలుసుకోవాలి.",
    points: [
      "Target audience",
      "Customer needs",
      "User feedback",
      "Visitor behavior",
    ],
  },
  {
    number: "03",
    title: "Landing Page Optimization",
    description:
      "Landing page ని clear message, useful content మరియు strong call to action తో improve చేయండి.",
    points: [
      "Clear headline",
      "Relevant content",
      "Trust signals",
      "Simple layout",
    ],
  },
  {
    number: "04",
    title: "Call To Action (CTA)",
    description:
      "Visitors next step తీసుకునేలా buttons మరియు links స్పష్టంగా ఉండాలి.",
    points: [
      "Register Now",
      "Book a Demo",
      "Contact Us",
      "Download Now",
    ],
  },
  {
    number: "05",
    title: "Form Optimization",
    description:
      "Lead forms ని simple గా ఉంచి, unnecessary fields తగ్గించడం ద్వారా completion improve చేయవచ్చు.",
    points: [
      "Required fields మాత్రమే అడగండి",
      "Clear labels",
      "Useful validation messages",
      "Mobile-friendly forms",
    ],
  },
  {
    number: "06",
    title: "Website Speed",
    description:
      "Slow pages visitors experience ని ప్రభావితం చేయవచ్చు. Loading performance ని measure చేసి improve చేయండి.",
    points: [
      "Page loading time",
      "Image optimization",
      "Core Web Vitals",
      "Mobile performance",
    ],
  },
  {
    number: "07",
    title: "Mobile Optimization",
    description:
      "Mobile visitors కూడా content చదవడానికి, forms fill చేయడానికి, buttons click చేయడానికి సులభంగా ఉండాలి.",
    points: [
      "Responsive design",
      "Readable text",
      "Touch-friendly buttons",
      "Simple navigation",
    ],
  },
  {
    number: "08",
    title: "A/B Testing",
    description:
      "Page లేదా CTA కి రెండు versions test చేసి, predefined goal ప్రకారం results compare చేయండి.",
    points: [
      "Create a hypothesis",
      "Test one main change",
      "Measure the same goal",
      "Avoid premature conclusions",
    ],
  },
  {
    number: "09",
    title: "Analytics & Tracking",
    description:
      "Visitors ఎక్కడి నుంచి వచ్చారు, ఏ actions తీసుకున్నారు, conversions ఎన్ని వచ్చాయి అనేది measure చేయండి.",
    points: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Landing page reports",
      "Conversion events",
    ],
  },
  {
    number: "10",
    title: "Trust & Social Proof",
    description:
      "Genuine testimonials, clear contact information మరియు transparent policies visitors కి decision తీసుకోవడంలో సహాయపడతాయి.",
    points: [
      "Authentic reviews",
      "Business contact details",
      "Transparent pricing",
      "Privacy information",
    ],
  },
];

function CRO() {
  return (
    <div className="cro-page">
      <div className="cro-container">
        <Link to="/" className="cro-home">
          ← Home
        </Link>

        <header className="cro-hero">
          <span>WEBSITE PERFORMANCE</span>
          <h1>Conversion Rate Optimization</h1>
          <p>
            Learn how to improve landing pages, forms, calls to action,
            website experience and conversion tracking.
          </p>

          <div className="cro-flow">
            <span>Visitors</span>
            <b>→</b>
            <span>Experience</span>
            <b>→</b>
            <span>Conversion</span>
            <b>→</b>
            <span>Analysis</span>
          </div>
        </header>

        <section className="cro-intro">
          <span>LEARN STEP BY STEP</span>
          <h2>What Can You Do With CRO?</h2>
          <p>
            Website visitors ని enquiries, registrations లేదా sales గా
            convert చేయడానికి problems identify చేసి, improvements test
            చేసి, results measure చేయవచ్చు.
          </p>
        </section>

        <section className="cro-topics">
          {topics.map((topic) => (
            <article className="cro-card" key={topic.number}>
              <div className="cro-number">{topic.number}</div>
              <div className="cro-card-content">
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

        <section className="cro-project">
          <span>PRACTICAL PROJECT</span>
          <h2>Optimize a Course Registration Page</h2>
          <p>
            Data Analytics training course landing page ని analyze చేసి,
            registration conversions improve చేయడానికి test plan తయారు చేయండి.
          </p>

          <div className="cro-project-grid">
            <div>
              <strong>Goal</strong>
              <p>Increase completed registrations</p>
            </div>
            <div>
              <strong>Page</strong>
              <p>Course landing page</p>
            </div>
            <div>
              <strong>Test</strong>
              <p>Headline or CTA variation</p>
            </div>
            <div>
              <strong>Measure</strong>
              <p>Completed registrations / visitors</p>
            </div>
          </div>

          <h3>Project Checklist</h3>
          <ul className="cro-checklist">
            <li>✓ Define a conversion goal</li>
            <li>✓ Check page speed and mobile layout</li>
            <li>✓ Review headline and CTA</li>
            <li>✓ Check form usability</li>
            <li>✓ Set up conversion tracking</li>
            <li>✓ Test and document the results</li>
          </ul>
        </section>

        <section className="cro-tools">
          <span>OFFICIAL TOOLS</span>
          <h2>Tools to Practice CRO</h2>

          <div className="cro-resource-list">
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics →
            </a>

            <a
              href="https://tagmanager.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Tag Manager →
            </a>

            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noreferrer"
            >
              PageSpeed Insights →
            </a>

            <a
              href="https://clarity.microsoft.com/"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Clarity →
            </a>
          </div>
        </section>

        <footer className="cro-footer">
          Conversion Rate Optimization Learning Hub
        </footer>
      </div>
    </div>
  );
}

export default CRO;