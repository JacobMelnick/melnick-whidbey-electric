import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";;

const Layout = ({ children }) => {
  const theme = createTheme({
   
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflow: "hidden" }}>
        <Head>
          <title>
            Melnick Electric | Bringing Power to the Island you Love
          </title>
        </Head>
        <Header />
        {/* SEO */}
        <div style={{ marginTop: 225 }}>{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
