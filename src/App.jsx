import React from "react";
import "./App.css";

import TopicCard from "./components/TopicCard";

import Backlinks from "./pages/Backlinks";
import SEO from "./pages/SEO";
import SocialMedia from "./pages/SocialMedia";
import AITools from "./pages/AITools";
import LeadGeneration from "./pages/LeadGeneration";
import TechnicalSEO from "./pages/TechnicalSEO";
import LeadExcelCleaner from "./pages/LeadExcelCleaner";
import MetaAds from "./pages/MetaAds";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


/* =====================================================
   TOPIC DATA
===================================================== */

const topics = [

  {
    icon: "🔎",
    title: "SEO",
    description:
      "Learn On-Page SEO, Off-Page SEO, Technical SEO and Keyword Research.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/seo",
  },

  {
    icon: "🔗",
    title: "Backlinks",
    description:
      "Learn DoFollow, NoFollow, Guest Posts and Backlink Websites.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/backlinks",
  },

  {
    icon: "Ⓜ️",
    title: "Meta Ads",
    description:
      "Learn Facebook Ads, Instagram Ads and Campaign Setup.",
    pdfLink: "",
    videoLink: "https://youtu.be/PrxViN7dP38?si=CF-hfSpxWjf9sLQw",
    youtubeLink: "",
    visitLink: "/meta-ads",
  },

  {
    icon: "📈",
    title: "Google Ads",
    description:
      "Learn Search Ads, Display Ads, Keywords and Campaign Setup.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "https://ads.google.com/",
  },

  {
    icon: "📝",
    title: "Content Marketing",
    description:
      "Learn content creation, blogging, copywriting and content strategy.",
    pdfLink: "",
    videoLink: "https://youtu.be/IHgVZSaFjoo?si=MV89Y7Ks1_RVGbfj",
    youtubeLink: "",
    visitLink: "/content-marketing",
  },

  {
    icon: "📱",
    title: "Social Media Marketing",
    description:
      "Learn Instagram, Facebook, LinkedIn, Threads, Quora and other social platforms.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/social-media",
  },

  {
    icon: "✉️",
    title: "Email Marketing",
    description:
      "Learn email campaigns, email lists, automation and newsletters.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/email-marketing",
  },

  {
    icon: "🤖",
    title: "AI Tools",
    description:
      "Learn AI tools, prompts, automation and real-world AI use cases.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "https://www.youtube.com/@OpenAI",
    visitLink: "/ai-tools",
  },

  {
    icon: "🎬",
    title: "YouTube Marketing",
    description:
      "Learn YouTube SEO, thumbnails, videos, channel optimization and growth.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/youtube-marketing",
  },

  {
    icon: "🔑",
    title: "Keyword Research",
    description:
      "Learn keyword discovery, search intent, keyword difficulty and targeting.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/keyword-research",
  },

  {
    icon: "📍",
    title: "Local SEO",
    description:
      "Learn Google Business Profile, local keywords, citations and local visibility.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/local-seo",
  },

  {
    icon: "⚙️",
    title: "Technical SEO",
    description:
      "Learn website speed, crawling, indexing, sitemap, robots.txt and technical SEO.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/technical-seo",
  },

  {
    icon: "📊",
    title: "Google Search Console",
    description:
      "Learn indexing, search performance, queries, pages and SEO reports.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "https://search.google.com/search-console/",
  },

  {
    icon: "📈",
    title: "Google Analytics",
    description:
      "Learn website traffic, users, events, conversions and analytics reports.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "https://analytics.google.com/",
  },

  {
    icon: "🌐",
    title: "WordPress",
    description:
      "Learn WordPress websites, themes, plugins, pages, posts and basic SEO.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "https://wordpress.org/",
  },

  {
    icon: "📊",
    title: "Website Analytics",
    description:
      "Learn traffic analysis, user behavior, conversions and website performance.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/website-analytics",
  },

  {
    icon: "✍️",
    title: "Copywriting",
    description:
      "Learn headlines, ad copy, landing page copy, CTAs and persuasive writing.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/copywriting",
  },

  {
    icon: "🖥️",
    title: "Landing Pages",
    description:
      "Learn landing page structure, CTA, forms, conversion and optimization.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/landing-pages",
  },

  {
    icon: "🎯",
    title: "Lead Generation",
    description:
      "Learn lead generation strategies, forms, landing pages and lead funnels.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/lead-generation",
  },

  {
    icon: "⚡",
    title: "Marketing Automation",
    description:
      "Learn automated marketing workflows, lead nurturing and campaign automation.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/marketing-automation",
  },

  {
    icon: "💰",
    title: "Affiliate Marketing",
    description:
      "Learn affiliate programs, links, content strategies and commission models.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/affiliate-marketing",
  },

  {
    icon: "⭐",
    title: "Online Reputation",
    description:
      "Learn reviews, brand reputation, customer feedback and online presence.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/online-reputation",
  },

  {
    icon: "🚀",
    title: "Digital Marketing Strategy",
    description:
      "Learn how SEO, Ads, Social Media, Content and Analytics work together.",
    pdfLink: "",
    videoLink: "",
    youtubeLink: "",
    visitLink: "/digital-marketing-strategy",
  },

  {
  icon: "📊",
  title: "Lead Excel Cleaner",
  description:
    "Check duplicate leads, mobile numbers, dates and invalid data, then download a clean Excel file.",
  pdfLink: "",
  videoLink: "",
  youtubeLink: "",
  visitLink: "/lead-excel-cleaner"
},

];


