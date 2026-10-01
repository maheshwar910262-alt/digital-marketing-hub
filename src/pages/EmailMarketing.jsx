import { Link } from "react-router-dom";
import "./EmailMarketing.css";

const topics = [
  {
    number: "01",
    title: "What is Email Marketing?",
    description:
      "Email Marketing అంటే customers లేదా leadsకి email ద్వారా useful information, updates, offers మరియు follow-up communication పంపడం.",
    points: [
      "Email Marketing basics",
      "Business use cases",
      "Email vs other marketing channels",
      "Email marketing funnel"
    ]
  },
  {
    number: "02",
    title: "Email Marketing Goals",
    description:
      "Campaign ప్రారంభించే ముందు email ద్వారా ఏ result కావాలో define చేయాలి.",
    points: [
      "Generate leads",
      "Nurture leads",
      "Promote products or services",
      "Increase engagement",
      "Drive website visits",
      "Generate sales"
    ]
  },
  {
    number: "03",
    title: "Target Audience",
    description:
      "ఎవరికి email పంపాలో clearగా identify చేయడం campaignలో first important step.",
    points: [
      "Ideal customer",
      "Target audience",
      "Customer interests",
      "Customer problems",
      "Buying stage"
    ]
  },
  {
    number: "04",
    title: "Build an Email List",
    description:
      "Interested people నుంచి permissionతో email contacts collect చేయాలి.",
    points: [
      "Website forms",
      "Landing pages",
      "Demo registrations",
      "Newsletter signup",
      "Lead generation campaigns"
    ]
  },
  {
    number: "05",
    title: "Lead Capture Forms",
    description:
      "Visitorsని subscribers లేదా leadsగా convert చేయడానికి forms ఉపయోగించవచ్చు.",
    points: [
      "Name field",
      "Email field",
      "Relevant information",
      "Clear CTA",
      "Thank-you page"
    ]
  },
  {
    number: "06",
    title: "Permission & Consent",
    description:
      "Marketing emails పంపే ముందు applicable permission, consent మరియు unsubscribe requirementsను understand చేయాలి.",
    points: [
      "Permission-based marketing",
      "Clear expectations",
      "Consent records",
      "Unsubscribe option",
      "Respect user preferences"
    ],
    links: [
      {
        label: "Mailchimp Email Marketing Resources",
        url: "https://mailchimp.com/resources/email-marketing-field-guide/"
      }
    ]
  },
  {
    number: "07",
    title: "Email List Segmentation",
    description:
      "ఒకే message అందరికీ పంపకుండా audienceని relevant groupsగా divide చేయవచ్చు.",
    points: [
      "New leads",
      "Existing customers",
      "Course interest",
      "Location",
      "Engagement level",
      "Customer stage"
    ]
  },
  {
    number: "08",
    title: "Types of Emails",
    description:
      "Different business situationsకి different email types ఉపయోగిస్తారు.",
    points: [
      "Welcome email",
      "Newsletter",
      "Promotional email",
      "Follow-up email",
      "Reminder email",
      "Educational email"
    ]
  },
  {
    number: "09",
    title: "Welcome Emails",
    description:
      "New subscriber లేదా leadకి first communicationగా welcome email ఉపయోగించవచ్చు.",
    points: [
      "Introduce the business",
      "Set expectations",
      "Provide useful information",
      "Add next step",
      "Build trust"
    ]
  },
  {
    number: "10",
    title: "Newsletter",
    description:
      "Regular useful content, updates, articles లేదా announcementsను subscribersకి పంపవచ్చు.",
    points: [
      "Educational content",
      "Industry updates",
      "Company updates",
      "Tips",
      "Resources"
    ]
  },
  {
    number: "11",
    title: "Promotional Emails",
    description:
      "Products, services, offers లేదా campaigns గురించి relevant subscribersకి communicate చేయవచ్చు.",
    points: [
      "Offer",
      "Product/service benefit",
      "Deadline where applicable",
      "CTA",
      "Landing page"
    ]
  },
  {
    number: "12",
    title: "Lead Follow-up",
    description:
      "Lead form submit చేసిన తర్వాత relevant and timely follow-up emails పంపవచ్చు.",
    points: [
      "Thank-you email",
      "Course information",
      "Demo reminder",
      "FAQ",
      "Next step"
    ]
  },
  {
    number: "13",
    title: "Lead Nurturing",
    description:
      "Immediately purchase చేయని leadsకి useful information ద్వారా relationship build చేయడం.",
    points: [
      "Educational emails",
      "Case studies",
      "Useful resources",
      "Frequently asked questions",
      "Offer at appropriate stage"
    ]
  },
  {
    number: "14",
    title: "Subject Line",
    description:
      "Email open చేయడానికి ముందు user చూసే main text subject line.",
    points: [
      "Clear subject",
      "Relevant message",
      "Avoid misleading claims",
      "Keep it understandable",
      "Test variations"
    ]
  },
  {
    number: "15",
    title: "Email Content",
    description:
      "Emailలో readerకి useful, clear మరియు relevant information ఇవ్వాలి.",
    points: [
      "Opening",
      "Main message",
      "Benefits",
      "Supporting information",
      "CTA"
    ]
  },
  {
    number: "16",
    title: "Call To Action",
    description:
      "Email చదివిన తర్వాత user ఏ action చేయాలో CTA clearly communicate చేయాలి.",
    points: [
      "Register Now",
      "Book a Demo",
      "Learn More",
      "Download",
      "Visit Website"
    ]
  },
  {
    number: "17",
    title: "Email Design",
    description:
      "Email desktop మరియు mobileలో easyగా చదవగలిగేలా design చేయాలి.",
    points: [
      "Simple layout",
      "Readable text",
      "Relevant images",
      "Clear CTA",
      "Mobile-friendly design"
    ]
  },
  {
    number: "18",
    title: "Email Automation",
    description:
      "Specific user action లేదా condition ఆధారంగా automated email workflows create చేయవచ్చు.",
    points: [
      "Welcome automation",
      "Lead follow-up",
      "Reminder emails",
      "Nurturing sequence",
      "Customer communication"
    ],
    links: [
      {
        label: "Mailchimp Automation",
        url: "https://mailchimp.com/features/marketing-automation/"
      }
    ]
  },
  {
    number: "19",
    title: "Campaign Scheduling",
    description:
      "Campaignను appropriate date and timeకి schedule చేయవచ్చు.",
    points: [
      "Campaign date",
      "Send time",
      "Audience timezone",
      "Frequency",
      "Campaign calendar"
    ]
  },
  {
    number: "20",
    title: "Email Delivery",
    description:
      "Emails successfully delivered అవుతున్నాయా, bounce అవుతున్నాయా వంటి delivery metricsను understand చేయాలి.",
    points: [
      "Delivered emails",
      "Bounces",
      "Spam complaints",
      "Unsubscribes",
      "List quality"
    ]
  },
  {
    number: "21",
    title: "Open Rate",
    description:
      "Email performanceలో open rate వంటి metricsను understand చేసి campaign responseని analyze చేయాలి.",
    points: [
      "Opens",
      "Unique opens",
      "Open rate",
      "Compare campaigns",
      "Test subject lines"
    ]
  },
  {
    number: "22",
    title: "Click Rate",
    description:
      "Emailలో links లేదా CTAపై subscribers ఎంతవరకు click చేస్తున్నారో analyze చేయాలి.",
    points: [
      "Clicks",
      "Click rate",
      "CTA performance",
      "Link performance",
      "Compare campaigns"
    ]
  },
  {
    number: "23",
    title: "Conversion Tracking",
    description:
      "Email click తర్వాత desired action జరుగుతుందా అనేది track చేయాలి.",
    points: [
      "Registrations",
      "Form submissions",
      "Demo bookings",
      "Purchases",
      "Lead conversions"
    ]
  },
  {
    number: "24",
    title: "A/B Testing",
    description:
      "Different versions test చేసి audienceకి ఏ version better response ఇస్తుందో understand చేయవచ్చు.",
    points: [
      "Subject line",
      "CTA",
      "Content",
      "Design",
      "Send time"
    ]
  },
  {
    number: "25",
    title: "Unsubscribe & Compliance",
    description:
      "Recipientsకి applicable unsubscribe options మరియు required compliance practicesను follow చేయాలి.",
    points: [
      "Unsubscribe option",
      "Respect preferences",
      "Sender information",
      "Permission practices",
      "Email regulations"
    ],
    links: [
      {
        label: "Mailchimp Compliance Resources",
        url: "https://mailchimp.com/help/about-the-general-data-protection-regulation/"
      }
    ]
  }
];

