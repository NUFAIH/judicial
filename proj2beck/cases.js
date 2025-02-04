const express = require("express");
const router = express.Router();
const mysql = require("mysql");

// Create MySQL Connection Pool (better than `createConnection`)
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "helloworld",
    database: "judicialsys",
    connectionLimit: 10, // Prevents connection issues
});

// Middleware to ensure database connection
db.getConnection((err) => {
    if (err) {
        console.error("❌ Database connection error:", err.message);
    } else {
        console.log("✅ MySQL connected!");
    }
});

// Get all cases
router.get("/", (req, res) => {
    const sql = "SELECT * FROM cases;";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get a specific case by ID
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM cases WHERE id = ?;";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Case not found" });
        res.json(results[0]);
    });
});

// Add a new case
router.post("/", (req, res) => {
    console.log("✅ Received request at /cases with body:", req.body);

    const { case_number, case_type, court_id, status } = req.body;

    // Ensure all required fields are provided
    if (!case_number || !case_type || !court_id || !status) {
        console.log("❌ Missing field(s) in request:", req.body);
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO cases (case_number, case_type, court_id, status) VALUES (?, ?, ?, ?);";
    
    db.query(sql, [case_number, case_type, parseInt(court_id), status], (err, result) => {
        if (err) {
            console.error("❌ MySQL Error:", err.sqlMessage);
            return res.status(500).json({ error: err.sqlMessage });
        }
        res.json({ message: "✅ Case added successfully", id: result.insertId });
    });
});

// Export the router
module.exports = router;