/* =====================================================
   PLACEHOLDER PAGE
===================================================== */

function PlaceholderPage({ icon, title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "60px 25px",
      }}
    >

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "50px",
        }}
      >

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            padding: "8px 14px",
            background: "#eff6ff",
            color: "#2563eb",
            border: "1px solid #bfdbfe",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          ← Home
        </Link>

        <h1>
          {icon} {title}
        </h1>

        <p style={{ color: "#64748b" }}>
          This learning page will be added next.
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {

  const [search, setSearch] = React.useState("");

  const filteredTopics = topics.filter((topic) => {

    const searchText = search
      .toLowerCase()
      .trim();

    return (
      topic.title
        .toLowerCase()
        .includes(searchText) ||

      topic.description
        .toLowerCase()
        .includes(searchText)
    );

  });


  return (
    <div>

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="header">

        <div className="logo">
          📊 Digital Marketing
        </div>


        <nav>

          <Link to="/">
            Home
          </Link>

          <a href="#topics">
            SEO
          </a>

          <a href="#topics">
            Backlinks
          </a>

          <a href="#topics">
            Meta Ads
          </a>

          <a href="#topics">
            AI Tools
          </a>

          <a href="#topics">
            Resources
          </a>

        </nav>


        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            LEARN • PRACTICE • IMPLEMENT • GROW
          </p>


          <h1>

            Your Digital Marketing Journey

            <span>
              {" "}Starts Here
            </span>

          </h1>


          <p>
            Step-by-step guides, PDFs, videos and
            real websites — everything in one place.
          </p>


          <div className="hero-buttons">

            <span>
              📖 Learn Skills
            </span>

            <span>
              ▶ Watch Videos
            </span>

            <span>
              🔗 Real Websites
            </span>

            <span>
              📊 Real Results
            </span>

          </div>

        </div>


        <div className="hero-image">

          💻

          <strong>
            Learn • Apply • Grow
          </strong>

        </div>

      </section>


      {/* =================================================
          TOPICS
      ================================================= */}

      <section
        className="topics"
        id="topics"
      >

        <h2>
          Explore Digital Marketing Topics
        </h2>


        <p>
          Choose a topic and start learning.
          Each topic has Learn, Watch, YouTube and Visit options.
        </p>


        <div className="topics-grid">

          {filteredTopics.map((topic) => (

            <TopicCard
              key={topic.title}

              icon={topic.icon}

              title={topic.title}

              description={topic.description}

              pdfLink={topic.pdfLink}

              videoLink={topic.videoLink}

              youtubeLink={topic.youtubeLink}

              visitLink={topic.visitLink}
            />

          ))}


          {filteredTopics.length === 0 && (

            <div className="no-results">

              <strong>
                🔍 No topics found
              </strong>

              <p>
                Try searching with another keyword.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =================================================
          STATS
      ================================================= */}

      <section className="stats">

        <div>

          <strong>
            23+
          </strong>

          <span>
            Topics
          </span>

        </div>


        <div>

          <strong>
            500+
          </strong>

          <span>
            Learning Resources
          </span>

        </div>


        <div>

          <strong>
            100+
          </strong>

          <span>
            Tools & Websites
          </span>

        </div>


        <div>

          <strong>
            100%
          </strong>

          <span>
            Learning Focus
          </span>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <strong>
          📊 Digital Marketing Learning Hub
        </strong>

        <span>
          Learn Today. Grow Tomorrow.
        </span>

        <small>
          © 2026 Digital Marketing Learning Hub
        </small>

      </footer>

    </div>
  );
}


/* =====================================================
   ROUTING
===================================================== */

function App() {

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* REAL PAGES */}

      <Route
        path="/seo"
        element={<SEO />}
      />

      <Route
        path="/backlinks"
        element={<Backlinks />}
      />

      <Route
        path="/social-media"
        element={<SocialMedia />}
      />

      <Route
        path="/ai-tools"
        element={<AITools />}
      />

      <Route
        path="/lead-generation"
        element={<LeadGeneration />}
      />
<Route
  path="/technical-seo"
  element={<TechnicalSEO />}
/>
<Route
  path="/lead-excel-cleaner"
  element={<LeadExcelCleaner />}
/>
<Route path="/meta-ads" element={<MetaAds />} />

      {/* OTHER PAGES */}

      <Route
        path="/content-marketing"
        element={
          <PlaceholderPage
            icon="📝"
            title="Content Marketing"
          />
        }
      />


      <Route
        path="/email-marketing"
        element={
          <PlaceholderPage
            icon="✉️"
            title="Email Marketing"
          />
        }
      />


      <Route
        path="/youtube-marketing"
        element={
          <PlaceholderPage
            icon="🎬"
            title="YouTube Marketing"
          />
        }
      />


      <Route
        path="/keyword-research"
        element={
          <PlaceholderPage
            icon="🔑"
            title="Keyword Research"
          />
        }
      />


      <Route
        path="/local-seo"
        element={
          <PlaceholderPage
            icon="📍"
            title="Local SEO"
          />
        }
      />


      <Route
        path="/technical-seo"
        element={
          <PlaceholderPage
            icon="⚙️"
            title="Technical SEO"
          />
        }
      />


      <Route
        path="/website-analytics"
        element={
          <PlaceholderPage
            icon="📊"
            title="Website Analytics"
          />
        }
      />


      <Route
        path="/copywriting"
        element={
          <PlaceholderPage
            icon="✍️"
            title="Copywriting"
          />
        }
      />


      <Route
        path="/landing-pages"
        element={
          <PlaceholderPage
            icon="🖥️"
            title="Landing Pages"
          />
        }
      />


      <Route
        path="/marketing-automation"
        element={
          <PlaceholderPage
            icon="⚡"
            title="Marketing Automation"
          />
        }
      />


      <Route
        path="/affiliate-marketing"
        element={
          <PlaceholderPage
            icon="💰"
            title="Affiliate Marketing"
          />
        }
      />


      <Route
        path="/online-reputation"
        element={
          <PlaceholderPage
            icon="⭐"
            title="Online Reputation"
          />
        }
      />


      <Route
        path="/digital-marketing-strategy"
        element={
          <PlaceholderPage
            icon="🚀"
            title="Digital Marketing Strategy"
          />
        }
      />

    </Routes>

  );
}

export default App;