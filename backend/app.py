
from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from pathlib import Path

from ai_tools_api import (
    ai_tools_bp,
    init_ai_tools_db,
    admin_required,
)

# Create Flask application
app = Flask(__name__)

CORS(
    app,
    resources={r"/api/*": {"origins": "*"}},
    allow_headers=["Content-Type", "Authorization"],
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
)

# Register the existing AI Tools login and API
app.register_blueprint(ai_tools_bp)

# SQLite database
DB_PATH = Path(__file__).with_name("digital_marketing.db")


def get_db():
    db = sqlite3.connect(DB_PATH)
    db.row_factory = sqlite3.Row
    return db


# Create database tables
def init_db():
    with get_db() as db:
        db.execute("""
            CREATE TABLE IF NOT EXISTS backlinks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                url TEXT NOT NULL UNIQUE,
                completed INTEGER NOT NULL DEFAULT 0,
                best INTEGER NOT NULL DEFAULT 0
            )
        """)

        db.execute("""
            CREATE TABLE IF NOT EXISTS backlink_status (
                url TEXT PRIMARY KEY,
                completed_at INTEGER NOT NULL
            )
        """)


@app.route("/")
def home():
    return jsonify({
        "message": "Digital Marketing Backend is running"
    })


@app.route("/api/health")
def health():
    return jsonify({
        "status": "success",
        "backend": "Flask",
        "database": "SQLite"
    })


@app.route("/api/hello", methods=["POST"])
def hello():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "Student")).strip() or "Student"

    return jsonify({
        "message": f"Hello, {name}! Flask received your data."
    })


# Public: view backlinks
@app.route("/api/backlinks", methods=["GET"])
def get_backlinks():
    with get_db() as db:
        rows = db.execute(
            "SELECT * FROM backlinks ORDER BY id DESC"
        ).fetchall()

    return jsonify([dict(row) for row in rows])


# Admin only: add backlink
@app.route("/api/backlinks", methods=["POST"])
@admin_required
def add_backlink():
    data = request.get_json(silent=True) or {}

    name = str(data.get("name", "")).strip()
    url = str(data.get("url", "")).strip()

    if not name or not url:
        return jsonify({
            "error": "Name and URL are required"
        }), 400

    if not url.startswith(("https://", "http://")):
        return jsonify({
            "error": "Enter a valid HTTP or HTTPS URL"
        }), 400

    try:
        with get_db() as db:
            cursor = db.execute(
                "INSERT INTO backlinks (name, url) VALUES (?, ?)",
                (name, url)
            )
            saved_id = cursor.lastrowid

        return jsonify({
            "message": "Backlink saved successfully",
            "id": saved_id,
            "name": name,
            "url": url,
            "completed": 0,
            "best": 0
        }), 201

    except sqlite3.IntegrityError:
        return jsonify({
            "error": "This URL already exists"
        }), 409


# Public: view backlink status
@app.route("/api/backlink-status", methods=["GET"])
def get_backlink_status():
    with get_db() as db:
        rows = db.execute(
            "SELECT url, completed_at FROM backlink_status"
        ).fetchall()

    return jsonify({
        row["url"]: row["completed_at"]
        for row in rows
    })


# Admin only: update backlink status
@app.route("/api/backlink-status", methods=["POST"])
@admin_required
def save_backlink_status():
    data = request.get_json(silent=True) or {}

    url = str(data.get("url", "")).strip()
    completed_at = data.get("completed_at")

    if not url:
        return jsonify({
            "error": "URL is required"
        }), 400

    try:
        with get_db() as db:
            if completed_at is None:
                db.execute(
                    "DELETE FROM backlink_status WHERE url = ?",
                    (url,)
                )
            else:
                completed_at = int(completed_at)

                db.execute("""
                    INSERT INTO backlink_status (url, completed_at)
                    VALUES (?, ?)
                    ON CONFLICT(url) DO UPDATE SET
                        completed_at = excluded.completed_at
                """, (url, completed_at))

        return jsonify({
            "message": "Status saved successfully"
        })

    except (ValueError, TypeError):
        return jsonify({
            "error": "Invalid completion timestamp"
        }), 400


# Admin only: delete backlink
@app.route(
    "/api/backlinks/<int:backlink_id>",
    methods=["DELETE"]
)
@admin_required
def delete_backlink(backlink_id):
    try:
        with get_db() as db:
            row = db.execute(
                "SELECT url FROM backlinks WHERE id = ?",
                (backlink_id,)
            ).fetchone()

            if row is None:
                return jsonify({
                    "error": "Backlink not found"
                }), 404

            db.execute(
                "DELETE FROM backlink_status WHERE url = ?",
                (row["url"],)
            )

            db.execute(
                "DELETE FROM backlinks WHERE id = ?",
                (backlink_id,)
            )

        return jsonify({
            "message": "Backlink deleted successfully"
        })

    except sqlite3.Error:
        app.logger.exception("Could not delete backlink")
        return jsonify({
            "error": "Unable to delete backlink"
        }), 500


if __name__ == "__main__":
    init_db()
    init_ai_tools_db()
    app.run(debug=True, port=5000)
