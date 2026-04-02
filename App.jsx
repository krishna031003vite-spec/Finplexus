import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Header from "./components/header";
import About from "./components/About";
import Story from "./components/story";
import Services from "./components/services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/contact";
import Footer from "./components/footer";

import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";


// ✅ Scroll handler component
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay ensures DOM is ready
      }
    }
  }, [location]);

  return null;
}


// ── Main landing page ──
function Home() {
  return (
    <>
      {/* ✅ HOME SECTION (important) */}
      <section id="home">
        <About />
      </section>

      <Story />

      <section id="services">
        <Services />
      </section>

      <Features />
      <Testimonials />
      <FAQ />

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>

        <Header />

        {/* ✅ ADD THIS (very important) */}
        <ScrollToSection />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;