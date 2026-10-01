import { Link } from "react-router-dom";
import "./MetaAds.css";

function MetaAds() {
  const topics = [
    {
      number: "01",
      title: "What is Meta Ads?",
      what: "Meta Ads అంటే Facebook మరియు Instagram వంటి Meta platformsలో paid advertising చేయడం.",
      learn: [
        "Facebook Ads అంటే ఏమిటి?",
        "Instagram Ads అంటే ఏమిటి?",
        "Organic Marketing vs Paid Marketing",
        "Meta Ads ఎలా పనిచేస్తాయి?"
      ]
    },
    {
      number: "02",
      title: "Before Starting",
      what: "Ads ప్రారంభించే ముందు basic business assets సిద్ధంగా ఉండాలి.",
      learn: [
        "Facebook account",
        "Facebook Page",
        "Instagram account",
        "Business setup",
        "Ad account",
        "Payment method"
      ]
    },
    {
      number: "03",
      title: "Business Setup",
      what: "Business assetsను Meta environmentలో organize చేయడం.",
      learn: [
        "Business account setup",
        "Facebook Page connect చేయడం",
        "Instagram account connect చేయడం",
        "Ad account setup",
        "Access and permissions"
      ]
    },
    {
      number: "04",
      title: "Campaign Structure",
      what: "Meta Adsలో campaign structureను అర్థం చేసుకోవడం చాలా ముఖ్యమైనది.",
      learn: [
        "Campaign",
        "Ad Set",
        "Ad",
        "Campaign level settings",
        "Ad Set level settings",
        "Ad level settings"
      ]
    },
    {
      number: "05",
      title: "Campaign Objective",
      what: "మీ business goalకి సరిపోయే advertising objectiveను ఎంచుకోవడం.",
      learn: [
        "Awareness",
        "Traffic",
        "Engagement",
        "Leads",
        "Sales",
        "App promotion"
      ]
    },
    {
      number: "06",
      title: "Audience Targeting",
      what: "మీ advertisement ఎవరికి కనిపించాలో audience targeting ద్వారా define చేస్తారు.",
      learn: [
        "Location",
        "Age",
        "Gender",
        "Interests",
        "Custom Audiences",
        "Lookalike Audiences"
      ]
    },
    {
      number: "07",
      title: "Budget & Schedule",
      what: "Campaignకి ఎంత budget పెట్టాలి మరియు ఎప్పుడు run చేయాలో configure చేయడం.",
      learn: [
        "Daily budget",
        "Lifetime budget",
        "Start date",
        "End date",
        "Budget planning",
        "Campaign duration"
      ]
    },
    {
      number: "08",
      title: "Ad Creative",
      what: "Peopleకి కనిపించే actual advertisementను create చేయడం.",
      learn: [
        "Image Ads",
        "Video Ads",
        "Carousel Ads",
        "Primary Text",
        "Headline",
        "Call To Action"
      ]
    },
    {
      number: "09",
      title: "Placements",
      what: "Ad ఎక్కడ కనిపించాలో placements ద్వారా manage చేయవచ్చు.",
      learn: [
        "Facebook Feed",
        "Instagram Feed",
        "Instagram Stories",
        "Instagram Reels",
        "Facebook Stories",
        "Available Meta placements"
      ]
    },
    {
      number: "10",
      title: "Create & Publish",
      what: "Campaign settings complete చేసిన తర్వాత advertisementను review చేసి publish చేయడం.",
      learn: [
        "Review campaign",
        "Check audience",
        "Check budget",
        "Check creative",
        "Check destination URL",
        "Publish"
      ]
    },
    {
      number: "11",
      title: "Lead Generation",
      what: "Ads ద్వారా potential customers నుంచి enquiries లేదా contact information collect చేయడం.",
      learn: [
        "Lead Ads",
        "Lead Forms",
        "Landing Pages",
        "Call To Action",
        "Lead collection",
        "Lead follow-up"
      ]
    },
    {
      number: "12",
      title: "Ad Performance",
      what: "Campaign run అయిన తర్వాత resultsను numbers ద్వారా understand చేయాలి.",
      learn: [
        "Reach",
        "Impressions",
        "Clicks",
        "CTR",
        "CPC",
        "Leads",
        "Cost per Lead",
        "Conversions"
      ]
    },
    {
      number: "13",
      title: "Optimization",
      what: "Performance data ఆధారంగా campaignలో changes చేయడం.",
      learn: [
        "Poor-performing ads identify చేయడం",
        "Creative testing",
        "Audience testing",
        "Budget adjustments",
        "A/B testing",
        "Performance comparison"
      ]
    },
    {
      number: "14",
      title: "Practical Project",
      what: "ఒక real business campaignను planning నుంచి reporting వరకు practice చేయండి.",
      learn: [
        "Business: Data Analytics Course",
        "Location: Hyderabad",
        "Goal: Generate student leads",
        "Create ad creative",
        "Set audience",
        "Set budget",
        "Publish campaign",
        "Check leads and results"
      ]
    }
  ];

  return (
    <div className="meta-page">

      <div className="meta-container">

        <Link to="/" className="meta-home">
          ← Home
        </Link>

        <header className="meta-hero">
          <div className="meta-hero-content">
            <span className="meta-label">DIGITAL MARKETING</span>
            <h1>Meta Ads</h1>

            <p>
              Learn Meta Ads from the beginning to campaign creation,
              publishing, performance analysis and optimization.
            </p>

            <div className="meta-flow">
              <span>Plan</span>
              <b>→</b>
              <span>Create</span>
              <b>→</b>
              <span>Publish</span>
              <b>→</b>
              <span>Analyze</span>
              <b>→</b>
              <span>Optimize</span>
            </div>
          </div>
        </header>

        <section className="meta-intro">
          <h2>Meta Ads — Start to End</h2>

          <p>
            ఈ pageలో Meta Ads campaignను beginning నుంచి end వరకు
            ఎలా plan చేయాలి, create చేయాలి, publish చేయాలి,
            results ఎలా check చేయాలి మరియు optimize చేయాలి అనేది
            step-by-stepగా నేర్చుకోవచ్చు.
          </p>
        </section>

        <section className="meta-topics">

          {topics.map((topic) => (
            <article className="meta-card" key={topic.number}>

              <div className="meta-number">
                {topic.number}
              </div>

              <div className="meta-card-content">

                <h3>{topic.title}</h3>

                <p className="meta-what">
                  {topic.what}
                </p>

                <ul>
                  {topic.learn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>
            </article>
          ))}

        </section>

        <section className="meta-campaign">

          <div className="meta-section-title">
            <span>REAL WORKFLOW</span>
            <h2>Example Campaign Flow</h2>
          </div>

          <div className="campaign-flow">

            <div className="flow-box">
              <strong>01</strong>
              <h3>Business Goal</h3>
              <p>Generate leads for a Data Analytics course.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <strong>02</strong>
              <h3>Audience</h3>
              <p>Define location, age and relevant audience.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <strong>03</strong>
              <h3>Creative</h3>
              <p>Create image/video, text, headline and CTA.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <strong>04</strong>
              <h3>Campaign</h3>
              <p>Set objective, budget, placements and publish.</p>
            </div>

          </div>
        </section>

        <section className="meta-checklist">

          <div className="meta-section-title">
            <span>BEFORE PUBLISHING</span>
            <h2>Meta Ads Checklist</h2>
          </div>

          <div className="check-grid">

            <div>✓ Campaign objective checked</div>
            <div>✓ Audience checked</div>
            <div>✓ Budget checked</div>
            <div>✓ Creative checked</div>
            <div>✓ CTA checked</div>
            <div>✓ Landing page checked</div>
            <div>✓ Tracking checked</div>
            <div>✓ Final review completed</div>

          </div>

        </section>

        <section className="meta-results">

          <div className="meta-section-title">
            <span>AFTER PUBLISHING</span>
            <h2>What Should You Check?</h2>
          </div>

          <div className="result-grid">

            <div>
              <strong>Reach</strong>
              <p>How many people saw the advertisement.</p>
            </div>

            <div>
              <strong>Impressions</strong>
              <p>How many times the ad was displayed.</p>
            </div>

            <div>
              <strong>CTR</strong>
              <p>How often people clicked compared with impressions.</p>
            </div>

            <div>
              <strong>CPC</strong>
              <p>Average cost associated with a click.</p>
            </div>

            <div>
              <strong>Leads</strong>
              <p>Number of leads generated from the campaign.</p>
            </div>

            <div>
              <strong>Cost per Lead</strong>
              <p>Average advertising cost associated with each lead.</p>
            </div>

          </div>

        </section>

        <section className="meta-practical">

          <h2>🎯 Student Practical Task</h2>

          <p>
            ఒక imaginary Data Analytics Training Institute కోసం
            Meta Ads campaign plan చేయండి.
          </p>

          <div className="practical-list">
            <span>1. Goal select చేయండి</span>
            <span>2. Audience define చేయండి</span>
            <span>3. Ad creative prepare చేయండి</span>
            <span>4. Campaign structure create చేయండి</span>
            <span>5. Budget decide చేయండి</span>
            <span>6. Lead generation flow create చేయండి</span>
            <span>7. Performance metrics identify చేయండి</span>
            <span>8. Optimization plan తయారు చేయండి</span>
          </div>

        </section>

        <section className="meta-official">

          <span>OFFICIAL RESOURCE</span>

          <h2>Ready to Work with Meta Ads?</h2>

          <p>
            Above concepts understand చేసిన తర్వాత official Meta
            advertising environmentకి వెళ్లి platformను explore చేయండి.
          </p>

          <a
            href="https://business.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="meta-visit"
          >
            Visit Meta Business →
          </a>

          <small>
            Official Meta Business website
          </small>

        </section>

        <footer className="meta-footer">
          Meta Ads Learning Hub
        </footer>

      </div>
    </div>
  );
}

export default MetaAds;