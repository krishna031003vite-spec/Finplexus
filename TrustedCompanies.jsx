import React from "react";
import "./TrustedCompanies.css";
import { motion } from "framer-motion";

const TrustedCompanies = () => {
  const companies = [
    { name: "TechCorp"    },
    { name: "FinanceHub"  },
    { name: "DataSoft"    },
    { name: "CloudSync"   },
    { name: "SecureNet"   },
    { name: "InnovateLabs" },
  ];

  // Duplicate for seamless infinite loop
  const items = [...companies, ...companies];

  return (
    <section className="trusted-companies-section">
      <div className="trusted-companies-container">
        <motion.div
          className="trusted-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Trusted by Leading Companies</h2>
          <p>Join thousands of businesses that trust our platform</p>
        </motion.div>

        {/* ── Infinite sliding ticker ── */}
        <div className="companies-ticker-outer">
          <div className="companies-ticker-track">
            {items.map((company, index) => (
              <div className="company-card" key={index}>
                <div className="company-logo">{company.logo}</div>
                <p>{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
