import React, { useEffect, useState } from "react";
import "./ContactsDashboard.css";

function ContactsDashboard({ onLogout, onClose }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setContacts(Array.isArray(data) ? data : []); // Ensure it's always an array
    } catch (err) {
      setError("Could not load contacts. Make sure Django is running.");
    } finally {
      setLoading(false);
    }
  };

  // Safety check for filter
  const filtered = contacts.filter(
    (c) =>
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="dashboard-overlay">
      <div className="dashboard-modal">
        {/* Close Button top-left like your image */}
        <button className="dashboard-close-x" onClick={onClose}>✕</button>

        <div className="dashboard-header">
          <div>
            <h2>Contact Submissions</h2>
            <p className="dashboard-sub">All messages from your contact form</p>
          </div>
          <div className="dashboard-header-right">
            <span className="dashboard-count">{contacts.length} total</span>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </div>
        </div>

        <input
          className="dashboard-search"
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="dashboard-content-area">
          {loading ? (
            <div className="dashboard-loading">Loading contacts...</div>
          ) : error ? (
            <div className="dashboard-error">{error}</div>
          ) : filtered.length === 0 ? (
            <p className="dashboard-empty">No contacts found.</p>
          ) : (
            <div className="dashboard-table-wrapper">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((contact, index) => (
                    <tr key={contact.id || index}>
                      <td className="td-num">{index + 1}</td>
                      <td className="td-name">{contact.name}</td>
                      <td><a href={`mailto:${contact.email}`} className="email-link">{contact.email}</a></td>
                      <td className="message-cell">{contact.message}</td>
                      <td className="td-date">{formatDate(contact.submitted_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <button className="dashboard-refresh" onClick={fetchContacts}>
          Refresh Data
        </button>
      </div>
    </div>
  );
}

export default ContactsDashboard;