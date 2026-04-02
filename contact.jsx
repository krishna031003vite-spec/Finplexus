import React, { useState, useEffect } from "react";
import "./contact.css";
import { motion, AnimatePresence } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

function Contact() {
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const validate = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = "Full name is required.";
    if (!formData.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) {
      e.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setShowPopup(true);
        setFormData({ firstName: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Cannot connect to server. Make sure Django is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    // <section id="contact" className="contact">
    //   {/* Section header */}
    //   <motion.div
    //     className="contact-header"
    //     variants={sectionVariants}
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, amount: 0.3 }}
    //   >
    //     <span className="contact-overline">Get in touch</span>
    //     <h2>Contact Us</h2>
    //     {/* <p className="contact-subtitle">We reply within 24 hours on business days.</p> */}
    //   </motion.div>

    //   {/* Top chips */}
    //   {/* <motion.div
    //     className="contact-info-row"
    //     initial={{ opacity: 0, y: 12 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, delay: 0.15 }}
    //     viewport={{ once: true }}
    //   >
    //     <div className="contact-chip">
    //       <EmailIcon sx={{ fontSize: 16 }} />
    //       info@chakradialoguesfoundation.com
    //     </div>
    //     <div className="contact-chip">
    //       <PhoneIcon sx={{ fontSize: 16 }} />
    //       +91-9773940345
    //     </div>
    //     <div className="contact-chip">
    //       <AccessTimeIcon sx={{ fontSize: 16 }} />
    //       Mon – Sat, 10am – 7pm IST
    //     </div>
    //   </motion.div> */}

    //   <div className="contact-wrapper">
    //     {/* LEFT: FORM */}
    //     <motion.form
    //       className="contact-form"
    //       variants={formVariants}
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       onSubmit={handleSubmit}
    //       noValidate
    //     >
    //       <div className="field-row">
    //         <div className="field-group">
    //           <label className="field-label">Full Name</label>
    //           <input
    //             type="text"
    //             name="firstName"
    //             placeholder="Your full name"
    //             value={formData.firstName}
    //             onChange={handleChange}
    //             className={errors.firstName ? "input-error" : ""}
    //           />
    //           {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
    //         </div>

    //         <div className="field-group">
    //           <label className="field-label">Email</label>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="you@example.com"
    //             value={formData.email}
    //             onChange={handleChange}
    //             className={errors.email ? "input-error" : ""}
    //           />
    //           {errors.email && <span className="error-msg">{errors.email}</span>}
    //         </div>
    //       </div>

    //       {/* <div className="field-group">
    //         <label className="field-label">Phone Number</label>
    //         <input
    //           type="text"
    //           name="phone"
    //           placeholder="+91 XXXXX XXXXX"
    //           value={formData.phone}
    //           onChange={handleChange}
    //         />
    //       </div> */}

    //       <div className="field-group">
    //         <label className="field-label">Message</label>
    //         <textarea
    //           name="message"
    //           placeholder="Write your message here..."
    //           value={formData.message}
    //           onChange={handleChange}
    //           className={errors.message ? "input-error" : ""}
    //           rows={6}
    //         />
    //         {errors.message && <span className="error-msg">{errors.message}</span>}
    //       </div>

    //       <button type="submit" className="contact-submit" disabled={isSubmitting}>
    //         {isSubmitting ? "Sending…" : "Send Message"}
    //       </button>
    //     </motion.form>

    //     {/* RIGHT: CONTACT INFO */}
    //     {/* RIGHT: CONTACT INFO */}
    //     <motion.div
    //       className="contact-info"
    //       initial={{ opacity: 0, x: 24 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.7, delay: 0.3 }}
    //       viewport={{ once: true }}
    //     >
    //       <p className="contact-info-heading">Contact Information</p>

    //       <div className="info-item">
    //         <div className="info-icon-box">
    //           <LocationOnOutlinedIcon sx={{ fontSize: 22, color: "#6366f1" }} />
    //         </div>
    //         <div className="info-content">
    //           <h4>Address</h4>
    //           <p>B-13, Plot No. 5A, Sector 3, Vishrantika Apartment,<br />N.S.I.T. Dwarka, New Delhi, Delhi-110078</p>
    //         </div>
    //       </div>

    //       <div className="info-divider" />

    //       <div className="info-item">
    //         <div className="info-icon-box">
    //           <EmailOutlinedIcon sx={{ fontSize: 22, color: "#6366f1" }} />
    //         </div>
    //         <div className="info-content">
    //           <h4>Email</h4>
    //           <a href="mailto:hello@finplexus.com">hello@finplexus.com</a>
    //         </div>
    //       </div>

    //       <div className="info-divider" />

    //       <div className="info-item">
    //         <div className="info-icon-box">
    //           <PhoneOutlinedIcon sx={{ fontSize: 22, color: "#6366f1" }} />
    //         </div>
    //         <div className="info-content">
    //           <h4>Phone</h4>
    //           <a href="tel:+919773940345">+91-9773940345</a>
    //         </div>
    //       </div>

    //       {/* Optional: embed a Google Map */}
    //       <div className="contact-map">
    //         <iframe
    //           title="Office Location"
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.05!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzEyLjAiTiA3N8KwMDMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
    //           allowFullScreen=""
    //           loading="lazy"
    //         />
    //       </div>

    //     </motion.div>
    //   </div>

    //   {/* Success popup */}
    //   <AnimatePresence>
    //     {showPopup && (
    //       <motion.div
    //         className="popup-overlay"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         onClick={() => setShowPopup(false)}
    //       >
    //         <motion.div
    //           className="popup-box"
    //           initial={{ opacity: 0, scale: 0.85, y: 24 }}
    //           animate={{ opacity: 1, scale: 1, y: 0 }}
    //           exit={{ opacity: 0, scale: 0.85, y: 24 }}
    //           transition={{ duration: 0.32, ease: "easeOut" }}
    //           onClick={(e) => e.stopPropagation()}
    //         >
    //           <div className="popup-check">
    //             <CheckCircleIcon sx={{ fontSize: 32, color: "#fff" }} />
    //           </div>
    //           <h3>Message Sent!</h3>
    //           <p>We've received your message and will get back to you within 24 hours.</p>
    //         </motion.div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </section>
  <section id="contact" className="contact">

    {/* ── Section header ── */}
    <motion.div
      className="contact-header"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
                    Get in touch
                  </Typography>
      <h2>Contact Us</h2>
    </motion.div>

    <div className="contact-wrapper">

      {/* ── LEFT: Form ── */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <p className="contact-info-heading">Contact Information</p>
        <p className="contact-info-sub">Reach us through any of the channels below.</p>
        <div className="info-divider" />

        <div className="info-item">
          <div className="info-icon-box">
            <LocationOnOutlinedIcon sx={{ fontSize: 22, color: "#6366f1" }} />
          </div>
          <div className="info-content">
            <h4>Address</h4>
            <p>B-13, Plot No. 5A, Sector 3, Vishrantika Apartment,<br />N.S.I.T. Dwarka, New Delhi, Delhi-110078</p>
          </div>
        </div>

        <div className="info-divider" />

        <div className="info-item">
          <div className="info-icon-box">
            <EmailOutlinedIcon sx={{ fontSize: 22, color: "#6366f1" }} />
          </div>
          <div className="info-content">
            <h4>Email</h4>
            <a href="mailto:hello@finplexus.com">hello@finplexus.com</a>
          </div>
        </div>

        <div className="info-divider" />

        <div className="info-item" style={{ marginBottom: 0 }}>
          <div className="info-icon-box">
            <PhoneOutlinedIcon sx={{ fontSize: 22, color: "#6366f1" }} />
          </div>
          <div className="info-content">
            <h4>Phone</h4>
            <a href="tel:+919773940345">+91-9773940345</a>
          </div>
        </div>

        {/* Map fills remaining space */}
        <div className="contact-map">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.05!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzEyLjAiTiA3N8KwMDMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* ── RIGHT: Info card ── */}
            <motion.form
        className="contact-form"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <p className="form-heading">Send us a message</p>
        <p className="form-subheading">Fill in the form and we'll get back to you within 24 hours.</p>
        <div className="form-divider" />

        {/* Name + Email row */}
        <div className="field-row">
          <div className="field-group" style={{ marginBottom: 0 }}>
            <label className="field-label">Full Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your full name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
          </div>
          <div className="field-group" style={{ marginBottom: 0 }}>
            <label className="field-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
        </div>

        {/* Message — grows to fill */}
        <div className="textarea-group">
          <label className="field-label">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="contact-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send Message "}
        </button>
      </motion.form>
    </div>

    {/* ── Success popup ── */}
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            className="popup-box"
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 24 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-check">
              <CheckCircleIcon sx={{ fontSize: 32, color: "#fff" }} />
            </div>
            <h3>Message Sent!</h3>
            <p>We've received your message and will get back to you within 24 hours.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>

  );
}

export default Contact;