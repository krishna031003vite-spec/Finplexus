// import React from "react";
// import { motion } from "framer-motion";

// import "./Stats.css";

// const Stats = () => {
//   const stats = [
//     { number: "500K+", label: "Active Users", icon: "👥" },
//     { number: "$50M+", label: "Growth Achieved", icon: "📈" },
//     { number: "99.9%", label: "Uptime", icon: "⚡" },
//     { number: "24/7", label: "Support", icon: "🎯" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="stats-section">
//       <div className="stats-container">
//         <motion.div
//           className="stats-header"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <h2>Trusted By Millions Worldwide</h2>
//           <p>Real numbers, real results, real impact</p>
//         </motion.div>

//         <motion.div
//           className="stats-grid"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="stat-card"
//               variants={itemVariants}
//               whileHover={{ y: -8, scale: 1.05 }}
//             >
//               <div className="stat-icon">{stat.icon}</div>
//               <h3 className="stat-number">{stat.number}</h3>
//               <p className="stat-label">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

















import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "./Stats.css";

// Parses a stat string like "500K+", "$50M+", "99.9%", "24/7"
// Returns { prefix, value, suffix, isStatic }
function parseStat(str) {
  // Static values like "24/7" that can't be animated
  if (/^\d+\/\d+$/.test(str)) return { isStatic: true, display: str };

  const prefix = str.match(/^[^0-9]*/)?.[0] || "";
  const suffix = str.match(/[^0-9.]+$/)?.[0] || "";
  const valueStr = str.replace(prefix, "").replace(new RegExp(suffix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"), "");
  const value = parseFloat(valueStr);
  const isFloat = valueStr.includes(".");
  const decimals = isFloat ? (valueStr.split(".")[1]?.length || 1) : 0;

  return { isStatic: false, prefix, suffix, value, decimals };
}

function useCountUp(target, duration = 2000, decimals = 0, start = false) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [start, target, duration, decimals]);

  return count;
}

function AnimatedStat({ stat }) {
  const parsed = parseStat(stat.number);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(
    parsed.isStatic ? 0 : parsed.value,
    2200,
    parsed.isStatic ? 0 : parsed.decimals,
    inView
  );

  const display = parsed.isStatic
    ? parsed.display
    : `${parsed.prefix}${count.toFixed(parsed.decimals)}${parsed.suffix}`;

  return (
    <h3 className="stat-number" ref={ref}>
      {display}
    </h3>
  );
}

const Stats = () => {
  // const stats = [
  //   { number: "500K+", label: "Active Users" },
  //   { number: "$50M+", label: "Growth Achieved" },
  //   { number: "99.9%", label: "Uptime" },
  //   { number: "24/7", label: "Support" },
  // ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Trusted By Millions Worldwide</h2>
          <p>Real numbers, real results, real impact</p>
        </motion.div>

        {/* <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <AnimatedStat stat={stat} />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Stats;



// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import "./Stats.css";

// const Stats = () => {
//   const stats = [
//     { number: 500000, label: "Active Users", icon: "👥", suffix: "K+" },
//     { number: 50000000, label: "Growth Achieved", icon: "📈", prefix: "$", suffix: "M+" },
//     { number: 99.9, label: "Uptime", icon: "⚡", suffix: "%" },
//     { number: 24, label: "Support", icon: "🎯", suffix: "/7" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="stats-section">
//       <div className="stats-container">
//         <motion.div
//           className="stats-header"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <h2>Trusted By Millions Worldwide</h2>
//           <p>Real numbers, real results, real impact</p>
//         </motion.div>

//         <motion.div
//           className="stats-grid"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="stat-card"
//               variants={itemVariants}
//               whileHover={{ y: -8, scale: 1.05 }}
//             >
//               <div className="stat-icon">{stat.icon}</div>
//               <h3 className="stat-number">
//                 <CountUp
//                   start={0}
//                   end={stat.number}
//                   duration={2.5}
//                   separator=","
//                   prefix={stat.prefix || ""}
//                   suffix={stat.suffix || ""}
//                 />
//               </h3>
//               <p className="stat-label">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Stats;