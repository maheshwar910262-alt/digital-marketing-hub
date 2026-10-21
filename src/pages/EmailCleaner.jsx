import React, { useState } from "react";
import ExcelJS from "exceljs";
import * as XLSX from "xlsx";
import "./EmailCleaner.css";

const EMAIL_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

function getCellText(value) {
  if (value == null) return "";

  if (typeof value === "object") {
    if (value.text) return String(value.text);
    if (value.hyperlink) return String(value.text || value.hyperlink);
    if (Array.isArray(value.richText)) {
      return value.richText.map((part) => part.text || "").join("");
    }
    if (value.result != null) return String(value.result);
  }

  return String(value);
}

function isRedFill(cell) {
  const fill = cell.fill;

  if (!fill || fill.type !== "pattern") return false;

  const colors = [fill.fgColor, fill.bgColor].filter(Boolean);

  return colors.some((color) => {
    if (color.type === "theme" || !color.argb) return false;

    const hex = String(color.argb).replace("#", "").toUpperCase();
    const rgb = hex.length >= 6 ? hex.slice(-6) : "";

    if (!/^[0-9A-F]{6}$/.test(rgb)) return false;

    const r = parseInt(rgb.slice(0, 2), 16);
    const g = parseInt(rgb.slice(2, 4), 16);
    const b = parseInt(rgb.slice(4, 6), 16);

    return r >= 200 && g <= 80 && b <= 80;
  });
}

