import React from "react";
import { motion } from "framer-motion";
import "./CTA.css";

const trustItems = [
  "No credit card needed",
  "Free 30-min session",
  "Cancel anytime",
];

const CTA = () => {
  return (
    <section className="cta-section">

      {/* decorative circles — consistent with other sections */}
      <div className="cta-circle cta-circle--tr" />
      <div className="cta-circle cta-circle--bl" />

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* Badge */}
        <motion.div
          className="cta-badge"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Free Consultation Available
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h2>

        {/* Subtitle — specific benefit, no unverifiable claim */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Grow your business with FinPlexus — expert financial guidance,
          personalised strategies, and zero commitment to start.
        </motion.p>

        {/* Buttons — on-brand white primary + ghost secondary */}
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="cta-btn cta-btn--primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Free Consultation
            <span className="cta-btn-arrow">→</span>
          </motion.button>

          <motion.button
            className="cta-btn cta-btn--secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Schedule Demo
          </motion.button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="cta-trust"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {trustItems.map((item, i) => (
            <div className="cta-trust-item" key={i}>
              <span className="cta-trust-check">✓</span>
              {item}
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default CTA;