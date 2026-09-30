import "./SEO.css";

function SEO() {
  return (
    <div className="seo-page">

      {/* HEADER */}

      <header className="seo-header">

        <h1>🔎 SEO Learning</h1>

        <p>
          Learn SEO step by step — from beginner to advanced.
        </p>

      </header>


      {/* INTRO */}

      <section className="seo-intro">

        <h2>
          Search Engine Optimization
        </h2>

        <p>
          Learn how search engines work, how to optimize
          websites and how to improve organic visibility.
        </p>

      </section>


      {/* SEO TOPICS */}

      <section className="seo-topics">

        <div className="seo-topic-card">
          <span>🔑</span>
          <h3>Keyword Research</h3>
          <p>
            Learn keywords, search intent, keyword difficulty
            and keyword targeting.
          </p>
        </div>


        <div className="seo-topic-card">
          <span>📄</span>
          <h3>On-Page SEO</h3>
          <p>
            Learn title tags, meta descriptions, headings,
            content and internal linking.
          </p>
        </div>


        <div className="seo-topic-card">
          <span>🔗</span>
          <h3>Off-Page SEO</h3>
          <p>
            Learn backlinks, link building, guest posts
            and off-page SEO concepts.
          </p>
        </div>


        <div className="seo-topic-card">
          <span>⚙️</span>
          <h3>Technical SEO</h3>
          <p>
            Learn crawling, indexing, sitemap, robots.txt,
            speed and technical optimization.
          </p>
        </div>


        <div className="seo-topic-card">
          <span>📍</span>
          <h3>Local SEO</h3>
          <p>
            Learn local search, Google Business Profile,
            citations and local visibility.
          </p>
        </div>


        <div className="seo-topic-card">
          <span>📊</span>
          <h3>SEO Analytics</h3>
          <p>
            Learn Google Search Console, Google Analytics,
            traffic and SEO performance.
          </p>
        </div>

      </section>


      {/* RESOURCES */}

      <section className="seo-resources">

        <h2>
          SEO Resources
        </h2>

        <div className="resource-buttons">

          <button className="resource-pdf">
            📄 SEO PDF
          </button>

          <button className="resource-video">
            ▶ SEO Video
          </button>

          <a
            href="https://search.google.com/search-console/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-website"
          >
            🔗 Search Console
          </a>

        </div>

      </section>

    </div>
  );
}

export default SEO;