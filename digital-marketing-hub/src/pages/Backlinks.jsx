import "./Backlinks.css";
import { useEffect, useState } from "react";

const backlinkSites = [
  {
    name: "AdmyURL",
    url: "https://www.admyurl.com",
  },
  {
    name: "Somuch",
    url: "https://www.somuch.com",
  },
  {
    name: "Blue Sparkle Directory",
    url: "https://www.bluesparkledirectory.com/",
  },
  {
    name: "SubmitX",
    url: "https://submitx.com/",
  },
  {
    name: "Product Selectoren",
    url: "https://www.productselectoren.com",
  },
  {
    name: "DMOZ EBMD Attorneys",
    url: "https://dmoz.ebmdattorneys.com",
  },
  {
    name: "Submission Web Directory",
    url: "https://www.submissionwebdirectory.com/",
  },
  {
    name: "MoreFunz",
    url: "https://morefunz.com",
  },
  {
    name: "TagsHub",
    url: "https://tagshub.com",
  },
  {
    name: "USA Websites Directory",
    url: "https://www.usawebsitesdirectory.com",
  },
  {
    name: "ProLink Directory",
    url: "https://www.prolinkdirectory.com",
  },
  {
    name: "QuickLinks",
    url: "https://quicklinks.net/",
  },
  {
    name: "Info Listings",
    url: "https://info-listings.com/",
  },
  {
    name: "GainWeb",
    url: "https://gainweb.org",
  },
  {
    name: "UK Internet Directory",
    url: "https://www.ukinternetdirectory.net",
  },
  {
    name: "Free PR Web Directory",
    url: "https://www.freeprwebdirectory.com/",
  },
  {
    name: "Promote Business Directory",
    url: "https://www.promotebusinessdirectory.com",
  },
  {
    name: "Hit Web Directory",
    url: "https://www.hitwebdirectory.com/",
  },
  {
    name: "All States USA Directory",
    url: "https://www.allstatesusadirectory.com",
  },
  {
    name: "Free Top Rank Directory",
    url: "https://www.freetoprankdirectory.com",
  },
  {
    name: "Quality Internet Directory",
    url: "https://www.qualityinternetdirectory.com",
  },
  {
    name: "Travel Tourism Directory",
    url: "https://www.traveltourismdirectory.net",
  },
  {
    name: "9Sites",
    url: "https://www.9sites.net",
  },
  {
    name: "Viesearch Submit",
    url: "https://viesearch.com/submit",
  },
  {
    name: "Craigslist Directory",
    url: "https://www.craigslistdir.org",
  },
  {
    name: "FamilyDir",
    url: "https://www.familydir.com",
  },
  {
    name: "Marketing Web Directory",
    url: "https://www.marketingwebdirectory.com",
  },
  {
    name: "Information Crawler",
    url: "https://www.informationcrawler.com/submit.php",
  },
  {
    name: "Hit Web Directory Submit",
    url: "https://www.hitwebdirectory.com/submit.php",
  },
  {
    name: "Free Internet Web Directory",
    url: "https://www.freeinternetwebdirectory.com",
  },
  {
    name: "Submit.biz",
    url: "https://www.submit.biz/submit_url.php",
  },
  {
    name: "Marketing Internet Directory",
    url: "https://www.marketinginternetdirectory.com",
  },
  {
    name: "Skoobe",
    url: "https://www.skoobe.biz/",
  },
  {
    name: "Link Directory Listings",
    url: "https://linkdirectorylistings.org",
  },
  {
    name: "Abicloud",
    url: "https://abicloud.org/",
  },
  {
    name: "Homepage Seek",
    url: "https://homepageseek.com/",
  },
  {
    name: "Activ Directory",
    url: "https://activdirectory.net",
  },
  {
    name: "Caida",
    url: "https://caida.eu",
  },
  {
    name: "Cipinet",
    url: "https://www.cipinet.com/",
  },
  {
    name: "Sites Plus",
    url: "https://www.sites-plus.com",
  },
  {
    name: "Business Connect Directory",
    url: "https://businessconnect.directory/",
  },
  {
    name: "Canada Web Directory",
    url: "https://www.canadawebdir.com/",
  },
  {
    name: "Smart SEO Link",
    url: "https://smartseolink.org",
  },
  {
    name: "Best Buy Directory",
    url: "https://bestbuydir.com",
  },
  {
    name: "Dentons",
    url: "https://dentons.net/advertise/create/basic",
  },
  {
    name: "Made With VueJS",
    url: "https://madewithvuejs.com",
  },
  {
    name: "Craigslist Directory Net",
    url: "https://www.craigslistdirectory.net/",
  },
  {
    name: "Somuch",
    url: "https://somuch.com/",
  },
  {
    name: "Free Web Submission",
    url: "https://www.freewebsubmission.com/",
  },
  {
    name: "Web Directory Health",
    url: "https://www.webdirectoryhealth.com/",
  },
  {
    name: "Expansion Directory",
    url: "https://www.expansiondirectory.com",
  },
  {
    name: "AdmyURL",
    url: "https://admyurl.com/",
  },
  {
    name: "WebSquash",
    url: "https://www.websquash.com/cgi-bin/search/search.pl?Mode=AnonAdd",
  },
  {
    name: "Black Green Directory",
    url: "https://www.blackgreendirectory.com",
  },
  {
    name: "Sites On Display",
    url: "https://www.sitesondisplay.com/",
  },
  {
    name: "A Web List",
    url: "https://www.aweblist.org/",
  },
  {
    name: "Directory6",
    url: "https://www.directory6.org/",
  },
  {
    name: "OnTopList",
    url: "https://www.ontoplist.com",
  },
  {
    name: "Submit Express",
    url: "https://www.submitexpress.com/free-tools/free-website-submission/",
  },
  {
    name: "Britain Business Directory",
    url: "https://www.britainbusinessdirectory.com",
  },
  {
    name: "Just Directory",
    url: "https://www.justdirectory.org",
  },
  {
    name: "Viesearch",
    url: "https://www.viesearch.com/",
  },
  {
    name: "Directory Free",
    url: "https://www.directory-free.com",
  },
  {
    name: "Websites Index",
    url: "https://websitesindex.medicalbillinglogic.com",
  },
  {
    name: "Idaho Index",
    url: "https://www.idahoindex.com",
  },
  {
    name: "Fire Directory",
    url: "https://www.fire-directory.com",
  },
  {
    name: "Bluebook Directory",
    url: "https://www.bluebook-directory.com",
  },
  {
    name: "Blogville",
    url: "https://blogville.us",
  },
  {
    name: "SEO Optimization Directory",
    url: "https://seooptimizationdirectory.com",
  },
  {
    name: "Directory6",
    url: "https://directory6.org",
  },
  {
    name: "European Navigator",
    url: "https://europeannavigator.eu",
  },
  {
    name: "BIS Project",
    url: "https://bis-project.eu",
  },
  {
    name: "Seek Websites",
    url: "https://seekwebsites.innovasysindia.com",
  },
  {
    name: "eBay Directory",
    url: "https://ebay-dir.com",
  },
  {
    name: "A Web List",
    url: "https://aweblist.org",
  },
  {
    name: "Jayde",
    url: "https://www.jayde.com",
  },
  {
    name: "Just Directory",
    url: "https://justdirectory.org",
  },
];
const DONE_TIME = 24 * 60 * 60 * 1000;

