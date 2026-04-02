import React from "react";
import Typography from "@mui/material/Typography";
import { LinkedIn, Facebook } from "@mui/icons-material";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff",textAlign: 'center' }}>
            FinPlexus
          </Typography>

          <Typography variant="body2" className="brand-desc"  sx={{ whiteSpace: 'nowrap',textAlign: 'center' }}>
            Empowering businesses with innovative financial solutions and cutting-edge technology.
          </Typography>

          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="#" aria-label="X (Twitter)" className="x-icon">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18.244 2H21.5l-7.5 8.56L22 22h-6.828l-5.35-7.033L3.5 22H.244l8.02-9.154L0 2h6.828l4.82 6.35L18.244 2Zm-1.2 18h1.88L7.06 4h-2l12 16Z"/>
    </svg>
  </a>
            <a href="#" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <Typography variant="body2">
          © 2026 FinPlexus. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;