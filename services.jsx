
// import React from "react";
// import "./services.css";
// import { motion } from "framer-motion";

// function Services() {
//   const serviceList = [
//     "Financial Advisory",
//     "Investment Management",
//     "Technology Solutions",
//     "Consulting Services",
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section id="services" className="services">
//       <motion.h2
//         variants={titleVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         Our Services
//       </motion.h2>
//       <p className="services-subtitle">Empowering your financial future with tailored solutions designed for growth and security.</p>
//       <motion.div
//         className="services-grid"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {serviceList.map((service, index) => (
//           <motion.div
//             key={index}
//             className="service-card"
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.08,
//               rotate: 1,
//               boxShadow: "0 20px 40px rgba(210, 237, 111, 0.3)",
//             }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <h3>{service}</h3>
//             <p>We provide top-notch solutions in {service}.</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// export default Services;







// import React from "react";
// import "./services.css";
// import { motion } from "framer-motion";

// function Services() {
//   const serviceList = [
//     "Financial Advisory",
//     "Investment Management",
//     "Technology Solutions",
//     "Consulting Services",
//     "Wealth Planning",
//     "Tax Optimization",
//     "Risk Management",
//     "Market Analysis",
//   ];

//   // Duplicate for seamless infinite loop
//   //const tickerItems = [...serviceList, ...serviceList];

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section id="services" className="services">
//       <motion.h2
//         variants={titleVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         Our Services
//       </motion.h2>
//       <p className="services-subtitle">
//         Empowering your financial future with tailored solutions designed for growth and security.
//       </p>

//       {/* ── Infinite sliding service cards ── */}
//       {/* <div className="services-ticker-outer">
//         <div className="services-ticker-track">
//           {tickerItems.map((service, index) => (
//             <div className="service-card" key={index}>
//               <h3>{service}</h3>
//               <p>We provide top-notch solutions in {service}.</p>
//             </div>
//           ))}
//         </div>
//       </div> */}
//     </section>
//   );
// }

// export default Services;





















// import React from "react";
// import "./services.css";
// import { motion } from "framer-motion";

// function Services() {
//   const serviceList = [
//     "Financial Advisory",
//     "Investment Management",
//     "Technology Solutions",
//     "Consulting Services",
//     "Wealth Planning",
//     "Tax Optimization",
//     "Risk Management",
//     "Market Analysis",
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7 },
//     },
//   };

//   return (
//     <section id="services" className="services">
//       <motion.h2
//         variants={titleVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         Our Services
//       </motion.h2>

//       <p className="services-subtitle">
//         Empowering your financial future with tailored solutions designed for growth and security.
//       </p>

//       {/* ✅ GRID INSTEAD OF TICKER */}
//       <motion.div
//         className="services-grid"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {serviceList.map((service, index) => (
//           <motion.div
//             key={index}
//             className="service-card"
//             variants={itemVariants}
//             whileHover={{ y: -8 }}
//           >
//             <h3>{service}</h3>
//             <p>We provide top-notch solutions in {service}.</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// export default Services;





// import { Box, Container, Typography, Grid, Card, CardContent, Chip } from "@mui/material";
// import { createTheme, ThemeProvider, alpha } from "@mui/material/styles";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import DevicesIcon from "@mui/icons-material/Devices";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import SavingsIcon from "@mui/icons-material/Savings";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import ShieldIcon from "@mui/icons-material/Shield";
// import QueryStatsIcon from "@mui/icons-material/QueryStats";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#1a3a5c" },
//     secondary: { main: "#c9a84c" }, // gold accent
//     background: { default: "#f0f4f8" },
//   },
//   typography: {
//     fontFamily: "'Playfair Display', 'Georgia', serif",
//     h2: {
//       fontFamily: "'Playfair Display', serif",
//       fontWeight: 700,
//       letterSpacing: "-0.02em",
//     },
//     h5: {
//       fontFamily: "'Playfair Display', serif",
//       fontWeight: 700,
//     },
//     body1: {
//       fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
//       lineHeight: 1.7,
//     },
//     subtitle1: {
//       fontFamily: "'Source Sans 3', sans-serif",
//     },
//   },
//   components: {
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
//           "&:hover": {
//             transform: "translateY(-8px)",
//             boxShadow: "0 24px 48px rgba(26,58,92,0.25)",
//           },
//         },
//       },
//     },
//   },
// });

