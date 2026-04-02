import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Typography from "@mui/material/Typography";

import "./Features.css";

const features = [
  {
    title: "Certified Experts",
    description: "Skilled professionals delivering top-quality solutions",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 36 }} />
  },
  {
    title: "Proven Results",
    description: "Consistent performance backed by real success metrics",
    icon: <TrendingUpIcon sx={{ fontSize: 36 }} />
  },
  {
    title: "Award Winning",
    description: "Recognized excellence across multiple domains",
    icon: <EmojiEventsIcon sx={{ fontSize: 36 }} />
  },
  {
    title: "Transparent Reporting",
    description: "Clear insights and real-time updates always available",
    icon: <AssessmentIcon sx={{ fontSize: 36 }} />
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">

        {/* HEADER */}
        <div className="features-header">
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
            Why choose us
          </Typography>
          <h1>Why Our Clients Believe We’re Different</h1>
        </div>

        {/* MAIN ROW */}
        <div className="features-row">

          {/* LEFT */}
          <div className="features-left">
            <div className="image-grid">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="team"
              />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="work"
              />
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="features-right"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Box
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    mb: 2
                  }}
                >
                  {feature.icon}
                </Box>

                <h3>{feature.title}</h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;