import React from "react";
import { motion } from "framer-motion";
import "./Security.css";

const securityCards = [
  {
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    accent: "#2563eb",
    title: "Bank Level Encryption",
    desc: "256-bit SSL encryption protects every transaction end-to-end.",
    cta: "Learn more",
    pattern: "circles",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    accent: "#92400e",
    title: "Data Privacy",
    desc: "Your data is never sold or shared with any third parties.",
    cta: "Learn more",
    pattern: "lines",
  },
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    accent: "#065f46",
    title: "Secure Storage",
    desc: "ISO 27001 certified data centers with 99.9% guaranteed uptime.",
    cta: "Learn more",
    pattern: "dots",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    accent: "#4c1d95",
    title: "Regular Audits",
    desc: "Quarterly VAPT testing and independent security audits.",
    cta: "Learn more",
    pattern: "circles",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    accent: "#78350f",
    title: "Global Compliance",
    desc: "SOC 2, GDPR, and ISO standards met across all jurisdictions.",
    cta: "Learn more",
    pattern: "lines",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    accent: "#155e75",
    title: "24/7 Monitoring",
    desc: "Round-the-clock threat detection and incident response team.",
    cta: "Learn more",
    pattern: "dots",
  },
];
// SVG patterns
function PatternCircles({ accent }) {
  return (
    <svg className="sec-card-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      {[60, 110, 160, 220].map((r, i) => (
        <circle key={i} cx="260" cy="60" r={r} fill="none" stroke={accent} strokeWidth="1" opacity="0.18" />
      ))}
    </svg>
  );
}

function PatternLines({ accent }) {
  return (
    <svg className="sec-card-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((offset, i) => (
        <line key={i} x1={offset - 60} y1="0" x2={offset + 60} y2="400" stroke={accent} strokeWidth="1.2" opacity="0.13" />
      ))}
    </svg>
  );
}

function PatternDots({ accent }) {
  const dots = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 10; y++) {
      dots.push(<circle key={`${x}-${y}`} cx={x * 38 + 10} cy={y * 42 + 10} r="2.5" fill={accent} opacity="0.16" />);
    }
  }
  return (
    <svg className="sec-card-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      {dots}
    </svg>
  );
}

function CardPattern({ type, accent }) {
  if (type === "circles") return <PatternCircles accent={accent} />;
  if (type === "lines")   return <PatternLines accent={accent} />;
  return <PatternDots accent={accent} />;
}

const allCards = [...securityCards, ...securityCards];

const Security = () => {
  return (
    <section className="security-section">
      <div className="security-container">

        {/* ── Header ── */}
        <motion.div
          className="security-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Committed to Your Security</h2>
          <p>Enterprise-grade protection for your peace of mind</p>
        </motion.div>

        {/* ── Infinite sliding cards ── */}
        <motion.div
          className="sec-cards-outer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="sec-cards-track">
            {allCards.map((card, i) => (
              <div
                className="sec-card"
                key={i}
                style={{ backgroundImage: `url(${card.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center", }}
              >
                {/* Pattern layer */}
                <CardPattern type={card.pattern} accent={card.accent} />

                {/* Glow blob */}
                <div className="sec-card-blob" style={{ background: card.accent }} />

                {/* Bottom overlay */}
                <div className="sec-card-overlay">
                  <span className="sec-card-line" style={{ background: card.accent }} />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="sec-card-cta" style={{ color: card.accent }}>
                    {card.cta} &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Compliance pills ── */}
        {/* <motion.div
          className="security-pills"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {["SOC 2 Compliant", "ISO 27001", "GDPR Compliant", "99.9% SLA", "VAPT Tested", "Internal Audit"].map((pill, i) => (
            <span className="security-pill" key={i}>{pill}</span>
          ))}
        </motion.div> */}

      </div>
    </section>
  );
};

export default Security;
