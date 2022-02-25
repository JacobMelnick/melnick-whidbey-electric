import react from "react";
import { Grid, Stack, Typography, Card, CardMedia } from "@mui/material";
import Layout from "../Components/Layout/Layout";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type ContactUsProps = {};

const ContactUs = ({}: ContactUsProps): JSX.Element => {
  return (
    <Layout>
      <Grid container spacing={2} direction="column">
        <Grid
          container
          spacing={3}
          item
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={8} lg={6}>
            <Card
              style={{
                width: "100%",
                height: 400,
                paddingLeft: 13,
                paddingRight: 13,
                paddingTop: 13,
                paddingBottom: 13,
                textAlign: "center",
              }}
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
                  <LocalPhoneIcon
                    style={{ marginRight: "8px" }}
                  ></LocalPhoneIcon>
                  Phone
                </Typography>
                <Typography
                  variant="h5"
                  style={{ fontWeight: 200, fontSize: 18, textAlign: "center" }}
                >
                  (360) 929-6994
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
                  Melnick90@comcast.net
                </Typography>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <Card
              style={{
                width: "100%",
                height: 400,
                paddingLeft: 13,
                paddingRight: 13,
                paddingTop: 13,
                paddingBottom: 13,
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                image="/Images/MelnickElectric.jpg"
                title="Melnick Electric Logo"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactUs;
