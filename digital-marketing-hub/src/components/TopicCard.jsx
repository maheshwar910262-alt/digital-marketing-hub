import { Link } from "react-router-dom";

function TopicCard({
  icon,
  title,
  description,
  pdfLink = "",
  videoLink = "",
  visitLink = "",
}) {
  return (
    <div className="topic-card">

      {/* ICON */}
      <div className="topic-icon">
        {icon}
      </div>


      {/* TITLE */}
      <h2>
        {title}
      </h2>


      {/* DESCRIPTION */}
      <p>
        {description}
      </p>


      {/* THREE BUTTONS */}
      <div className="buttons">

        {/* =========================
            LEARN - PDF
        ========================= */}

        {pdfLink ? (
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="learn-btn"
          >
            📄 Learn
          </a>
        ) : (
          <button
            className="learn-btn"
            disabled
          >
            📄 Learn
          </button>
        )}


        {/* =========================
            WATCH - YOUTUBE
        ========================= */}

        {videoLink ? (
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"
          >
            ▶ Watch
          </a>
        ) : (
          <button
            className="watch-btn"
            disabled
          >
            ▶ Watch
          </button>
        )}


        {/* =========================
            VISIT
        ========================= */}

        {visitLink ? (

          visitLink.startsWith("/") ? (

            /* INTERNAL REACT PAGE */

            <Link
              to={visitLink}
              className="visit-btn"
            >
              🔗 Visit
            </Link>

          ) : (

            /* EXTERNAL WEBSITE */

            <a
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              🔗 Visit
            </a>

          )

        ) : (

          <button
            className="visit-btn"
            disabled
          >
            🔗 Visit
          </button>

        )}

      </div>

    </div>
  );
}

export default TopicCard;