function uniqueEmails(rows) {
  const seen = new Set();

  return rows.filter((item) => {
    const key = item.email.toLowerCase().trim();

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

export default function EmailCleaner() {
  const [redEmails, setRedEmails] = useState([]);
  const [cleanEmails, setCleanEmails] = useState([]);
  const [duplicates, setDuplicates] = useState(0);
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFileUpload(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    setLoading(true);
    setMessage("");
    setFileName(file.name);
    setRedEmails([]);
    setCleanEmails([]);
    setDuplicates(0);

    try {
      const workbook = new ExcelJS.Workbook();
      const buffer = await file.arrayBuffer();

      await workbook.xlsx.load(buffer);

      const redRows = [];
      const normalRows = [];
      let duplicateCount = 0;

      const redSeen = new Set();
      const normalSeen = new Set();

      workbook.eachSheet((sheet) => {
        sheet.eachRow((row, rowNumber) => {
          row.eachCell((cell) => {
            const text = getCellText(cell.value);
            const match = text.match(EMAIL_REGEX);

            if (!match) return;

            const email = match[0].trim();
            const key = email.toLowerCase();
            const red = isRedFill(cell);

            const target = red ? redRows : normalRows;
            const seen = red ? redSeen : normalSeen;

            if (seen.has(key)) {
              duplicateCount += 1;
              return;
            }

            seen.add(key);
            target.push({
              email,
              sheet: sheet.name,
              row: rowNumber,
            });
          });
        });
      });

      setRedEmails(redRows);
      setCleanEmails(normalRows);
      setDuplicates(duplicateCount);

      setMessage(
        `Completed! ${redRows.length} unique red emails and ${normalRows.length} unique normal emails found.`
      );
    } catch (error) {
      console.error(error);
      setMessage(
        "Excel read cheyalekapoyam. Please upload a valid .xlsx file."
      );
    } finally {
      setLoading(false);
      event.target.value = "";
    }
  }

  function removeRedEmail(index) {
    setRedEmails((current) => current.filter((_, i) => i !== index));
  }

  function removeCleanEmail(index) {
    setCleanEmails((current) => current.filter((_, i) => i !== index));
  }

  function downloadExcel(emails, sheetName, fileName) {
    const workbook = XLSX.utils.book_new();

    const data = [
      ["Email"],
      ...emails.map((item) => [item.email]),
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      sheetName.slice(0, 31)
    );

    XLSX.writeFile(workbook, fileName);
  }

  function downloadBothSheets() {
    const workbook = XLSX.utils.book_new();

    const redSheet = XLSX.utils.aoa_to_sheet([
      ["Red Color Emails"],
      ...redEmails.map((item) => [item.email]),
    ]);

    const cleanSheet = XLSX.utils.aoa_to_sheet([
      ["Clean Emails"],
      ...cleanEmails.map((item) => [item.email]),
    ]);

    XLSX.utils.book_append_sheet(workbook, redSheet, "Red Emails");
    XLSX.utils.book_append_sheet(workbook, cleanSheet, "Clean Emails");

    XLSX.writeFile(workbook, "email-filtered-results.xlsx");
  }

  return (
    <section className="email-cleaner">
      <header className="cleaner-header">
        <span>EMAIL LIST TOOL</span>
        <h2>📧 Email Color Filter & Duplicate Remover</h2>
        <p>
          Upload Excel, separate red-highlighted emails, remove duplicates,
          and download your filtered results.
        </p>
      </header>

      <div className="cleaner-upload">
        <label htmlFor="email-excel-file">Upload Excel (.xlsx)</label>
        <input
          id="email-excel-file"
          type="file"
          accept=".xlsx"
          onChange={handleFileUpload}
        />
        {fileName && <p>Selected: {fileName}</p>}
        {loading && <p>Reading Excel file...</p>}
        {message && <p className="cleaner-message">{message}</p>}
      </div>

      <div className="cleaner-stats">
        <div>
          <strong>{redEmails.length}</strong>
          <span>Red Emails</span>
        </div>
        <div>
          <strong>{cleanEmails.length}</strong>
          <span>Normal Emails</span>
        </div>
        <div>
          <strong>{duplicates}</strong>
          <span>Duplicates Skipped</span>
        </div>
      </div>

      <div className="cleaner-actions">
        <button
          onClick={downloadBothSheets}
          disabled={!redEmails.length && !cleanEmails.length}
        >
          Download Both Sheets
        </button>
      </div>

      <div className="cleaner-columns">
        <section className="cleaner-panel red-emails-panel">
          <h3>🔴 Red Color Emails</h3>
          <p>Unique emails found in red-filled cells.</p>

          <div className="cleaner-list">
            {redEmails.map((item, index) => (
              <div className="cleaner-row" key={`${item.email}-${index}`}>
                <span>{item.email}</span>
                <button
                  onClick={() => removeRedEmail(index)}
                  aria-label={`Remove ${item.email}`}
                >
                  Remove
                </button>
              </div>
            ))}

            {!redEmails.length && <p>No red emails found.</p>}
          </div>

          <button
            className="download-red"
            onClick={() =>
              downloadExcel(redEmails, "Red Emails", "red-emails.xlsx")
            }
            disabled={!redEmails.length}
          >
            Download Red Emails
          </button>
        </section>

        <section className="cleaner-panel normal-emails-panel">
          <h3>✅ Normal Emails</h3>
          <p>Unique emails from cells without a red fill.</p>

          <div className="cleaner-list">
            {cleanEmails.map((item, index) => (
              <div className="cleaner-row" key={`${item.email}-${index}`}>
                <span>{item.email}</span>
                <button
                  onClick={() => removeCleanEmail(index)}
                  aria-label={`Remove ${item.email}`}
                >
                  Remove
                </button>
              </div>
            ))}

            {!cleanEmails.length && <p>No normal emails found.</p>}
          </div>

          <button
            className="download-clean"
            onClick={() =>
              downloadExcel(
                cleanEmails,
                "Clean Emails",
                "clean-emails.xlsx"
              )
            }
            disabled={!cleanEmails.length}
          >
            Download Clean Emails
          </button>
        </section>
      </div>

      <p className="cleaner-note">
        Note: This tool reads Excel cell fill colors. It keeps one copy of
        each email within each category. Red and normal copies of the same
        email can appear in their respective lists.
      </p>
    </section>
  );
}