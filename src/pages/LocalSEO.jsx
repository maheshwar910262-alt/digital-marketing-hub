import { Link } from "react-router-dom";
import "./LocalSEO.css";

const topics = [
  {
    number: "01",
    title: "What is Local SEO?",
    description:
      "Local SEO అంటే ఒక businessను local customers Google Search మరియు Google Mapsలో కనుగొనేలా optimize చేయడం.",
    points: [
      "Local search అంటే ఏమిటి?",
      "Google Maps visibility",
      "Local customers",
      "Local search intent",
    ],
  },
  {
    number: "02",
    title: "Business Eligibility",
    description:
      "Google Business Profile కోసం business eligibility మరియు service-area business conceptsను అర్థం చేసుకోవాలి.",
    points: [
      "Eligible business",
      "Physical location",
      "Service-area business",
      "Business representation",
    ],
    links: [
      {
        label: "Google Business Profile Guidelines",
        url: "https://support.google.com/business/answer/13763037",
      },
    ],
  },
  {
    number: "03",
    title: "Google Business Profile",
    description:
      "Google Business Profile ద్వారా business informationను Google Search మరియు Mapsలో manage చేయవచ్చు.",
    points: [
      "Business Profile basics",
      "Search visibility",
      "Maps visibility",
      "Business information",
    ],
    links: [
      {
        label: "Google Business Profile Help",
        url: "https://support.google.com/business/",
      },
    ],
  },
  {
    number: "04",
    title: "Add or Claim Your Business",
    description:
      "Business Profile already ఉంటే claim చేయాలి. లేకపోతే eligible business కోసం profile create చేయాలి.",
    points: [
      "Find your business",
      "Add business",
      "Claim profile",
      "Manage ownership",
    ],
    links: [
      {
        label: "Add or Claim a Business",
        url: "https://support.google.com/business/answer/2911778",
      },
    ],
  },
  {
    number: "05",
    title: "Business Verification",
    description:
      "Google business ownership లేదా eligibility verify చేయడానికి available verification methodను ఉపయోగించాలి.",
    points: [
      "Verification process",
      "Available verification methods",
      "Verification status",
      "Profile management",
    ],
    links: [
      {
        label: "Google Verification Help",
        url: "https://support.google.com/business/answer/7107242",
      },
    ],
  },
  {
    number: "06",
    title: "Business Information",
    description:
      "Business name, address, phone number, website మరియు other important information accurateగా ఉంచాలి.",
    points: [
      "Business name",
      "Address",
      "Phone number",
      "Website",
      "Business hours",
    ],
    links: [
      {
        label: "Edit Business Information",
        url: "https://support.google.com/business/answer/3038177",
      },
    ],
  },
  {
    number: "07",
    title: "Business Category",
    description:
      "Businessకి relevant primary category మరియు available additional categoriesను correctly select చేయాలి.",
    points: [
      "Primary category",
      "Additional categories",
      "Category relevance",
      "Avoid incorrect categories",
    ],
    links: [
      {
        label: "Google Business Categories",
        url: "https://support.google.com/business/answer/7249596",
      },
    ],
  },
  {
    number: "08",
    title: "Business Description",
    description:
      "Business ఏం చేస్తుంది, ఎవరి కోసం services అందిస్తుంది వంటి useful informationను clearly describe చేయాలి.",
    points: [
      "Business introduction",
      "Services",
      "Products",
      "Relevant information",
    ],
    links: [
      {
        label: "Business Description Guidelines",
        url: "https://support.google.com/business/answer/13763036",
      },
    ],
  },
  {
    number: "09",
    title: "Services & Products",
    description:
      "Customersకి అందించే important services లేదా productsను Business Profileలో add చేయవచ్చు.",
    points: [
      "Services",
      "Products",
      "Descriptions",
      "Pricing where applicable",
    ],
    links: [
      {
        label: "Add Services",
        url: "https://support.google.com/business/answer/9455399",
      },
    ],
  },
  {
    number: "10",
    title: "Website & Customer Links",
    description:
      "Website మరియు supported customer-action links ద్వారా customersకి next step ఇవ్వాలి.",
    points: [
      "Website",
      "Appointment links",
      "Booking links",
      "Customer actions",
    ],
    links: [
      {
        label: "Business Profile Links",
        url: "https://support.google.com/business/answer/6218037",
      },
    ],
  },
  {
    number: "11",
    title: "Photos & Videos",
    description:
      "Business location, products, services మరియు real business activityకి సంబంధించిన useful visual content add చేయాలి.",
    points: [
      "Logo",
      "Cover photo",
      "Business photos",
      "Product/service photos",
      "Videos",
    ],
    links: [
      {
        label: "Business Photos & Videos",
        url: "https://support.google.com/business/answer/6103862",
      },
    ],
  },
  {
    number: "12",
    title: "Customer Reviews",
    description:
      "Real customers నుంచి genuine reviews పొందడం మరియు reviewsకి professionalగా respond చేయడం నేర్చుకోవాలి.",
    points: [
      "Request genuine reviews",
      "Review link",
      "Reply to reviews",
      "Handle negative feedback",
    ],
    links: [
      {
        label: "Google Review Guidelines",
        url: "https://support.google.com/business/answer/3474122",
      },
    ],
  },
  {
    number: "13",
    title: "Local Keyword Research",
    description:
      "Customers localగా search చేసే keywords మరియు search intentను identify చేయాలి.",
    points: [
      "Service + location",
      "Local search intent",
      "Keyword variations",
      "Long-tail keywords",
    ],
  },
  {
    number: "14",
    title: "Local On-Page SEO",
    description:
      "Website pagesలో relevant local information మరియు useful service contentను optimize చేయాలి.",
    points: [
      "Title tag",
      "Meta description",
      "Headings",
      "Location information",
      "Service pages",
    ],
    links: [
      {
        label: "Google SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  },
  {
    number: "15",
    title: "NAP Consistency",
    description:
      "Name, Address, Phone information important business listingsలో consistentగా ఉండేలా maintain చేయాలి.",
    points: [
      "Business Name",
      "Address",
      "Phone",
      "Website",
      "Consistency check",
    ],
  },
  {
    number: "16",
    title: "Local Citations",
    description:
      "Relevant business directories మరియు local platformsలో business information presenceను manage చేయడం.",
    points: [
      "Business directories",
      "Industry directories",
      "Local directories",
      "Information consistency",
    ],
  },
  {
    number: "17",
    title: "Local Content",
    description:
      "Local customersకి useful information అందించే location-focused content create చేయాలి.",
    points: [
      "Local service pages",
      "Location pages",
      "Local guides",
      "FAQs",
      "Useful local content",
    ],
  },
  {
    number: "18",
    title: "Local Backlinks",
    description:
      "Relevant local organizations, publications, businesses మరియు industry websites నుంచి natural relevant links గురించి నేర్చుకోవాలి.",
    points: [
      "Local partnerships",
      "Industry websites",
      "Local publications",
      "Relevant backlinks",
    ],
  },
  {
    number: "19",
    title: "Competitor Research",
    description:
      "Local competitors ఏ services, categories, content మరియు customer information ఉపయోగిస్తున్నారో research చేయాలి.",
    points: [
      "Competitor profiles",
      "Categories",
      "Reviews",
      "Services",
      "Content",
    ],
  },
  {
    number: "20",
    title: "Google Search Console",
    description:
      "Website search performance, queries, pages మరియు indexing informationను monitor చేయడానికి Search Console ఉపయోగించవచ్చు.",
    points: [
      "Search queries",
      "Pages",
      "Clicks",
      "Impressions",
      "Indexing",
    ],
    links: [
      {
        label: "Google Search Console",
        url: "https://search.google.com/search-console/",
      },
    ],
  },
  {
    number: "21",
    title: "Performance Tracking",
    description:
      "Local SEO work తర్వాత visibility, website traffic, calls, leads మరియు other relevant business outcomesను track చేయాలి.",
    points: [
      "Search visibility",
      "Website traffic",
      "Calls",
      "Leads",
      "Conversions",
    ],
    links: [
      {
        label: "Google Analytics",
        url: "https://analytics.google.com/",
      },
    ],
  },
  {
    number: "22",
    title: "Monthly Optimization",
    description:
      "Local SEO one-time work కాదు. Information, reviews, content, website మరియు performanceను regularly review చేయాలి.",
    points: [
      "Profile review",
      "Content updates",
      "Review management",
      "Technical checks",
      "Performance review",
    ],
  },
];

function LocalSEO() {
  return (
    <div className="local-page">
      <div className="local-container">

        <Link to="/" className="local-home">
          ← Home
        </Link>

        <header className="local-hero">
          <span>LOCAL SEARCH OPTIMIZATION</span>

          <h1>Local SEO</h1>

          <p>
            Learn Local SEO from business setup and Google Business Profile
            to local keywords, reviews, citations, website optimization,
            tracking and monthly improvement.
          </p>

          <div className="local-flow">
            <span>Setup</span>
            <b>→</b>
            <span>Optimize</span>
            <b>→</b>
            <span>Publish</span>
            <b>→</b>
            <span>Track</span>
            <b>→</b>
            <span>Improve</span>
          </div>
        </header>

        <section className="local-intro">
          <span>START TO END</span>

          <h2>What Can You Do With Local SEO?</h2>

          <p>
            Local SEO helps you organize a local business's online presence
            so customers can find useful and accurate business information
            when searching locally.
          </p>
        </section>

        <section className="local-topics">
          {topics.map((topic) => (
            <article className="local-card" key={topic.number}>

              <div className="local-number">
                {topic.number}
              </div>

              <div className="local-card-content">

                <h3>{topic.title}</h3>

                <p className="local-description">
                  {topic.description}
                </p>

                <ul>
                  {topic.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {topic.links && (
                  <div className="local-links">
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

        <section className="local-project">

          <span>PRACTICAL PROJECT</span>

          <h2>Local SEO Project</h2>

          <p>
            ఒక real local business కోసం complete Local SEO process practice
            చేయండి.
          </p>

          <div className="project-grid">

            <div>
              <strong>Business</strong>
              <p>Data Analytics Training Institute</p>
            </div>

            <div>
              <strong>Location</strong>
              <p>Hyderabad</p>
            </div>

            <div>
              <strong>Target</strong>
              <p>Local students looking for training</p>
            </div>

            <div>
              <strong>Website</strong>
              <p>Create and optimize relevant course pages</p>
            </div>

          </div>

          <div className="project-checklist">

            <div>✓ Create / claim Business Profile</div>
            <div>✓ Complete business information</div>
            <div>✓ Select relevant category</div>
            <div>✓ Add services</div>
            <div>✓ Add website</div>
            <div>✓ Add genuine photos</div>
            <div>✓ Build genuine review process</div>
            <div>✓ Research local keywords</div>
            <div>✓ Optimize website pages</div>
            <div>✓ Check business citations</div>
            <div>✓ Publish useful local content</div>
            <div>✓ Track performance</div>

          </div>
        </section>

        <section className="local-check">

          <span>FINAL CHECK</span>

          <h2>Local SEO Checklist</h2>

          <div className="final-grid">
            <div>✓ Business information is accurate</div>
            <div>✓ Category is relevant</div>
            <div>✓ Website is connected</div>
            <div>✓ Services are added</div>
            <div>✓ Photos are available</div>
            <div>✓ Genuine reviews are managed</div>
            <div>✓ Local keywords are researched</div>
            <div>✓ Website pages are optimized</div>
            <div>✓ Local information is consistent</div>
            <div>✓ Performance is tracked</div>
          </div>
        </section>

        <section className="local-official">

          <span>OFFICIAL GOOGLE RESOURCE</span>

          <h2>Ready to Work on Local SEO?</h2>

          <p>
            Concepts and workflow understand చేసిన తర్వాత official Google
            Business Profile platformలో actual business work చేయండి.
          </p>

          <a
            href="https://www.google.com/business/"
            target="_blank"
            rel="noopener noreferrer"
            className="local-visit"
          >
            Visit Google Business Profile →
          </a>

          <small>
            Official Google Business Profile resource
          </small>

        </section>

        <footer className="local-footer">
          Local SEO Learning Hub
        </footer>

      </div>
    </div>
  );
}

export default LocalSEO;