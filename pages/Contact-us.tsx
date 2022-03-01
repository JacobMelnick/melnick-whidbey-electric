import react from "react";
import { Grid, Stack, Typography, TextField, Paper } from "@mui/material";
import Layout from "../Components/Layout/Layout";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  gunnar: {
    backgroundImage: "url(/Images/Gunnar1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: 300,
  },
});
type ContactUsProps = {};

const ContactUs = ({}: ContactUsProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={1} direction="column">
        <Grid
          container
          spacing={2}
          item
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              style={{
                fontWeight: 600,
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: 48,
                letterSpacing: 3,
                lineHeight: "1.3em",
                marginTop: "3%",
              }}
            >
              CONTACT US
            </Typography>
          </Grid>
          <Grid container item xs={12} md={8} lg={6}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  marginTop: "4%",
                }}
              >
                <LocationOnIcon></LocationOnIcon>
                Address
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
              >
                754 SW 1st Avenue, Oak Harbor, Washington 98277
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  marginTop: "2%",
                }}
              >
                <LocalPhoneIcon style={{ marginRight: "8px" }}></LocalPhoneIcon>
                Phone
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
              >
                (360) 720-4764
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  marginTop: "2%",
                }}
              >
                <EmailIcon style={{ marginRight: "8px" }}></EmailIcon>
                Email
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
              >
                Gunnarmelnick@gmail.com
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} md={8} lg={4}>
            <Paper
              variant="outlined"
              elevation={0}
              className={classes.gunnar}
            ></Paper>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactUs;
