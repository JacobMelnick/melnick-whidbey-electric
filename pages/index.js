import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactModal from "../Components/ContactModal/ContactModal";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("UtxZhU7UVPjfsQtsU");

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
  },
  homeImage: {
    width: "100%",
    height: 400,
    backgroundImage: "url(/Images/HomePhoto.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  contact: {
    border: "3px solid #2ea3f2",
    maxWidth: "300px",
    maxHeight: "60px",
    minWidth: "200px",
    minHeight: "60px",
    fontSize: 18,
    fontWeight: 240,
    "& .contactButton": {
      overflow: "hidden",
      width: 0,
      color: "#fff",
      transition: "all .5s",
      marginLeft: 10,
    },
    "&:hover": {
      border: 0,
      "& .contactButton": {
        display: "initial",
        color: "#2ea3f2",
        width: "initial",
      },
    },
  },
  imageText: {
    position: "absolute",
    height: "300px",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    fontSize: "30px",
    color: "white",
    alignItems: "center",
    // fontWeight: 600,
  },
  secondPhoto: {
    width: "100%",
    height: 400,
    backgroundImage: "url(/Images/HomePhoto.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginTop: "3%",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
 
  const validateForm = () => {
    if (
      userData.firstName.length > 0 &&
      userData.lastName.length > 0 &&
      userData.email.length > 0 &&
      userData.email.includes("@") &&
      userData.phone.length > 0
    ) {
      setValidate(true);
      sendEmail()
    } else {
      setValidate(false);
    }
  };

  const sendEmail = (e, userData) => {
    // e.preventDefault();
    const data = document.getElementById("contact-form");
       emailjs
        .sendForm(
          "service_il7hgfl",
          "template_3l5zuo2",
          data,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status);
            setValidate(false)
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
   
  };


  const onRequestClose = () => {
    setOpen(false);
  };

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
        <Grid className={classes.homeImage} item>
          <Grid item xs={4} md={9} lg={12}>
            <Typography
              variant="h4"
              style={{
                margin: 2,
              }}
            >
              <div className={classes.imageText}>
                <div
                  style={{
                    padding: 20,
                    backgroundColor: "rgba(000, 0, 0, 0.4)",
                  }}
                >
                  Bringing Power To The Island You Love
                </div>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={5}
          marginTop="3%"
        >
          <Grid item xs={12}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              About Our Company
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={10}>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: 300,
                marginBottom: "3%",
              }}
            >
              In 2019, after years of working as an apprentice and for multiple
              companies, Gunnar Melnick founded Melnick Electric with the goal
              of providing quality electric services for the Whidbey Island
              community and surrounding areas. We provide services ranging from
              installation, maintenance, and repair.
            </Typography>
          </Grid>
        </Grid>
        <Paper className={classes.secondPhoto}></Paper>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={5}
          marginTop="3%"
        >
          <Grid item xs={12}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={10}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontWeight: 300 }}
            >
              Here at Melnick Whidbey Electric, we believe communication with
              our clients is a top priority. We are here to help you with your
              home and one of the best ways to do it is by phone. If you are
              unable to reach us feel free to fill our contact form and we will
              get back to you as soon as possible.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", paddingBottom: "5%" }}
          >
            <Button
              size="large"
              className={classes.contact}
              onClick={() => setOpen(true)}
            >
              Contact Form
              <ArrowForwardIcon className="contactButton"></ArrowForwardIcon>
            </Button>
            <Modal
              style={{
                content: {
                  position: "relative",
                  backgroundColor: "rgba(000, 0, 0, 0)",
                  border: "none",
                },
                overlay: {
                  zIndex: 100,
                  backgroundColor: "rgba(000, 0, 0, 0.4)",
                },
              }}
              ariaHideApp={false}
              isOpen={open}
              onRequestClose={onRequestClose}
              contentLabel="Contact Form"
            >
              <ContactModal
                sendEmail={sendEmail}
                onRequestClose={onRequestClose}
                setUserData={setUserData}
                userData={userData}
                validate={validate}
                validateForm={validateForm}
                setValidate={setValidate}
              />
            </Modal>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
