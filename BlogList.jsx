import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs, categories } from "../data/blogData";
import "./BlogList.css";

export default function BlogList() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? blogs
    : blogs.filter(b => b.category === active);

  return (
    <div className="bloglist-page">

      {/* ── Hero banner ── */}
      <div className="bloglist-hero">
        <div className="bloglist-hero-inner">
          <span className="bloglist-hero-tag">FinPlexus Insights</span>
          <h1>Financial Knowledge Hub</h1>
          <p>Expert articles on investing, tax planning, and personal finance</p>
        </div>
      </div>

      <div className="bloglist-body">

        {/* ── Category filters ── */}
        <div className="bloglist-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`bl-filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Results count ── */}
        <p className="bloglist-count">{filtered.length} articles found</p>

        {/* ── Grid ── */}
        <motion.div
          className="bloglist-grid"
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              className="bl-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link to={`/blog/${post.slug}`} className="bl-card-link">
                <div className="bl-card-img">
                  <img src={post.image} alt={post.title} />
                  <span className="bl-category">{post.category}</span>
                </div>
                <div className="bl-card-body">
                  <div className="bl-meta">
                    <span>{post.date}</span>
                    {/* <span className="bl-dot">·</span>
                    <span>{post.readTime}</span> */}
                    <span className="bl-dot">·</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="bl-read">Read Article </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
