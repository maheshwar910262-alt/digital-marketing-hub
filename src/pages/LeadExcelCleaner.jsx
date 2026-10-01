import { Link } from "react-router-dom";
import "./LeadExcelCleaner.css";

function LeadExcelCleaner() {
  return (
    <div className="lead-cleaner-page">

      <Link to="/" className="back-home">
        ← Home
      </Link>

      <header className="lead-cleaner-header">
        <div>
          <h1>📊 Lead Excel Cleaner</h1>

          <p>
            Upload your lead Excel file and check duplicate data,
            mobile numbers, dates and invalid records.
          </p>
        </div>
      </header>

      <section className="upload-section">

        <div className="upload-box">

          <div className="upload-icon">
            📁
          </div>

          <h2>Upload Excel File</h2>

          <p>
            Select your Excel file to start checking your lead data.
          </p>

          <label className="upload-button">
            Choose Excel File
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              hidden
            />
          </label>

          <p className="file-note">
            Supported: .xlsx, .xls, .csv
          </p>

        </div>

      </section>


      <section className="features-section">

        <h2>What will be checked?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <span>🔁</span>
            <h3>Duplicate Data</h3>
            <p>
              Find duplicate rows, mobile numbers and emails.
            </p>
          </div>

          <div className="feature-card">
            <span>📱</span>
            <h3>Mobile Numbers</h3>
            <p>
              Check India and international mobile number formats.
            </p>
          </div>

          <div className="feature-card">
            <span>📅</span>
            <h3>Date Check</h3>
            <p>
              Check duplicate and invalid lead dates.
            </p>
          </div>

          <div className="feature-card">
            <span>⚠️</span>
            <h3>Invalid Data</h3>
            <p>
              Find missing or incorrectly formatted lead information.
            </p>
          </div>

        </div>

      </section>


      <section className="process-section">

        <h2>How It Works</h2>

        <div className="process-flow">

          <div>
            <strong>1</strong>
            <span>Upload Excel</span>
          </div>

          <div>→</div>

          <div>
            <strong>2</strong>
            <span>Check Data</span>
          </div>

          <div>→</div>

          <div>
            <strong>3</strong>
            <span>Review Results</span>
          </div>

          <div>→</div>

          <div>
            <strong>4</strong>
            <span>Download Clean Excel</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default LeadExcelCleaner;