function Backlinks() {

  const [completed, setCompleted] = useState(() => {

    const saved = localStorage.getItem(
      "backlinkCompleted"
    );

    return saved ? JSON.parse(saved) : {};
  });


  useEffect(() => {

    const checkExpired = () => {

      const now = Date.now();

      const saved = JSON.parse(
        localStorage.getItem("backlinkCompleted") || "{}"
      );

      const updated = {};

      Object.keys(saved).forEach((url) => {

        if (now - saved[url] < DONE_TIME) {
          updated[url] = saved[url];
        }

      });

      localStorage.setItem(
        "backlinkCompleted",
        JSON.stringify(updated)
      );

      setCompleted(updated);
    };


    checkExpired();

    const timer = setInterval(
      checkExpired,
      60 * 1000
    );

    return () => clearInterval(timer);

  }, []);


  const markDone = (url) => {

    const updated = {
      ...completed,
      [url]: Date.now(),
    };

    setCompleted(updated);

    localStorage.setItem(
      "backlinkCompleted",
      JSON.stringify(updated)
    );
  };


  const copyURL = async (url) => {

    try {

      await navigator.clipboard.writeText(url);

      alert("✅ URL Copied!");

    } catch {

      alert("Copy failed");
    }
  };


  const getRemainingTime = (timestamp) => {

    const remaining =
      DONE_TIME - (Date.now() - timestamp);

    if (remaining <= 0) {
      return "";
    }

    const hours = Math.floor(
      remaining / (60 * 60 * 1000)
    );

    const minutes = Math.floor(
      (remaining % (60 * 60 * 1000)) /
      (60 * 1000)
    );

    return `${hours}h ${minutes}m`;
  };


  return (

    <div className="backlinks-page">

      {/* HEADER */}

      <header className="backlinks-header">

        <h1>🔗 Backlink Websites</h1>

        <p>
          Submit your website and build backlinks
        </p>

      </header>


      {/* INFO */}

      <section className="backlink-info">

        <h2>
          Backlink Submission Websites
        </h2>

        <p>
          Open the website, complete your backlink
          submission and click Done.
        </p>

      </section>


      {/* WEBSITE LIST */}

      <section className="backlink-list">

        {backlinkSites.map((site, index) => {

          const doneTime =
            completed[site.url];

          const isDone =
            doneTime &&
            Date.now() - doneTime < DONE_TIME;


          return (

            <div
              className={`backlink-card ${
                isDone ? "completed-card" : ""
              }`}
              key={site.url}
            >

              {/* NUMBER */}

              <div className="site-number">
                {index + 1}
              </div>


              {/* WEBSITE */}

              <div className="site-info">

                <h3>
                  {site.name}
                </h3>

                <p>
                  {site.url}
                </p>

                {isDone && (

                  <span className="expiry-time">

                    ⏱️
                    Done for{" "}
                    {getRemainingTime(doneTime)}

                  </span>

                )}

              </div>


              {/* ACTIONS */}

              <div className="site-actions">

                <button
                  onClick={() => copyURL(site.url)}
                  className="copy-btn"
                >
                  📋 Copy
                </button>


                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-btn"
                >
                  🔗 Open
                </a>


                {!isDone ? (

                  <button
                    onClick={() => markDone(site.url)}
                    className="done-btn"
                  >
                    ✓ Done
                  </button>

                ) : (

                  <button
                    className="completed-btn"
                    disabled
                  >
                    ✓ DONE
                  </button>

                )}

              </div>

            </div>

          );

        })}

      </section>

    </div>

  );
}

export default Backlinks;