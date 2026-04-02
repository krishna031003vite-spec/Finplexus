import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import StoryBlock from "./StoryBlock";
import "./story.css";

function Story() {
  const storyData = [
    {
      title: "Our Beginning",
      description:
        "Founded with a vision to revolutionize financial services, FinPlexus started as a small team with big dreams. We believed that everyone deserves access to expert financial guidance.",
    },
    {
      title: "Rapid Growth",
      description:
        "Over the years, we expanded our services and built a team of seasoned professionals. Our commitment to innovation and excellence helped us serve thousands of satisfied clients globally.",
    },
    {
      title: "Leading the Future",
      description:
        "Today, FinPlexus stands as a trusted partner in financial solutions. We continue to innovate and adapt to meet the evolving needs of our clients with cutting-edge technology and expertise.",
    },
  ];

  // Ref for the entire section — scroll tracked relative to this
  const sectionRef = useRef(null);

  // useScroll tracks scroll progress while section is in viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "end 50%"], // start when top of section hits 90% of viewport
  });

  // Smooth spring wrapper for buttery scrubbing feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Timeline line grows from 0% to 100% as you scroll through the section
  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Title fades + rises as section enters
  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.15], [-40, 0]);

  return (
    <section id="story" className="story-section" ref={sectionRef}>
      {/* Interactive Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79, 124, 255, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Floating Particles */}
      {[
        { top: "15%", left: "10%", size: 14, color: "rgba(79, 124, 255, 0.6)", delay: 0 },
        { top: "75%", left: "85%", size: 10, color: "rgba(201, 168, 76, 0.6)", delay: 1.5 },
        { top: "45%", left: "90%", size: 16, color: "rgba(79, 124, 255, 0.6)", delay: 3 },
        { top: "85%", left: "15%", size: 12, color: "rgba(201, 168, 76, 0.6)", delay: 2 },
        { top: "30%", left: "80%", size: 10, color: "rgba(79, 124, 255, 0.6)", delay: 4 },
        { top: "60%", left: "5%", size: 14, color: "rgba(201, 168, 76, 0.6)", delay: 0.5 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: particle.color,
            boxShadow: `0 0 15px ${particle.color}`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Title scrubs in during first 15% of scroll and pulsates */}
      <motion.h2
        className="story-title"
        style={{ opacity: titleOpacity, y: titleY, zIndex: 2, position: "relative" }}
        animate={{
          textShadow: [
            "0px 0px 0px rgba(79,124,255,0)",
            "0px 5px 20px rgba(79,124,255,0.45)",
            "0px 0px 0px rgba(79,124,255,0)",
          ]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Our Story
      </motion.h2>

      <div className="story-timeline-container" style={{ zIndex: 2, position: "relative" }}>
        {/* Timeline line height scrubs with scroll progress */}
        <motion.div
          className="timeline-center-line"
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
        />

        {storyData.map((item, index) => (
          <div
            key={index}
            className={`story-item ${index % 2 === 0 ? "left-side" : "right-side"}`}
          >
            <StoryBlock
              index={index + 1}
              title={item.title}
              description={item.description}
              direction={index % 2 === 0 ? "left" : "right"}
              scrollProgress={smoothProgress}
              // Each block occupies a band of the scroll range
              rangeStart={0.08 + index * 0.2}
              rangeEnd={0.25 + index * 0.2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;