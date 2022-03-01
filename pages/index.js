import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactModal from "../Components/ContactModal/ContactModal";
import Modal from 'react-modal';

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
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const onAfterOpen = () => { 
    console.log('opened');
  };

  const onRequestClose = () => { 
    setOpen(false);
  }



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
              <Button size="large" className={classes.contact}
              onClick={() => setOpen(true)}
              >
                Contact Form
                <ArrowForwardIcon className="contactButton"></ArrowForwardIcon>
              </Button>
              <Modal
               isOpen={open}
               onRequestClose={onRequestClose}
               contentLabel="Example Modal"
              >
                <ContactModal onRequestClose={onRequestClose}/>
              </Modal>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
