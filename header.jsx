import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { AccountBalance } from "@mui/icons-material";
import "./header.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import ContactsDashboard from "./ContactsDashboard";
import {AppBar,Toolbar} from "@mui/material";

const MotionButton = motion.create(Button);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(
    sessionStorage.getItem("isAdmin") === "true"
  );

  const navigate = useNavigate();

const goToSection = (id) => {
  navigate(`/#${id}`);
};

  // Still supports F9 for power users
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "F9") {
        setShowAdmin(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);


//   useEffect(() => {
//   setScrolled(false);
//   const onScroll = () => setScrolled(window.scrollY > 60);
//   window.addEventListener("scroll", onScroll, { passive: true });
//   return () => window.removeEventListener("scroll", onScroll);
// }, []);


  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleLogin = () => {
    sessionStorage.setItem("isAdmin", "true");
    setIsAdmin(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
    setShowAdmin(false);
  };

  const closeMenu = () => setMenuOpen(false);

  // Modal Portal Logic
  const modal = (
    <AnimatePresence>
      {showAdmin && (
        <motion.div
          className="admin-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAdmin(false)}
        >
          <motion.div
            className={`admin-modal-box ${isAdmin ? "wide" : ""}`}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="admin-modal-close" onClick={() => setShowAdmin(false)}>✕</button>
            {isAdmin ? (
              <ContactsDashboard onLogout={handleLogout} onClose={() => setShowAdmin(false)} />
            ) : (
              <AdminLogin onLogin={handleLogin} onClose={() => setShowAdmin(false)} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        className="header"
        style={{ position: "fixed" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div className="logo" variants={logoVariants} initial="hidden" animate="visible">
          <Typography
            component={Link}
            to="/"
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            <AccountBalance fontSize="medium" />
            FinPlexus
          </Typography>
        </motion.div>

       <nav className={menuOpen ? "nav open" : "nav"}>
  <ul>
    <li>
      <MotionButton
        onClick={() => goToSection("home")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Home
      </MotionButton>
    </li>

    <li>
      <MotionButton
        onClick={() => goToSection("services")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Services
      </MotionButton>
    </li>

    <li>
      <MotionButton
        component={Link}
        to="/blog"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => goToSection("blog")}
      >
        Blog
      </MotionButton>
    </li>

    <li>
      <MotionButton
        onClick={() => goToSection("contact")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </MotionButton>
    </li>

    <li>
      <MotionButton
        className="admin-btn-nav"
        variant="contained"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setShowAdmin(true);
        }}
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff !important",
          ml: 1,
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#000000",
            color: "#ffffff",
          },
        }}
      >
        Admin
      </MotionButton>
    </li>
  </ul>
</nav>

        <motion.button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </motion.button>
      </motion.header>

      {ReactDOM.createPortal(modal, document.body)}
    </>
  );
}

export default Header;