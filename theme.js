import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1a3a5c" },
    secondary: { main: "#c9a84c" },
    background: { default: "#f0f4f8" },
  },
  typography: {
    fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
    h1: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 700, letterSpacing: "-0.03em" },
    h2: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 700 },
    h6: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 600 },
    body1: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", lineHeight: 1.7 },
    body2: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", lineHeight: 1.6 },
    subtitle1: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" },
    subtitle2: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 600 },
    button: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", fontWeight: 600 },
    caption: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" },
    overline: { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", letterSpacing: "0.15em" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *, *::before, *::after {
          font-family: 'Source Sans 3', 'Segoe UI', sans-serif;
          box-sizing: border-box;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Source Sans 3', 'Segoe UI', sans-serif;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "50px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 24px 48px rgba(26,58,92,0.25)",
          },
        },
      },
    },
  },
});

export default theme;