function EmailMarketing() {
  return (
    <div className="email-page">
      <div className="email-container">

        <Link to="/" className="email-home">
          ← Home
        </Link>

        <header className="email-hero">
          <div className="email-hero-content">

            <span>EMAIL MARKETING</span>

            <h1>Email Marketing</h1>

            <p>
              Learn Email Marketing from building an email list and creating
              campaigns to automation, analytics, lead nurturing and
              optimization.
            </p>

            <div className="email-flow">
              <span>Collect</span>
              <b>→</b>
              <span>Segment</span>
              <b>→</b>
              <span>Send</span>
              <b>→</b>
              <span>Analyze</span>
              <b>→</b>
              <span>Improve</span>
            </div>

          </div>
        </header>

        <section className="email-intro">

          <span>START TO END</span>

          <h2>What Can You Do With Email Marketing?</h2>

          <p>
            Email Marketing ద్వారా leadsని collect చేయడం, audienceని
            segment చేయడం, campaigns పంపడం, automated follow-up చేయడం
            మరియు campaign performanceని measure చేయడం నేర్చుకోవచ్చు.
          </p>

        </section>

        <section className="email-topics">

          {topics.map((topic) => (
            <article className="email-card" key={topic.number}>

              <div className="email-number">
                {topic.number}
              </div>

              <div className="email-card-content">

                <h3>{topic.title}</h3>

                <p className="email-description">
                  {topic.description}
                </p>

                <ul>
                  {topic.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {topic.links && (
                  <div className="email-links">

                    {topic.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🔗 {link.label} →
                      </a>
                    ))}

                  </div>
                )}

              </div>

            </article>
          ))}

        </section>

        <section className="email-workflow">

          <span>REAL WORKFLOW</span>

          <h2>Email Marketing Funnel</h2>

          <div className="workflow-grid">

            <div>
              <strong>01</strong>
              <h3>Visitor</h3>
              <p>Person visits website or landing page.</p>
            </div>

            <div className="workflow-arrow">→</div>

            <div>
              <strong>02</strong>
              <h3>Lead Form</h3>
              <p>Visitor submits their information with permission.</p>
            </div>

            <div className="workflow-arrow">→</div>

            <div>
              <strong>03</strong>
              <h3>Email List</h3>
              <p>Lead is organized into the relevant audience.</p>
            </div>

            <div className="workflow-arrow">→</div>

            <div>
              <strong>04</strong>
              <h3>Campaign</h3>
              <p>Relevant email is sent to the audience.</p>
            </div>

          </div>

          <div className="workflow-bottom">

            <div>
              <strong>05</strong>
              <h3>Engagement</h3>
              <p>Recipient opens or clicks the email.</p>
            </div>

            <div className="workflow-arrow">→</div>

            <div>
              <strong>06</strong>
              <h3>Landing Page</h3>
              <p>Recipient takes the desired next action.</p>
            </div>

            <div className="workflow-arrow">→</div>

            <div>
              <strong>07</strong>
              <h3>Conversion</h3>
              <p>Lead becomes a customer or completes the goal.</p>
            </div>

          </div>

        </section>

        <section className="email-project">

          <span>PRACTICAL PROJECT</span>

          <h2>Data Analytics Course Email Campaign</h2>

          <p>
            ఒక Data Analytics Training Institute కోసం complete email
            marketing campaign plan చేయండి.
          </p>

          <div className="project-grid">

            <div>
              <strong>Goal</strong>
              <p>Generate course enquiries</p>
            </div>

            <div>
              <strong>Audience</strong>
              <p>Interested students and professionals</p>
            </div>

            <div>
              <strong>Lead Source</strong>
              <p>Website / Landing Page</p>
            </div>

            <div>
              <strong>CTA</strong>
              <p>Register for Demo</p>
            </div>

          </div>

          <div className="project-steps">

            <div>✓ Create lead capture form</div>
            <div>✓ Collect permission-based leads</div>
            <div>✓ Segment the audience</div>
            <div>✓ Send welcome email</div>
            <div>✓ Send course information</div>
            <div>✓ Send demo reminder</div>
            <div>✓ Follow up with useful content</div>
            <div>✓ Track opens and clicks</div>
            <div>✓ Track registrations</div>
            <div>✓ Test campaign variations</div>

          </div>

        </section>

        <section className="email-checklist">

          <span>FINAL CHECK</span>

          <h2>Email Marketing Checklist</h2>

          <div className="final-grid">

            <div>✓ Clear campaign goal</div>
            <div>✓ Relevant target audience</div>
            <div>✓ Permission-based list</div>
            <div>✓ Proper segmentation</div>
            <div>✓ Clear subject line</div>
            <div>✓ Useful email content</div>
            <div>✓ Clear CTA</div>
            <div>✓ Mobile-friendly design</div>
            <div>✓ Unsubscribe option</div>
            <div>✓ Performance tracking</div>

          </div>

        </section>

        <section className="email-official">

          <span>OFFICIAL EMAIL MARKETING TOOL</span>

          <h2>Ready to Create Email Campaigns?</h2>

          <p>
            Email Marketing concepts understand చేసిన తర్వాత actual
            campaigns, audiences, automation మరియు analytics practice
            చేయడానికి an email marketing platformను explore చేయండి.
          </p>

          <a
            href="https://mailchimp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="email-visit"
          >
            Visit Mailchimp →
          </a>

          <small>
            Mailchimp Email Marketing Platform
          </small>

        </section>

        <footer className="email-footer">
          Email Marketing Learning Hub
        </footer>

      </div>
    </div>
  );
}

export default EmailMarketing;