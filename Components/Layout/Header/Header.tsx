import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      style={{
        top: 0,
        position: "fixed",
        background: "white",
        zIndex: '1',
        paddingBottom: "2%",
        boxShadow: "0 1px 0 rgb(0 0 0 / 10%)",
        padding: "1%",
      }}
    >
      <Grid item>
        <Image
          src={"/Images/MelnickElectric.jpg"}
          alt="Melnick Electric Logo"
          width={320}
          height={150}
        ></Image>
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={5}>
          <Link href="/">
            <Typography variant="h6">
              <a
                style={{
                  textDecoration: "none",
                  // color: router.pathname === "/" ? "red" : "black",
                  opacity: ".70",
                  fontFamily: "Open Sans",
                }}
              >
                Home
              </a>
            </Typography>
          </Link>
          <Link href="./Services">
            <Typography variant="h6">
              <a
                style={{
                  textDecoration: "none",
                  // color: router.pathname === "/" ? "red" : "black",
                  opacity: ".70",
                  fontFamily: "Open Sans",
                }}
              >
                Our Services
              </a>
            </Typography>
          </Link>
          <Link href="./Contact-us">
            <Typography variant="h6">
              <a
                style={{
                  textDecoration: "none",
                  // color: router.pathname === "/" ? "red" : "black",
                  opacity: ".70",
                  fontFamily: "Open Sans",
                }}
              >
                Contact Us
              </a>
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
