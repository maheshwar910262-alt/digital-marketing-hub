import { Link } from "react-router-dom";
import "./TechnicalSEO.css";

const topics = [
  {
    icon: "🕷️",
    title: "Crawling",
    what: "Crawling అంటే Google వంటి search engines website pages ని visit చేసి information collect చేయడం.",
    example: "Example: Google Bot మీ /seo page ని visit చేసి content చదువుతుంది.",
    why: "Why important: Google మీ page ని access చేయలేకపోతే search results లో కనిపించడం కష్టం."
  },
  {
    icon: "📑",
    title: "Indexing",
    what: "Indexing అంటే search engine మీ website page information ని తన database లో store చేయడం.",
    example: "Example: Google మీ Technical SEO page ని crawl చేసి index లో store చేస్తుంది.",
    why: "Why important: Indexed page మాత్రమే search results లో normally appear అవుతుంది."
  },
  {
    icon: "🗺️",
    title: "XML Sitemap",
    what: "XML Sitemap అనేది website లోని important URLs list.",
    example: "Example: sitemap.xml లో /seo, /backlinks, /technical-seo వంటి URLs ఉంటాయి.",
    why: "Why important: Search engines కి important pages discover చేయడంలో help చేస్తుంది."
  },
  {
    icon: "🤖",
    title: "Robots.txt",
    what: "Robots.txt search engine bots ఏ areas ని crawl చేయవచ్చో లేదా చేయకూడదో చెప్పడానికి ఉపయోగపడుతుంది.",
    example: "Example: /admin/ section ని crawlers access చేయకుండా rules పెట్టవచ్చు.",
    why: "Why important: Search engine crawling ని control చేయడంలో ఉపయోగపడుతుంది."
  },
  {
    icon: "⚡",
    title: "Page Speed",
    what: "Page Speed అంటే website page ఎంత త్వరగా load అవుతుందో.",
    example: "Example: Website 2 seconds లో load అవ్వడం user experience కి మంచిది.",
    why: "Why important: Slow website users కి frustrating గా ఉంటుంది మరియు performance సమస్యలు వస్తాయి."
  },
  {
    icon: "📱",
    title: "Mobile SEO",
    what: "Mobile SEO అంటే smartphone మరియు tablet లో website properly work అయ్యేలా optimize చేయడం.",
    example: "Example: Text readable గా ఉండాలి, buttons easily clickable గా ఉండాలి.",
    why: "Why important: చాలా users mobile devices ద్వారా websites visit చేస్తారు."
  },
  {
    icon: "🔒",
    title: "HTTPS",
    what: "HTTPS website మరియు user మధ్య data ని secure connection ద్వారా transfer చేస్తుంది.",
    example: "Example: https://example.com",
    why: "Why important: Website security మరియు user trust కోసం HTTPS important."
  },
  {
    icon: "🔗",
    title: "Canonical URL",
    what: "ఒకే content కి multiple URLs ఉన్నప్పుడు preferred URL ఏదో search engine కి చెప్పడానికి canonical tag ఉపయోగిస్తారు.",
    example: "Example: /product మరియు /product?color=blue రెండూ same content చూపిస్తే preferred URL set చేయవచ్చు.",
    why: "Why important: Duplicate URL confusion తగ్గించడంలో help చేస్తుంది."
  },
  {
    icon: "🚫",
    title: "Broken Links",
    what: "Broken link అంటే click చేసినప్పుడు working page కి వెళ్లకుండా error లేదా 404 page రావడం.",
    example: "Example: /old-course URL delete అయి ఉండి 404 error రావడం.",
    why: "Why important: Broken links user experience మరియు website quality ని affect చేయవచ్చు."
  },
  {
    icon: "🔄",
    title: "Redirects",
    what: "Redirect అంటే old URL నుంచి user లేదా search engine ని another URL కి పంపించడం.",
    example: "Example: /old-seo → /seo",
    why: "Why important: URL change చేసినప్పుడు visitors ని correct page కి పంపడానికి useful."
  },
  {
    icon: "🧩",
    title: "Structured Data",
    what: "Structured Data website content గురించి search engines కి additional information ఇవ్వడానికి ఉపయోగించే markup.",
    example: "Example: Course, Product, Article, FAQ వంటి content కి relevant schema.",
    why: "Why important: Search engines కి page content type అర్థం చేసుకోవడంలో help చేస్తుంది."
  },
  {
    icon: "🔗",
    title: "URL Structure",
    what: "URL Structure అంటే website URLs ని clean, simple మరియు understandable గా ఉంచడం.",
    example: "Good: /technical-seo   |   Poor: /page?id=82736",
    why: "Why important: Users మరియు search engines కి URL purpose అర్థం చేసుకోవడం easier."
  }
];

