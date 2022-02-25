import * as React from "react";
import Layout from "../Components/Layout/Layout";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
  },
  homeImage: {
    display: "flex",
    position: "relative",
    width: "100vw",
    height: 400,
    backgroundImage: "url(/Images/HomePhoto.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid className={classes.homeImage}></Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
