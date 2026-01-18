import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/cssGrid.css";
import "@/styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import { PortfolioProvider } from "@/contextApi/PortfolioContext";
import ThemeProvider from "@/context/themeContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
    if (typeof window !== "undefined" && id) {
      try {
        ReactGA.initialize(id);
      } catch (e) {
        console.warn("ReactGA initialization failed:", e);
      }
    }
  }, []);

  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PortfolioProvider>
  );
}
