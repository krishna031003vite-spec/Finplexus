import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogData";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogs.find(b => b.slug === slug);
  const [activeSection, setActiveSection] = useState("");

  // Related posts — same category, exclude current
  const related = blogs
    .filter(b => b.slug !== slug && b.category === post?.category)
    .slice(0, 2);

  // Highlight active TOC item on scroll
  useEffect(() => {
    if (!post) return;
    const handleScroll = () => {
      const sections = post.tableOfContents.map(t => document.getElementById(t.id));
      let current = "";
      sections.forEach(sec => {
        if (sec && sec.getBoundingClientRect().top < 140) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  if (!post) return (
    <div className="bp-notfound">
      <h2>Article not found</h2>
      <button onClick={() => navigate("/blog")}>← Back to Blog</button>
    </div>
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="bp-page">

      {/* ── Breadcrumb ── */}
      <div className="bp-breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/blog">Blog</Link>
        <span>›</span>
        <span>{post.category}</span>
        <span>›</span>
        <span className="bp-crumb-current">{post.title}</span>
      </div>

      <div className="bp-layout">

        {/* ══════════════════════
            LEFT — Sticky TOC
        ══════════════════════ */}
        <aside className="bp-toc">
          <div className="bp-toc-inner">
            <div className="bp-toc-label">Table of Contents</div>
            <nav>
              {post.tableOfContents.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`bp-toc-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Share box inside TOC */}
            <div className="bp-toc-share">
              <div className="bp-toc-share-label">Share this article</div>
              <button className="bp-share-btn" onClick={handleShare}>
                Share 
              </button>
            </div>
          </div>
        </aside>

        {/* ══════════════════════
            RIGHT — Article content
        ══════════════════════ */}
        <main className="bp-content">

          {/* Category + share row */}
          <div className="bp-top-row">
            <span className="bp-cat-badge">{post.category}</span>
            <button className="bp-share-top" onClick={handleShare}>
              ↗ Share
            </button>
          </div>

          {/* Title */}
          <h1 className="bp-title">{post.title}</h1>

          {/* Meta */}
          <div className="bp-meta">
            {/* <div className="bp-author-dot" /> */}
             <span>By <strong>{post.author}</strong></span> 
             <span className="bp-sep">|</span>
            <span>{post.date}</span>
            <span className="bp-sep">|</span>
            <span>{post.readTime}</span> 
          </div>

          {/* Hero image */}
          <div className="bp-hero-img">
            <img src={post.image} alt={post.title} />
          </div>

          {/* Article sections */}
          <div className="bp-article">
            {post.content.map((section) => (
              <div key={section.id} id={section.id} className="bp-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          {/* ── Related articles ── */}
          {related.length > 0 && (
            <div className="bp-related">
              <h3>Related Articles</h3>
              <div className="bp-related-grid">
                {related.map(r => (
                  <Link key={r.id} to={`/blog/${r.slug}`} className="bp-rel-card">
                    <img src={r.image} alt={r.title} />
                    <div className="bp-rel-body">
                      <span className="bp-rel-cat">{r.category}</span>
                      <h4>{r.title}</h4>
                      <span className="bp-rel-meta">{r.date} · {r.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <Link to="/blog" className="bp-back-btn">← Back to Blog</Link>

        </main>
      </div>
    </div>
  );
}
