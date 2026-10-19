import { Link } from "react-router-dom";
import "./WhatsAppMarketing.css";

function WhatsAppMarketing() {
  return (
    <div className="whatsapp-page">

      <Link to="/" className="back-home">
        ← Home
      </Link>

      <header className="whatsapp-header">
        <div className="whatsapp-icon">💬</div>
        <h1>WhatsApp Marketing</h1>
        <p>
          Learn WhatsApp Business marketing, customer communication,
          contact management and campaign planning.
        </p>
      </header>

      {/* WhatsApp Connection */}
      <section className="whatsapp-card">
        <h2>📱 WhatsApp Connection</h2>

        <div className="connection-box">
          <div>
            <strong>WhatsApp Business Number</strong>
            <p>+91 XXXXX XXXXX</p>
            <span className="connected">● Connected</span>
          </div>

          <button className="logout-btn">
            Logout
          </button>
        </div>
      </section>

      {/* Mobile Filter */}
      <section className="whatsapp-card">
        <h2>🔍 Mobile Number Filter</h2>

        <p>
          Add or import customer mobile numbers and check the contact data
          before starting a campaign.
        </p>

        <textarea
          className="mobile-input"
          placeholder={`Paste mobile numbers here...

Example:
+91 9876543210
+91 9123456789
+1 9876543210`}
        />

        <div className="filter-actions">
          <button className="primary-btn">
            Check Numbers
          </button>

          <button className="secondary-btn">
            Import Excel
          </button>
        </div>

        <div className="filter-summary">
          <div>
            <strong>33</strong>
            <span>Total</span>
          </div>

          <div>
            <strong>28</strong>
            <span>Eligible</span>
          </div>

          <div>
            <strong>3</strong>
            <span>Invalid</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Unavailable</span>
          </div>
        </div>
      </section>

      {/* Member Selection */}
      <section className="whatsapp-card">
        <h2>👥 Select Members</h2>

        <div className="select-all">
          <label>
            <input type="checkbox" />
            Select All Eligible Members
          </label>

          <strong>Selected: 28</strong>
        </div>

        <div className="member-list">

          <label>
            <input type="checkbox" />
            Mahesh — +91 XXXXX XXXXX
          </label>

          <label>
            <input type="checkbox" />
            Ravi — +91 XXXXX XXXXX
          </label>

          <label>
            <input type="checkbox" />
            Suresh — +91 XXXXX XXXXX
          </label>

        </div>
      </section>

      {/* Message */}
      <section className="whatsapp-card">
        <h2>✍️ Campaign Message</h2>

        <input
          type="text"
          className="message-input"
          placeholder="Message subject / campaign name"
        />

        <textarea
          className="message-box"
          placeholder={`Write your WhatsApp message...

Example:

Hello {{name}},

We have a new update for you.

For more details, please contact us.

Thank you.`}
        />

        <div className="message-actions">
          <button className="secondary-btn">
            Preview Message
          </button>

          <button className="primary-btn">
            Save Campaign
          </button>
        </div>
      </section>

      {/* Safety Check */}
      <section className="whatsapp-card safety-card">
        <h2>⚠️ Safety Check Before Sending</h2>

        <label>
          <input type="checkbox" />
          These contacts have given permission to receive messages.
        </label>

        <label>
          <input type="checkbox" />
          The message is relevant to the selected contacts.
        </label>

        <label>
          <input type="checkbox" />
          An unsubscribe / opt-out option is available where required.
        </label>

        <label>
          <input type="checkbox" />
          Invalid or unavailable numbers will not be contacted.
        </label>

        <div className="send-warning">
          Review your selected contacts and message before sending.
        </div>

        <button className="send-btn">
          Send Campaign
        </button>
      </section>

      {/* Campaign Status */}
      <section className="whatsapp-card">
        <h2>📊 Campaign Status</h2>

        <div className="campaign-status">

          <div>
            <strong>28</strong>
            <span>Selected</span>
          </div>

          <div>
            <strong>0</strong>
            <span>Sent</span>
          </div>

          <div>
            <strong>0</strong>
            <span>Failed</span>
          </div>

          <div>
            <strong>0</strong>
            <span>Pending</span>
          </div>

        </div>

        <div className="campaign-actions">
          <button className="pause-btn">
            Pause Campaign
          </button>

          <button className="stop-btn">
            Stop Campaign
          </button>
        </div>
      </section>

      {/* SMS Fallback */}
      <section className="whatsapp-card sms-card">
        <h2>📩 SMS Fallback</h2>

        <p>
          If a selected contact is not eligible for WhatsApp,
          you can keep those numbers separately for SMS communication.
        </p>

        <div className="sms-count">
          WhatsApp unavailable: <strong>2 contacts</strong>
        </div>

        <label>
          <input type="checkbox" />
          Use SMS fallback for unavailable contacts
        </label>

        <textarea
          className="message-box"
          placeholder="Enter SMS message..."
        />

        <button className="secondary-btn">
          Prepare SMS List
        </button>
      </section>

      {/* Learning Flow */}
      <section className="whatsapp-card">
        <h2>🎯 WhatsApp Marketing Workflow</h2>

        <div className="workflow">
          <span>Contacts</span>
          <b>→</b>
          <span>Filter</span>
          <b>→</b>
          <span>Select</span>
          <b>→</b>
          <span>Message</span>
          <b>→</b>
          <span>Safety Check</span>
          <b>→</b>
          <span>Campaign</span>
          <b>→</b>
          <span>Report</span>
        </div>
      </section>

    </div>
  );
}

export default WhatsAppMarketing;