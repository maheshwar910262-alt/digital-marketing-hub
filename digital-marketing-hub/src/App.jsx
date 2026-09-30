import "./App.css";
import TopicCard from "./components/TopicCard";
import Backlinks from "./pages/Backlinks";
import SEO from "./pages/SEO";
import SocialMedia from "./pages/SocialMedia";
import AITools from "./pages/AITools";
import LeadGeneration from "./pages/LeadGeneration";

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <div>

      {/* HEADER */}

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
        />

      </header>


      {/* HERO */}

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


      {/* TOPICS */}

     {/* TOPICS */}

<section
  className="topics"
  id="topics"
>

  <h2>
    Explore Digital Marketing Topics
  </h2>

  <p>
    Choose a topic and start learning.
    Each topic has Learn, Watch and Visit options.
  </p>


  {/* =========================
      SEO
  ========================= */}

  <TopicCard
    icon="🔎"
    title="SEO"
    description="Learn On-Page SEO, Off-Page SEO, Technical SEO and Keyword Research."
    pdfLink=""
    videoLink=""
    visitLink="/seo"
  />


  {/* =========================
      BACKLINKS
  ========================= */}

  <TopicCard
    icon="🔗"
    title="Backlinks"
    description="Learn DoFollow, NoFollow, Guest Posts and Backlink Websites."
    pdfLink=""
    videoLink=""
    visitLink="/backlinks"
  />


  {/* =========================
      META ADS
  ========================= */}

  <TopicCard
    icon="Ⓜ️"
    title="Meta Ads"
    description="Learn Facebook Ads, Instagram Ads and Campaign Setup."
    pdfLink=""
    videoLink="https://youtu.be/PrxViN7dP38?si=CF-hfSpxWjf9sLQw"
    visitLink="https://www.facebook.com/business/ads"
  />


  {/* =========================
      GOOGLE ADS
  ========================= */}

  <TopicCard
    icon="📈"
    title="Google Ads"
    description="Learn Search Ads, Display Ads, Keywords and Campaign Setup."
    pdfLink=""
    videoLink=""
    visitLink="https://ads.google.com/"
  />


  {/* =========================
      CONTENT MARKETING
  ========================= */}

  <TopicCard
    icon="📝"
    title="Content Marketing"
    description="Learn content creation, blogging, copywriting and content strategy."
    pdfLink=""
    videoLink="https://youtu.be/IHgVZSaFjoo?si=MV89Y7Ks1_RVGbfj"
    visitLink="/content-marketing"
  />


  {/* =========================
      SOCIAL MEDIA
  ========================= */}

  <TopicCard
    icon="📱"
    title="Social Media Marketing"
    description="Learn social media platforms, content planning and audience growth."
    pdfLink=""
    videoLink=""
    visitLink="/social-media"
  />


  {/* =========================
      EMAIL MARKETING
  ========================= */}

  <TopicCard
    icon="✉️"
    title="Email Marketing"
    description="Learn email campaigns, email lists, automation and newsletters."
    pdfLink=""
    videoLink=""
    visitLink="/email-marketing"
  />


  {/* =========================
      AI TOOLS
  ========================= */}

  <TopicCard
    icon="🤖"
    title="AI Tools"
    description="Learn AI tools, prompts, automation and real-world AI use cases."
    pdfLink=""
    videoLink=""
    visitLink="/ai-tools"
  />


  {/* =========================
      YOUTUBE MARKETING
  ========================= */}

  <TopicCard
    icon="🎬"
    title="YouTube Marketing"
    description="Learn YouTube SEO, thumbnails, videos, channel optimization and growth."
    pdfLink=""
    videoLink=""
    visitLink="/youtube-marketing"
  />


  {/* =========================
      KEYWORD RESEARCH
  ========================= */}

  <TopicCard
    icon="🔑"
    title="Keyword Research"
    description="Learn keyword discovery, search intent, keyword difficulty and targeting."
    pdfLink=""
    videoLink=""
    visitLink="/keyword-research"
  />


  {/* =========================
      LOCAL SEO
  ========================= */}

  <TopicCard
    icon="📍"
    title="Local SEO"
    description="Learn Google Business Profile, local keywords, citations and local rankings."
    pdfLink=""
    videoLink=""
    visitLink="/local-seo"
  />


  {/* =========================
      TECHNICAL SEO
  ========================= */}

  <TopicCard
    icon="⚙️"
    title="Technical SEO"
    description="Learn website speed, crawling, indexing, sitemap, robots.txt and technical optimization."
    pdfLink=""
    videoLink=""
    visitLink="/technical-seo"
  />


  {/* =========================
      GOOGLE SEARCH CONSOLE
  ========================= */}

  <TopicCard
    icon="📊"
    title="Google Search Console"
    description="Learn indexing, search performance, queries, pages and SEO reports."
    pdfLink=""
    videoLink=""
    visitLink="https://search.google.com/search-console/"
  />


  {/* =========================
      GOOGLE ANALYTICS
  ========================= */}

  <TopicCard
    icon="📈"
    title="Google Analytics"
    description="Learn website traffic, users, events, conversions and analytics reports."
    pdfLink=""
    videoLink=""
    visitLink="https://analytics.google.com/"
  />


  {/* =========================
      WORDPRESS
  ========================= */}

  <TopicCard
    icon="🌐"
    title="WordPress"
    description="Learn WordPress websites, themes, plugins, pages, posts and basic SEO."
    pdfLink=""
    videoLink=""
    visitLink="https://wordpress.org/"
  />


  {/* =========================
      WEBSITE ANALYTICS
  ========================= */}

  <TopicCard
    icon="📊"
    title="Website Analytics"
    description="Learn traffic analysis, user behavior, conversions and website performance."
    pdfLink=""
    videoLink=""
    visitLink="/website-analytics"
  />


  {/* =========================
      COPYWRITING
  ========================= */}

  <TopicCard
    icon="✍️"
    title="Copywriting"
    description="Learn headlines, ad copy, landing page copy, CTAs and persuasive writing."
    pdfLink=""
    videoLink=""
    visitLink="/copywriting"
  />


  {/* =========================
      LANDING PAGES
  ========================= */}

  <TopicCard
    icon="🖥️"
    title="Landing Pages"
    description="Learn landing page structure, CTA, forms, conversion and optimization."
    pdfLink=""
    videoLink=""
    visitLink="/landing-pages"
  />


  {/* =========================
      LEAD GENERATION
  ========================= */}

  <TopicCard
    icon="🎯"
    title="Lead Generation"
    description="Learn lead generation strategies, forms, landing pages and lead funnels."
    pdfLink=""
    videoLink=""
    visitLink="/lead-generation"
  />


  {/* =========================
      MARKETING AUTOMATION
  ========================= */}

  <TopicCard
    icon="⚡"
    title="Marketing Automation"
    description="Learn automated marketing workflows, lead nurturing and campaign automation."
    pdfLink=""
    videoLink=""
    visitLink="/marketing-automation"
  />


  {/* =========================
      AFFILIATE MARKETING
  ========================= */}

  <TopicCard
    icon="💰"
    title="Affiliate Marketing"
    description="Learn affiliate programs, links, content strategies and commission models."
    pdfLink=""
    videoLink=""
    visitLink="/affiliate-marketing"
  />


  {/* =========================
      ONLINE REPUTATION
  ========================= */}

  <TopicCard
    icon="⭐"
    title="Online Reputation"
    description="Learn reviews, brand reputation, customer feedback and online presence."
    pdfLink=""
    videoLink=""
    visitLink="/online-reputation"
  />


  {/* =========================
      DIGITAL MARKETING STRATEGY
  ========================= */}

  <TopicCard
    icon="🚀"
    title="Digital Marketing Strategy"
    description="Learn how SEO, Ads, Social Media, Content and Analytics work together."
    pdfLink=""
    videoLink=""
    visitLink="/digital-marketing-strategy"
  />
