import React from "react";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import "./About.css";

const headingWords = ["The", "Future", "of", "Digital", "Finance"];

const trustStats = [
  { icon: <GroupsIcon sx={{ fontSize: 18 }} />, value: "Expert Team", label: "Certified Professionals" },
  { icon: <TrendingUpIcon sx={{ fontSize: 18 }} />, value: "Proven Growth", label: "Data-Driven Strategies" },
  { icon: <VerifiedIcon sx={{ fontSize: 18 }} />, value: "Trusted Partner", label: "Globally Recognised" },
  { icon: <SecurityIcon sx={{ fontSize: 18 }} />, value: "Secure & Clear", label: "Real-Time Reporting" },
];
export default function About() {
  return (
    
    <section id="about" className="about-section">
      

      {/* ── HERO HEADING ── */}
      <div className="about-heading-wrap">
        {headingWords.map((word, i) => (
          <div className="about-word-mask" key={i}>
            <motion.span
              className="about-word"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word === "Digital" || word === "Finance" ? (
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #1a4f9c, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {word}
                </Box>
              ) : (
                word
              )}
            </motion.span>
          </div>
        ))}
      </div>

      {/* ── SUBHEADLINE ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
        className="about-subheadline-wrap"
      >
        <Typography
          className="about-subheadline"
          sx={{ fontFamily: "inherit" }}
        >
          Expert financial guidance, cutting-edge technology, and personalised
          strategies — built for businesses and individuals who demand more from
          their finances.
        </Typography>
      </motion.div>

      {/* ── CTA BUTTONS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 5 }}
        >
          {/* PRIMARY CTA */}
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: "inherit",
              background: "linear-gradient(135deg, #1a4f9c 0%, #2563eb 100%)",
              color: "#fff",
              fontWeight: 700,
              px: 4,
              py: 1.6,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "0.95rem",
              boxShadow: "0 8px 24px rgba(26,79,156,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #153d7a 0%, #1d4ed8 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 14px 32px rgba(26,79,156,0.45)",
              },
              transition: "all 0.25s ease",
            }}
          >
            Get Free Consultation
          </Button>

          {/* SECONDARY CTA */}
          <Button
            variant="outlined"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              fontFamily: "inherit",
              borderColor: "#1a4f9c",
              color: "#1a4f9c",
              fontWeight: 600,
              px: 4,
              py: 1.55,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "0.95rem",
              background: "transparent",
              "&:hover": {
                background: "rgba(26,79,156,0.06)",
                borderColor: "#1a4f9c",
                transform: "translateY(-2px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            Watch Demo
          </Button>
        </Stack>
      </motion.div>

      {/* ── TRUST STATS BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
        className="about-trust-wrap"
      >
        <Paper elevation={0} className="about-trust-bar">
          {trustStats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="about-trust-item">
                <span className="about-trust-icon">{stat.icon}</span>
                <span className="about-trust-value">{stat.value}</span>
                <span className="about-trust-label">{stat.label}</span>
              </div>
              {i < trustStats.length - 1 && (
                <div className="about-trust-divider" />
              )}
            </React.Fragment>
          ))}
        </Paper>
      </motion.div>

      {/* ── DASHBOARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Box className="about-dashboard">
          {/* your existing dashboard JSX here */}
        </Box>
      </motion.div>

    </section>
  );
}