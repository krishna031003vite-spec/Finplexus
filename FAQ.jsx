import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@mui/material/Typography";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I get started with your platform?",
    answer: "Simply sign up with your email, verify your account, and you'll have instant access to all features. Our onboarding process takes less than 5 minutes.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use bank-level 256-bit SSL encryption, SOC 2 compliance, ISO 27001 certification, and regular security audits to ensure your data is completely secure.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, bank transfers, and digital wallets. All payments are processed securely through PCI-compliant systems.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! We provide 24/7 customer support via email, chat, and phone. Our average response time is under 2 hours.",
  },
  {
    question: "What is your uptime guarantee?",
    answer: "We guarantee 99.9% uptime with our Service Level Agreement (SLA). We invest in redundant infrastructure across multiple data centers.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* ── Header ── */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
         <Typography
              variant="overline"
              sx={{
                color: "#1a5dd7",
                fontFamily: "'Source Sans 3', seoge UI ,sans-serif",
                fontWeight: 600,
                letterSpacing: "0.2em",
                fontSize: "0.8rem",
                mb: 1,
                display: "block",
              }}
            >
              Support
            </Typography>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-header-line" />
          <p>Everything you need to know about our platform</p>
        </motion.div>

        {/* ── FAQ items ── */}
        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  {/* Number badge */}
                  <span className="faq-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">{faq.question}</span>

                  {/* Chevron — SVG so it's always crisp */}
                  <motion.span
                    className="faq-chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 6l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </button>

                {/* Answer — AnimatePresence for clean mount/unmount */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Support card ── */}
        <motion.div
          className="faq-support"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* decorative dot grid */}
          <div className="faq-support-dots" aria-hidden="true" />

          <div className="faq-support-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <h3>Still have questions?</h3>
          <p>Our support team is available 24/7</p>

          <div className="faq-support-btns">
            <motion.button
              className="faq-support-btn faq-support-btn--primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Support 
            </motion.button>
            <motion.button
              className="faq-support-btn faq-support-btn--ghost"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Docs
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;