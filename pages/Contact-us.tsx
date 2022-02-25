import react from "react";
import { Grid, Stack, Typography, Card, CardMedia } from "@mui/material";
import Layout from "../Components/Layout/Layout";

type ContactUsProps = {};

const ContactUs = ({}: ContactUsProps): JSX.Element => {
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        direction="column"
        style={{
        
        }}
      >
        <Grid
          container
          spacing={1}
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
              <Typography variant="h1">Contact Us</Typography>
              <Typography variant="h5">Phone: (425) 888-8888</Typography>
              <Typography variant="h5">
                Email: GunnarMelnick@gmail.com
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <Card
              style={{
                height: 400,
                margin: "2%",
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
