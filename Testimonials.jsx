import React from "react";
import { motion } from "framer-motion";
import { Rating, Box, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      quote: "This platform transformed how we manage our business operations.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder, Innovation Lab",
      quote: "Outstanding service and support. They truly understand our business needs.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Emma Williams",
      role: "Director, Global Solutions",
      quote: "Best investment we made this year. The ROI has been exceptional.",
      rating: 5,
      initials: "EW"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="t-title">What Our Clients Say</Typography>
          <Typography variant="body1" className="t-subtitle">
            Join thousands of satisfied customers worldwide
          </Typography>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Box className="card-top">
                <FormatQuoteIcon className="quote-icon" />
                <Rating value={item.rating} readOnly size="small" />
              </Box>

              <Typography className="quote-text">
                {item.quote}
              </Typography>

              <Box className="author-box">
                <Avatar sx={{ bgcolor: '#2563eb', fontWeight: 'bold' }}>
                  {item.initials}
                </Avatar>
                <Box className="author-info">
                  <Typography className="author-name">{item.name}</Typography>
                  <Typography className="author-role">{item.role}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;