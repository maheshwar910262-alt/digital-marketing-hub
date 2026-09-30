import "./LeadGeneration.css";

const leadTypes = [
  {
    icon: "❄️",
    title: "Cold Lead",
    description: "Brand or business gurinchi first time interact ayina potential customer.",
  },
  {
    icon: "🌤️",
    title: "Warm Lead",
    description: "Already interest chupinchina, content chusina or enquiry chesina lead.",
  },
  {
    icon: "🔥",
    title: "Hot Lead",
    description: "Purchase or service kosam strong interest tho immediate action ki ready unna lead.",
  },
  {
    icon: "✅",
    title: "Qualified Lead",
    description: "Business requirements and customer fit criteria ki match ayina lead.",
  },
];

const leadSources = [
  {
    icon: "🔎",
    title: "SEO",
    description: "Organic Google traffic nunchi relevant visitors ni leads ga convert cheyyadam.",
  },
  {
    icon: "🎯",
    title: "Google Ads",
    description: "Search intent based paid campaigns dwara potential customers ni generate cheyyadam.",
  },
  {
    icon: "📱",
    title: "Social Media",
    description: "Instagram, Facebook, LinkedIn and other platforms dwara enquiries generate cheyyadam.",
  },
  {
    icon: "▶️",
    title: "YouTube",
    description: "Videos, descriptions, CTAs and landing pages dwara audience ni leads ga convert cheyyadam.",
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description: "Email campaigns and follow-ups dwara prospects ni nurture cheyyadam.",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    description: "WhatsApp enquiries, click-to-chat and follow-up workflows dwara leads handle cheyyadam.",
  },
  {
    icon: "🤝",
    title: "Referrals",
    description: "Existing customers and business networks nunchi new enquiries generate cheyyadam.",
  },
  {
    icon: "📝",
    title: "Content Marketing",
    description: "Useful blogs, guides and resources dwara interested visitors ni attract cheyyadam.",
  },
];

const landingPageElements = [
  "Clear Headline",
  "Strong Offer",
  "Benefits",
  "Call To Action",
  "Lead Form",
  "Trust Signals",
  "Testimonials",
  "Contact Options",
];

const metrics = [
  {
    icon: "👥",
    title: "Total Leads",
    description: "Campaign or source nunchi vachina total leads.",
  },
  {
    icon: "✅",
    title: "Qualified Leads",
    description: "Business requirements ki match ayina useful leads.",
  },
  {
    icon: "💰",
    title: "Cost Per Lead",
    description: "One lead generate cheyyadaniki average ga spend ayye amount.",
  },
  {
    icon: "📈",
    title: "Conversion Rate",
    description: "Visitors or leads lo entha percentage customers ga convert ayyaro measure cheyyadam.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition Cost",
    description: "New customer acquire cheyyadaniki overall marketing and sales cost.",
  },
  {
    icon: "🔄",
    title: "Lead-to-Customer Rate",
    description: "Generated leads lo customers ga convert ayina percentage.",
  },
];

const tools = [
  {
    icon: "📋",
    title: "Google Forms",
    link: "https://forms.google.com/",
  },
  {
    icon: "📊",
    title: "Google Sheets",
    link: "https://sheets.google.com/",
  },
  {
    icon: "🟠",
    title: "HubSpot CRM",
    link: "https://www.hubspot.com/products/crm",
  },
  {
    icon: "🔵",
    title: "Zoho CRM",
    link: "https://www.zoho.com/crm/",
  },
  {
    icon: "📘",
    title: "Meta Lead Ads",
    link: "https://www.facebook.com/business/ads",
  },
  {
    icon: "🎯",
    title: "Google Ads",
    link: "https://ads.google.com/",
  },
  {
    icon: "💬",
    title: "WhatsApp Business",
    link: "https://business.whatsapp.com/",
  },
  {
    icon: "🌐",
    title: "WordPress",
    link: "https://wordpress.org/",
  },
];