// const services = [
//   {
//     title: "Financial Advisory",
//     desc: "Personalized strategies to grow your wealth and navigate complex financial decisions with confidence.",
//     icon: <AccountBalanceIcon sx={{ fontSize: 36 }} />,
//     tag: "Core",
//     gradient: "linear-gradient(135deg, #1a3a5c 0%, #2d5986 100%)",
//   },
//   {
//     title: "Investment Management",
//     desc: "Data-driven portfolio construction and active management tailored to your risk appetite and goals.",
//     icon: <TrendingUpIcon sx={{ fontSize: 36 }} />,
//     tag: "Popular",
//     gradient: "linear-gradient(135deg, #1e4976 0%, #163658 100%)",
//     featured: true,
//   },
//   {
//     title: "Technology Solutions",
//     desc: "Cutting-edge fintech integrations that modernize your financial infrastructure and operations.",
//     icon: <DevicesIcon sx={{ fontSize: 36 }} />,
//     tag: "New",
//     gradient: "linear-gradient(135deg, #1a3a5c 0%, #0f2940 100%)",
//   },
//   {
//     title: "Consulting Services",
//     desc: "Strategic advisory across mergers, acquisitions, restructuring, and long-term growth planning.",
//     icon: <BusinessCenterIcon sx={{ fontSize: 36 }} />,
//     tag: "Core",
//     gradient: "linear-gradient(135deg, #243d5c 0%, #1a2f47 100%)",
//   },
//   {
//     title: "Wealth Planning",
//     desc: "Holistic estate, retirement, and generational wealth planning to preserve and transfer assets.",
//     icon: <SavingsIcon sx={{ fontSize: 36 }} />,
//     tag: "Core",
//     gradient: "linear-gradient(135deg, #1a3a5c 0%, #2d5986 100%)",
//   },
//   {
//     title: "Tax Optimization",
//     desc: "Smart tax-efficient strategies that minimize liability while keeping you fully compliant.",
//     icon: <CalculateIcon sx={{ fontSize: 36 }} />,
//     tag: "Savings",
//     gradient: "linear-gradient(135deg, #1e4976 0%, #163658 100%)",
//   },
//   {
//     title: "Risk Management",
//     desc: "Comprehensive identification and mitigation of financial, operational, and market-driven risks.",
//     icon: <ShieldIcon sx={{ fontSize: 36 }} />,
//     tag: "Security",
//     gradient: "linear-gradient(135deg, #1a3a5c 0%, #0f2940 100%)",
//   },
//   {
//     title: "Market Analysis",
//     desc: "Real-time intelligence and deep-dive research to keep you ahead of every market movement.",
//     icon: <QueryStatsIcon sx={{ fontSize: 36 }} />,
//     tag: "Insights",
//     gradient: "linear-gradient(135deg, #243d5c 0%, #1a2f47 100%)",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* Load Google Fonts */}
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');`}</style>

