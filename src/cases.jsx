import React from "react";
import "./cases.css"; 

function Cases() {
  return (
    <>
      <header>
        <h1>Manage Cases</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="parties.html">Parties</a>
            </li>
            <li>
              <a href="hearings.html">Hearings</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="add-case">
          <h2>Add a New Case</h2>
          <form id="add-case-form">
            <label htmlFor="case-number">Case Number:</label>
            <input type="text" id="case-number" name="case-number" required />
            <br />

            <label htmlFor="case-type">Case Type:</label>
            <input type="text" id="case-type" name="case-type" required />
            <br />

            <label htmlFor="court-id">Court ID:</label>
            <input type="number" id="court-id" name="court-id" required />
            <br />

            <label htmlFor="status">Status:</label>
            <select id="status" name="status">
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>
            <br />

            <button type="submit">Add Case</button>
          </form>
        </section>

        <section className="cases-list">
          <h2>Existing Cases</h2>
          <ul id="case-list">
            {/* List of cases will be dynamically inserted here */}
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