function TechnicalSEO() {
  return (
    <div className="technical-seo-page">

      <Link to="/" className="back-home">
        ← Home
      </Link>

      {/* Header */}
      <header className="technical-seo-header">

        <div className="seo-header-text">
          <h1>⚙️ Technical SEO</h1>

          <p>
            Learn how websites are crawled, understood, indexed and
            technically optimized for search engines.
          </p>
        </div>

        <div className="technical-seo-banner">
          <img
            src="/src/assets/technicalseo.png"
            alt="Technical SEO"
          />
        </div>

      </header>


      {/* Basic Explanation */}
      <section className="seo-section intro-section">

        <h2>What is Technical SEO?</h2>

        <p>
          Technical SEO is the process of improving the technical structure
          of a website so search engines can crawl, understand and index
          website pages properly.
        </p>

        <div className="simple-flow">

          <div>
            <span>🕷️</span>
            <strong>Crawl</strong>
            <small>Google visits your website</small>
          </div>

          <span className="arrow">→</span>

          <div>
            <span>🧠</span>
            <strong>Understand</strong>
            <small>Google understands the page</small>
          </div>

          <span className="arrow">→</span>

          <div>
            <span>📚</span>
            <strong>Index</strong>
            <small>Page is stored in index</small>
          </div>

          <span className="arrow">→</span>

          <div>
            <span>🔎</span>
            <strong>Search</strong>
            <small>Page can appear in results</small>
          </div>

        </div>

      </section>


      {/* Topics */}
      <section className="seo-section">

        <div className="section-heading">
          <h2>Technical SEO Topics</h2>

          <p>
            Learn each concept with a simple explanation, example and reason.
          </p>
        </div>

        <div className="technical-grid">

          {topics.map((topic, index) => (

            <div className="technical-card" key={index}>

              <div className="topic-icon">
                {topic.icon}
              </div>

              <h3>{topic.title}</h3>

              <div className="explanation-box">

                <p>
                  <strong>What:</strong> {topic.what}
                </p>

                <p>
                  <strong>Example:</strong> {topic.example}
                </p>

                <p>
                  <strong>Why:</strong> {topic.why}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Student Example */}
      <section className="seo-section">

        <div className="student-example">

          <h2>🎓 Simple Student Example</h2>

          <p>
            Suppose you created a website called
            <strong> Digital Marketing Hub</strong>.
          </p>

          <div className="example-flow">

            <div>
              <b>Website</b>
              <span>Digital Marketing Hub</span>
            </div>

            <div>→</div>

            <div>
              <b>Google Bot</b>
              <span>Crawls pages</span>
            </div>

            <div>→</div>

            <div>
              <b>Index</b>
              <span>Stores pages</span>
            </div>

            <div>→</div>

            <div>
              <b>Google Search</b>
              <span>Shows relevant page</span>
            </div>

          </div>

        </div>

      </section>


      {/* Audit Checklist */}
      <section className="seo-section">

        <h2>✅ Technical SEO Audit Checklist</h2>

        <div className="checklist">

          <div>✓ Website can be crawled</div>
          <div>✓ Important pages can be indexed</div>
          <div>✓ XML Sitemap is available</div>
          <div>✓ Robots.txt is correctly configured</div>
          <div>✓ Website uses HTTPS</div>
          <div>✓ Website is mobile friendly</div>
          <div>✓ Pages load properly</div>
          <div>✓ Broken links are checked</div>
          <div>✓ Redirects work correctly</div>
          <div>✓ Canonical URLs are configured</div>
          <div>✓ Structured data is checked</div>
          <div>✓ URLs are clean and readable</div>

        </div>

      </section>


      {/* Tools */}
      <section className="seo-section">

        <h2>🛠️ Technical SEO Tools</h2>

        <div className="tools-grid">

          <a
            href="https://search.google.com/search-console/"
            target="_blank"
            rel="noreferrer"
          >
            Google Search Console
          </a>

          <a
            href="https://pagespeed.web.dev/"
            target="_blank"
            rel="noreferrer"
          >
            PageSpeed Insights
          </a>

          <a
            href="https://validator.schema.org/"
            target="_blank"
            rel="noreferrer"
          >
            Schema Validator
          </a>

          <a
            href="https://developers.google.com/search"
            target="_blank"
            rel="noreferrer"
          >
            Google Search Central
          </a>

        </div>

      </section>


      <section className="seo-note">

        <h2>💡 Remember</h2>

        <p>
          Technical SEO makes the website easier for search engines to
          crawl, understand and index. But technical SEO alone does not
          guarantee a top ranking. Content, relevance, links and user
          experience also matter.
        </p>

      </section>

    </div>
  );
}

export default TechnicalSEO;