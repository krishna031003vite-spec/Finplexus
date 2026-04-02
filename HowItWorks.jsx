import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  {
    step: "01",
    title: "Get Started",
    description: "Sign up in seconds and connect your financial account with ease.",
    color: "#dbeafe",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Explore Features",
    description: "Discover powerful financial tools designed for your success.",
    color: "#dcfce7",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Optimize",
    description: "Fine-tune your portfolio settings to match your unique needs.",
    color: "#ede9fe",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"/>
        <path d="M18 20V4"/>
        <path d="M6 20v-4"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Grow",
    description: "Scale your investments with our advanced financial solutions.",
    color: "#fef9c3",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">

        <motion.div
          className="how-it-works-header"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>How It Works</h2>
          <p>Four simple steps to transform your financial future</p>
        </motion.div>

        <motion.div
          className="steps-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="flip-card"
              variants={itemVariants}
            >
              {/* ── FRONT — pure CSS handles hover ── */}
              <div className="card-face card-front">
                <div className="card-step">{item.step}</div>
                <div className="card-icon-wrap" style={{ background: item.color }}>
                  <span className="card-icon">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <button className="card-btn">Learn more</button>
              </div>

              {/* ── BACK ── */}
              <div className="card-face card-back">
                <div className="card-icon-wrap" style={{ background: item.color }}>
                  <span className="card-icon">{item.icon}</span>
                </div>
                <p>{item.description}</p>
                <button className="card-btn">Learn more</button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
