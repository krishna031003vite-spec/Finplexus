import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin({ onLogin, onClose }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      setError("Both fields are required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin-login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        onLogin();
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Cannot connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      {/* This creates the blur and dimmed background */}
      <div className="login-modal-container">
        <button className="modal-close-x" onClick={onClose}>✕</button>
        
        <div className="login-box">
          <div className="login-header">
            <h2>Admin Panel</h2>
            <p>Enter your credentials to view contact submissions</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={credentials.username}
                onChange={handleChange}
              />
            </div>
            
            <div className="login-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Verifying..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;