//       <Box
//         sx={{
//           py: { xs: 8, md: 12 },
//           background: "linear-gradient(160deg, #eef2f7 0%, #dde6f0 100%)",
//           position: "relative",
//           overflow: "hidden",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: -120,
//             right: -120,
//             width: 400,
//             height: 400,
//             borderRadius: "50%",
//             background: alpha("#1a3a5c", 0.06),
//             pointerEvents: "none",
//           },
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             bottom: -80,
//             left: -80,
//             width: 300,
//             height: 300,
//             borderRadius: "50%",
//             background: alpha("#c9a84c", 0.07),
//             pointerEvents: "none",
//           },
//         }}
//       >
//         <Container maxWidth="xl">
//           {/* Header */}
//           <Box textAlign="center" mb={8}>
//             <Typography
//               variant="overline"
//               sx={{
//                 color: "secondary.main",
//                 fontFamily: "'Source Sans 3', sans-serif",
//                 fontWeight: 600,
//                 letterSpacing: "0.2em",
//                 fontSize: "0.8rem",
//                 mb: 1,
//                 display: "block",
//               }}
//             >
//               What We Offer
//             </Typography>
//             <Typography
//               variant="h2"
//               color="primary"
//               sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mb: 2 }}
//             >
//               Our Services
//             </Typography>
//             <Box
//               sx={{
//                 width: 60,
//                 height: 3,
//                 background: "linear-gradient(90deg, #c9a84c, #e8c97a)",
//                 borderRadius: 2,
//                 mx: "auto",
//                 mb: 3,
//               }}
//             />
//             <Typography
//               variant="subtitle1"
//               color="text.secondary"
//               sx={{ maxWidth: 560, mx: "auto", fontSize: "1.1rem" }}
//             >
//               Empowering your financial future with tailored solutions designed
//               for lasting growth and security.
//             </Typography>
//           </Box>

//           {/* Cards Grid */}
//           <Grid container spacing={3}>
//             {services.map((service, i) => (
//               <Grid item xs={12} sm={6} md={3} key={i}>
//                 <Card
//                   elevation={0}
//                   sx={{
//                     height: "100%",
//                     background: service.gradient,
//                     position: "relative",
//                     overflow: "hidden",
//                     border: service.featured
//                       ? "1px solid rgba(201,168,76,0.6)"
//                       : "1px solid rgba(255,255,255,0.06)",
//                     "&::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: -40,
//                       right: -40,
//                       width: 120,
//                       height: 120,
//                       borderRadius: "50%",
//                       background: "rgba(255,255,255,0.04)",
//                       pointerEvents: "none",
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 3.5, position: "relative", zIndex: 1 }}>
//                     {/* Tag chip */}
//                     <Chip
//                       label={service.tag}
//                       size="small"
//                       sx={{
//                         mb: 2.5,
//                         backgroundColor: service.featured
//                           ? "rgba(201,168,76,0.25)"
//                           : "rgba(255,255,255,0.12)",
//                         color: service.featured ? "#e8c97a" : "rgba(255,255,255,0.7)",
//                         fontFamily: "'Source Sans 3', sans-serif",
//                         fontSize: "0.7rem",
//                         fontWeight: 600,
//                         letterSpacing: "0.08em",
//                         border: service.featured
//                           ? "1px solid rgba(201,168,76,0.4)"
//                           : "1px solid rgba(255,255,255,0.15)",
//                         height: 24,
//                       }}
//                     />

//                     {/* Icon */}
//                     <Box
//                       sx={{
//                         color: service.featured ? "#e8c97a" : "rgba(255,255,255,0.85)",
//                         mb: 2,
//                       }}
//                     >
//                       {service.icon}
//                     </Box>

//                     {/* Title */}
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "#fff",
//                         fontSize: "1.15rem",
//                         mb: 1.5,
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     {/* Divider accent */}
//                     <Box
//                       sx={{
//                         width: 32,
//                         height: 2,
//                         background: service.featured
//                           ? "linear-gradient(90deg, #c9a84c, #e8c97a)"
//                           : "rgba(255,255,255,0.3)",
//                         borderRadius: 1,
//                         mb: 1.5,
//                       }}
//                     />

//                     {/* Description */}
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         color: "rgba(255,255,255,0.72)",
//                         fontSize: "0.88rem",
//                         lineHeight: 1.75,
//                       }}
//                     >
//                       {service.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }



