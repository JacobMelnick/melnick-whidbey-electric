import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const Layout = ({ children }) => {
  const theme = createTheme({});

  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Melnick Electric | Bringing Power to the Island you Love</title>
      </Head>
      <Header />
      <ThemeProvider theme={theme}>
        {/* SEO */}
        <CssBaseline />
        <div style={{ marginTop: 225 }}>{children}</div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