function LeadGeneration() {
  return (
    <div className="lead-page">

      {/* HEADER */}
      <header className="lead-header">
        <span className="lead-label">DIGITAL MARKETING</span>

        <h1>🎯 Lead Generation</h1>

        <p>
          Learn how to attract potential customers, capture leads,
          qualify prospects, follow up and improve conversions.
        </p>
      </header>

      <main className="lead-container">

        {/* INTRO */}
        <section className="lead-intro">
          <span>LEAD GENERATION FUNDAMENTALS</span>

          <h2>What is Lead Generation?</h2>

          <p>
            Lead generation is the process of attracting people who may be
            interested in a product or service and collecting their contact
            or enquiry information for further communication.
          </p>
        </section>

        {/* BASIC FLOW */}
        <section className="lead-flow-section">

          <div className="section-title">
            <span>CORE PROCESS</span>
            <h2>🔄 Lead Generation Funnel</h2>
          </div>

          <div className="lead-flow">
            <div>
              <strong>01</strong>
              <span>Visitor</span>
            </div>

            <b>→</b>

            <div>
              <strong>02</strong>
              <span>Landing Page</span>
            </div>

            <b>→</b>

            <div>
              <strong>03</strong>
              <span>Lead Form</span>
            </div>

            <b>→</b>

            <div>
              <strong>04</strong>
              <span>Lead</span>
            </div>

            <b>→</b>

            <div>
              <strong>05</strong>
              <span>Qualification</span>
            </div>

            <b>→</b>

            <div>
              <strong>06</strong>
              <span>Customer</span>
            </div>
          </div>

        </section>

        {/* LEAD TYPES */}
        <section className="lead-section">

          <div className="section-title">
            <span>LEAD TYPES</span>
            <h2>👥 Understand Different Leads</h2>
          </div>

          <div className="lead-grid">

            {leadTypes.map((item) => (
              <div className="lead-card" key={item.title}>

                <div className="card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </section>

        {/* LEAD SOURCES */}
        <section className="lead-section">

          <div className="section-title">
            <span>LEAD SOURCES</span>
            <h2>📢 Where Do Leads Come From?</h2>
          </div>

          <div className="lead-grid">

            {leadSources.map((item) => (
              <div className="lead-card" key={item.title}>

                <div className="card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </section>

        {/* LANDING PAGE */}
        <section className="lead-section">

          <div className="section-title">
            <span>LANDING PAGE</span>
            <h2>🖥️ Important Landing Page Elements</h2>
          </div>

          <div className="element-grid">

            {landingPageElements.map((item, index) => (
              <div className="element-item" key={item}>

                <span>{index + 1}</span>

                <strong>{item}</strong>

              </div>
            ))}

          </div>

        </section>

        {/* QUALIFICATION */}
        <section className="lead-section">

          <div className="section-title">
            <span>LEAD QUALIFICATION</span>
            <h2>✅ How to Qualify a Lead?</h2>
          </div>

          <div className="qualification-box">

            <div>
              <span>01</span>
              <strong>Requirement</strong>
              <p>Customer ki actual requirement enti?</p>
            </div>

            <div>
              <span>02</span>
              <strong>Budget</strong>
              <p>Product or service ki suitable budget unda?</p>
            </div>

            <div>
              <span>03</span>
              <strong>Need</strong>
              <p>Customer ki immediate need unda?</p>
            </div>

            <div>
              <span>04</span>
              <strong>Timeline</strong>
              <p>Customer eppudu purchase or start cheyyali anukuntunnaru?</p>
            </div>

            <div>
              <span>05</span>
              <strong>Decision Maker</strong>
              <p>Final decision teesukune person evaru?</p>
            </div>

          </div>

        </section>

        {/* FOLLOW UP */}
        <section className="lead-section">

          <div className="section-title">
            <span>FOLLOW-UP</span>
            <h2>📞 Lead Follow-up Process</h2>
          </div>

          <div className="follow-flow">

            <div>📥 Lead Received</div>
            <b>→</b>
            <div>📞 Contact</div>
            <b>→</b>
            <div>💬 Understand Requirement</div>
            <b>→</b>
            <div>📋 Offer / Solution</div>
            <b>→</b>
            <div>🤝 Follow-up</div>
            <b>→</b>
            <div>💰 Conversion</div>

          </div>

        </section>

        {/* METRICS */}
        <section className="lead-section">

          <div className="section-title">
            <span>MEASUREMENT</span>
            <h2>📊 Important Lead Generation Metrics</h2>
          </div>

          <div className="lead-grid">

            {metrics.map((item) => (
              <div className="lead-card" key={item.title}>

                <div className="card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </section>

        {/* AUTOMATION */}
        <section className="lead-section">

          <div className="section-title">
            <span>AUTOMATION</span>
            <h2>🤖 Lead Automation Workflow</h2>
          </div>

          <div className="automation-flow">

            <div>📝 Form Submitted</div>
            <span>↓</span>
            <div>💾 Save Lead</div>
            <span>↓</span>
            <div>📧 Send Notification</div>
            <span>↓</span>
            <div>👨‍💼 Assign Lead</div>
            <span>↓</span>
            <div>📞 Follow-up</div>
            <span>↓</span>
            <div>📊 Track Result</div>

          </div>

        </section>

        {/* TOOLS */}
        <section className="lead-section">

          <div className="section-title">
            <span>TOOLS</span>
            <h2>🛠️ Lead Generation Tools</h2>
          </div>

          <div className="tools-grid">

            {tools.map((tool) => (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
                key={tool.title}
              >
                <span>{tool.icon}</span>
                <strong>{tool.title}</strong>
                <small>Visit →</small>
              </a>
            ))}

          </div>

        </section>

        {/* PRACTICAL PROJECT */}
        <section className="project-section">

          <span>PRACTICAL PROJECT</span>

          <h2>💻 Build a Real Lead Generation System</h2>

          <p>
            Create a complete lead generation workflow for a training
            institute, service business or product.
          </p>

          <div className="project-flow">

            <div>🔎 Traffic</div>
            <b>→</b>
            <div>🖥️ Landing Page</div>
            <b>→</b>
            <div>📝 Lead Form</div>
            <b>→</b>
            <div>💾 Database</div>
            <b>→</b>
            <div>📞 Follow-up</div>
            <b>→</b>
            <div>💰 Customer</div>

          </div>

          <div className="project-tasks">

            <div>☐ Create landing page</div>
            <div>☐ Create lead form</div>
            <div>☐ Store leads</div>
            <div>☐ Create admin dashboard</div>
            <div>☐ Add follow-up status</div>
            <div>☐ Track conversion</div>

          </div>

        </section>

      </main>

      <footer className="lead-footer">
        <strong>🎯 Lead Generation Learning Hub</strong>
        <p>Attract • Capture • Qualify • Follow-up • Convert</p>
      </footer>

    </div>
  );
}

export default LeadGeneration;