import "./SocialMedia.css";

const platforms = [
  {
    icon: "📸",
    title: "Instagram",
    description:
      "Learn Instagram marketing, Reels, posts, hashtags, engagement and profile growth.",
    link: "https://www.instagram.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "📘",
    title: "Facebook",
    description:
      "Learn Facebook pages, posts, groups, engagement, content strategy and marketing.",
    link: "https://www.facebook.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description:
      "Learn LinkedIn personal branding, company pages, content and professional networking.",
    link: "https://www.linkedin.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "🧵",
    title: "Threads",
    description:
      "Learn Threads content strategy, conversations, audience building and engagement.",
    link: "https://www.threads.net/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "❓",
    title: "Quora",
    description:
      "Learn Quora marketing, question research, useful answers and website traffic strategies.",
    link: "https://www.quora.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "▶️",
    title: "YouTube",
    description:
      "Learn YouTube SEO, video titles, thumbnails, descriptions, playlists and channel growth.",
    link: "https://www.youtube.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "𝕏",
    title: "X / Twitter",
    description:
      "Learn X content strategy, posts, threads, audience engagement and brand visibility.",
    link: "https://x.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "📌",
    title: "Pinterest",
    description:
      "Learn Pinterest marketing, pins, boards, keywords and website traffic strategies.",
    link: "https://www.pinterest.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "👽",
    title: "Reddit",
    description:
      "Learn Reddit communities, discussions, useful contributions and audience research.",
    link: "https://www.reddit.com/",
    pdfLink: "",
    videoLink: "",
  },
  {
    icon: "📝",
    title: "Medium",
    description:
      "Learn article publishing, content distribution, audience building and content promotion.",
    link: "https://medium.com/",
    pdfLink: "",
    videoLink: "",
  },
];

const websiteSteps = [
  {
    icon: "🔑",
    title: "Keyword Research",
    description:
      "Find relevant keywords based on search intent, location, competition and your actual services.",
  },
  {
    icon: "📝",
    title: "Useful Content",
    description:
      "Create original, helpful content that directly answers what users are searching for.",
  },
  {
    icon: "🏷️",
    title: "Title & Meta Description",
    description:
      "Create clear page titles and useful meta descriptions that accurately describe each page.",
  },
  {
    icon: "🔗",
    title: "Internal Linking",
    description:
      "Connect related pages naturally so users and search engines can discover important content.",
  },
  {
    icon: "⚙️",
    title: "Technical SEO",
    description:
      "Check crawling, indexing, sitemap, robots.txt, canonical URLs, HTTPS and technical errors.",
  },
  {
    icon: "📱",
    title: "Mobile & Speed",
    description:
      "Make pages fast, responsive and easy to use on mobile and desktop devices.",
  },
  {
    icon: "📊",
    title: "Search Console",
    description:
      "Use Google Search Console to monitor indexing, queries, clicks, impressions and page performance.",
  },
  {
    icon: "📈",
    title: "Analytics",
    description:
      "Measure organic traffic, engagement, conversions and which pages bring useful visitors.",
  },
  {
    icon: "🔗",
    title: "Natural Backlinks",
    description:
      "Earn relevant links through useful content, partnerships, mentions and genuine promotion.",
  },
  {
    icon: "📢",
    title: "Social Promotion",
    description:
      "Promote useful website content through relevant social platforms and communities.",
  },
  {
    icon: "⭐",
    title: "Local SEO",
    description:
      "For local businesses, optimize business information and create location-relevant useful content.",
  },
  {
    icon: "🔄",
    title: "Update & Improve",
    description:
      "Use Search Console data to identify pages that need better content, titles or user experience.",
  },
];

function SocialMedia() {
  return (
    <div className="social-page">

      {/* HEADER */}
      <header className="social-header">
        <div>
          <span className="social-label">DIGITAL MARKETING</span>
          <h1>📱 Social Media Marketing</h1>
          <p>
            Learn social media platforms, content strategy, engagement and
            website promotion.
          </p>
        </div>
      </header>

      {/* PLATFORMS */}
      <main className="social-container">

        <div className="social-section-heading">
          <span>SOCIAL PLATFORMS</span>
          <h2>Learn Platform by Platform</h2>
          <p>
            Choose a platform and learn its marketing methods, content
            strategy and promotion techniques.
          </p>
        </div>

        <section className="platform-grid">
          {platforms.map((platform) => (
            <div className="platform-card" key={platform.title}>

              <div className="platform-icon">
                {platform.icon}
              </div>

              <h3>{platform.title}</h3>

              <p>{platform.description}</p>

              <div className="platform-buttons">

                {platform.pdfLink ? (
                  <a
                    href={platform.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn pdf-btn"
                  >
                    📄 PDF
                  </a>
                ) : (
                  <button className="social-btn pdf-btn" disabled>
                    📄 PDF
                  </button>
                )}

                {platform.videoLink ? (
                  <a
                    href={platform.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn video-btn"
                  >
                    ▶ Video
                  </a>
                ) : (
                  <button className="social-btn video-btn" disabled>
                    ▶ Video
                  </button>
                )}

                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn website-btn"
                >
                  🔗 Visit
                </a>

              </div>
            </div>
          ))}
        </section>

        {/* WEBSITE SEO SECTION */}
        <section className="website-seo">

          <div className="seo-section-heading">
            <span>WEBSITE GROWTH</span>

            <h2>
              🚀 Website Google Search Growth
            </h2>

            <p>
              Website Google Search visibility improve cheyadaniki follow
              cheyyalsina important areas.
            </p>
          </div>

          <div className="seo-checklist">

            {websiteSteps.map((step, index) => (
              <div className="seo-step" key={step.title}>

                <div className="seo-number">
                  {index + 1}
                </div>

                <div className="seo-step-icon">
                  {step.icon}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>
            ))}

          </div>

          <div className="seo-note">
            <strong>⚠️ Important</strong>

            <p>
              Google lo #1 position ni guarantee cheyyadaniki legitimate
              shortcut ledu. Focus should be useful content, technical
              accessibility, relevant keywords, good user experience,
              trustworthy promotion and continuous measurement.
            </p>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="social-footer">
        <h3>Social Media Marketing Learning</h3>
        <p>
          Learn • Practice • Publish • Measure • Improve
        </p>
      </footer>

    </div>
  );
}

export default SocialMedia;