"use client";
import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Roboto } from "next/font/google";
import { useLayoutStore } from "@/store/useLayoutStore";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { mode } = useLayoutStore();

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#1d0a70",
        light: "#9B51E0",
        dark: "#1D1D1D",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#2EC4B6",
        light: "#3DDFD0",
        dark: "#25A79B",
        contrastText: "#ffffff",
      },
      background: {
        default: mode === "light" ? "#F8F9FA" : "#121212",
        paper: mode === "light" ? "#FFFFFF" : "#1D1D1D",
      },
      text: {
        primary: mode === "light" ? "#333333" : "#FFFFFF",
        secondary: mode === "light" ? "#666666" : "#CCCCCC",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