import { Box, Container, Typography, Card, CardContent, Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DevicesIcon from "@mui/icons-material/Devices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SavingsIcon from "@mui/icons-material/Savings";
import CalculateIcon from "@mui/icons-material/Calculate";
import ShieldIcon from "@mui/icons-material/Shield";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
const services = [
  {
    title: "Financial Advisory",
    desc: "Personalized strategies to grow your wealth and navigate complex financial decisions with confidence.",
    icon: <AccountBalanceIcon sx={{ fontSize: 36 }} />,
    tag: "Core",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
  {
    title: "Investment Management",
    desc: "Data-driven portfolio construction and active management tailored to your risk appetite and goals.",
    icon: <TrendingUpIcon sx={{ fontSize: 36 }} />,
    tag: "Popular",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
    featured: true,
  },
  {
    title: "Technology Solutions",
    desc: "Cutting-edge fintech integrations that modernize your financial infrastructure and operations.",
    icon: <DevicesIcon sx={{ fontSize: 36 }} />,
    tag: "New",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
  {
    title: "Consulting Services",
    desc: "Strategic advisory across mergers, acquisitions, restructuring, and long-term growth planning.",
    icon: <BusinessCenterIcon sx={{ fontSize: 36 }} />,
    tag: "Core",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
  {
    title: "Wealth Planning",
    desc: "Holistic estate, retirement, and generational wealth planning to preserve and transfer assets.",
    icon: <SavingsIcon sx={{ fontSize: 36 }} />,
    tag: "Core",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
  {
    title: "Tax Optimization",
    desc: "Smart tax-efficient strategies that minimize liability while keeping you fully compliant.",
    icon: <CalculateIcon sx={{ fontSize: 36 }} />,
    tag: "Savings",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
  {
    title: "Risk Management",
    desc: "Comprehensive identification and mitigation of financial, operational, and market-driven risks.",
    icon: <ShieldIcon sx={{ fontSize: 36 }} />,
    tag: "Security",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
  {
    title: "Market Analysis",
    desc: "Real-time intelligence and deep-dive research to keep you ahead of every market movement.",
    icon: <QueryStatsIcon sx={{ fontSize: 36 }} />,
    tag: "Insights",
    gradient: "linear-gradient(135deg, #1A5DD7 100%)",
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(160deg, #eef2f7 0%, #dde6f0 100%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: alpha("#1a3a5c", 0.06),
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
             background: alpha("#c9a84c", 0.07),
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box textAlign="center" mb={8}>
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
              What We Offer
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mb: 2 }}
            >
              Our Services
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                // background: "linear-gradient(90deg, #c9a84c, #e8c97a)",
                borderRadius: 2,
                mx: "auto",
                mb: 3,
              }}
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ maxWidth: 560, mx: "auto", fontSize: "1.1rem" }}
            >
              Empowering your financial future with tailored solutions designed
              for lasting growth and security.
            </Typography>
          </Box>

          {/* Cards Grid — 4 columns on desktop */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 3 }}>
            {services.map((service, i) => (
              <Box key={i} sx={{ display: "flex" }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    background: service.gradient,
                    position: "relative",
                    overflow: "hidden",
                    border: service.featured
                      ? "1px solid rgba(201,168,76,0.6)"
                      : "1px solid rgba(255,255,255,0.06)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.04)",
                      pointerEvents: "none",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5, position: "relative", zIndex: 1 , height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",textAlign: "left"}}>
                    {/* Tag chip */}
                    <Chip
                      label={service.tag}
                      size="small"
                      sx={{
                        mb: 2.5,
                        backgroundColor: "rgba(255,255,255,0.12)",
                        color:  "rgba(255,255,255,0.7)",
                        fontFamily: "'Source Sans 3',seoge UI, sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        border: service.featured
                          ? "1px solid rgba(201,168,76,0.4)"
                          : "1px solid rgba(255,255,255,0.15)",
                        height: 24,
                      }}
                    />

                    {/* Icon */}
                    <Box
                      sx={{
                        color:  "rgba(255,255,255,0.85)",
                        mb: 2,
                      }}
                    >
                      {service.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontSize: "1.15rem",
                        mb: 1.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Divider accent */}
                    <Box
                      sx={{
                        width: 32,
                        height: 2,
                        background: "rgba(255,255,255,0.3)",
                        borderRadius: 1,
                        mb: 1.5,
                      }}
                    />

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "0.88rem",
                        lineHeight: 1.75,
                      }}
                    >
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
  );
}
