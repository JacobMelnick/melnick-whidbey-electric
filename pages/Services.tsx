import react from "react";
import { Grid, Stack, Typography, Card } from "@mui/material";
import Layout from "../Components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    padding: '3%'
  }
})

type ServicesProps = {};

const Services = ({}: ServicesProps): JSX.Element => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid
        container
        spacing={3}
        xs={12}
        justifyContent="center"
        alignItems="flex-start"
        style={{ paddingBottom: "5%", paddingTop: "3%" }}
      >
        <Grid item xs={12} md={6} lg={4} container spacing={2}>
        <Card className={classes.card}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{ fontWeight: 550, textAlign: "center", marginBottom: "2%" }}
            >
              Home Renovations
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{
                fontWeight: 300,
                textAlign: "center",
                fontSize: 18,
                padding: "0px 20px",
              }}
            >
              Since 2009, we’ve completed over 350 jobs for various local
              businesses, family homes and more. Our painters have more than 30
              years of experience will all types of products and finishes and
              are dedicated to bringing you a quality paint job, inside and out.
            </Typography>
          </Grid>
        </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4} container spacing={2}>
        <Card className={classes.card}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{ fontWeight: 550, textAlign: "center", marginBottom: "2%" }}
            >
              New Construction
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{
                fontWeight: 300,
                textAlign: "center",
                fontSize: 18,
                padding: "0px 20px",
              }}
            >
              Since 2009, we’ve completed over 350 jobs for various local
              businesses, family homes and more. Our painters have more than 30
              years of experience will all types of products and finishes and
              are dedicated to bringing you a quality paint job, inside and out.
            </Typography>
          </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4} container spacing={2}>
        <Card className={classes.card}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{ fontWeight: 550, textAlign: "center", marginBottom: "2%" }}
            >
              Septic Work
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{
                fontWeight: 300,
                textAlign: "center",
                fontSize: 18,
                padding: "0px 20px",
              }}
            >
              Since 2009, we’ve completed over 350 jobs for various local
              businesses, family homes and more. Our painters have more than 30
              years of experience will all types of products and finishes and
              are dedicated to bringing you a quality paint job, inside and out.
            </Typography>
          </Grid>
        </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;
