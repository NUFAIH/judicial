import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cases.css";

function Cases() {
  const [cases, setCases] = useState([]);
  const [case_number, setCaseNumber] = useState("");
  const [case_type, setCaseType] = useState("");
  const [court_id, setCourtId] = useState("");
  const [status, setStatus] = useState("Pending");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null); // Track case being edited

  // ✅ Fetch cases from backend
  const fetchCases = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cases");
      setCases(response.data);
    } catch (error) {
      console.error("❌ Error fetching cases:", error.message);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  // ✅ Handle form submission (Add/Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const caseData = { case_number, case_type, court_id, status };

    try {
      if (editingId) {
        // Update existing case
        await axios.put(`http://localhost:5000/cases/${editingId}`, caseData);
        setMessage("✅ Case updated successfully!");
      } else {
        // Add new case
        await axios.post("http://localhost:5000/cases", caseData);
        setMessage("✅ Case added successfully!");
      }

      fetchCases(); // Refresh the case list
      resetForm(); // Reset form
    } catch (error) {
      console.error("❌ Error:", error.message);
      setMessage("❌ Error: " + error.message);
    }
  };

  // ✅ Populate form with case data for editing
  const handleEdit = (caseData) => {
    setEditingId(caseData.id);
    setCaseNumber(caseData.case_number);
    setCaseType(caseData.case_type);
    setCourtId(caseData.court_id);
    setStatus(caseData.status);
  };

  // ✅ Reset form fields
  const resetForm = () => {
    setEditingId(null);
    setCaseNumber("");
    setCaseType("");
    setCourtId("");
    setStatus("Pending");
  };

  return (
    <>
      <header>
        <h1>Manage Cases</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="parties.html">Parties</a></li>
            <li><a>Hearings</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="add-case">
          <h2>{editingId ? "Edit Case" : "Add a New Case"}</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="case-number">Case Number:</label>
            <input type="text" id="case-number" value={case_number} onChange={(e) => setCaseNumber(e.target.value)} required />

            <label htmlFor="case-type">Case Type:</label>
            <input type="text" id="case-type" value={case_type} onChange={(e) => setCaseType(e.target.value)} required />

            <label htmlFor="court-id">Court ID:</label>
            <input type="number" id="court-id" value={court_id} onChange={(e) => setCourtId(e.target.value)} required />

            <label htmlFor="status">Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>

            <button type="submit">{editingId ? "Update Case" : "Add Case"}</button>
            {editingId && <button type="button" onClick={resetForm}>Cancel</button>}
          </form>
        </section>

        <section className="cases-list">
          <h2>Existing Cases</h2>
          <ul>
            {cases.map((c) => (
              <li key={c.id}>
                {c.case_number} - {c.case_type} - {c.status}
                <button onClick={() => handleEdit(c)}>Edit</button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Judiciary System</p>
      </footer>
    </>
  );
}

export default Cases;