<TopicCard
  icon="📱"
  title="Social Media Marketing"
  description="Learn social media platforms, content planning and audience growth."
  pdfLink=""
  videoLink=""
  visitLink="/social-media"
/>
<TopicCard
  icon="🎯"
  title="Lead Generation"
  description="Learn lead generation strategies, forms, landing pages and lead funnels."
  pdfLink=""
  videoLink=""
  visitLink="/lead-generation"
/>
</section>

      {/* STATS */}

      <section className="stats">

        <div>

          <strong>
            10K+
          </strong>

          <span>
            Learners
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


      {/* FOOTER */}

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


/* =========================
   MAIN ROUTING
========================= */

function App() {

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* BACKLINKS */}

      <Route
        path="/backlinks"
        element={<Backlinks />}
      />


      {/* TEMPORARY ROUTES */}

      {/* <Route
        path="/seo"
        element={
          <div style={{ padding: "50px" }}>
            <h1>🔎 SEO</h1>
            <p>SEO page coming next.</p>
          </div>
        }
      /> */}


     


      <Route
        path="/content-marketing"
        element={
          <div style={{ padding: "50px" }}>
            <h1>📝 Content Marketing</h1>
            <p>Content Marketing page coming next.</p>
          </div>
        }
      />


     


      <Route
        path="/email-marketing"
        element={
          <div style={{ padding: "50px" }}>
            <h1>✉️ Email Marketing</h1>
            <p>Email Marketing page coming next.</p>
          </div>
        }
      />
<Route
  path="/seo"
  element={<SEO />}
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
        path="/youtube-marketing"
        element={
          <div style={{ padding: "50px" }}>
            <h1>🎬 YouTube Marketing</h1>
            <p>YouTube Marketing page coming next.</p>
          </div>
        }
      />

    </Routes>
    

  );
}

export default App;