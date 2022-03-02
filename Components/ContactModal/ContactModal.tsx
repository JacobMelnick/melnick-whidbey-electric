import React, { useState, useEffect } from "react";
import { TextField, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  title: {
    top: "50%",
    position: "relative",
    transform: "translateY(-50%)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    // boxShadow: "0 1px 0 rgb(0 0 0 / 20%)",
    marginTop: "2%",
  },
  exit: {
    position: "absolute",
    top: "0",
    right: "0",
    cursor: "pointer",
  },
});

const ContactModal = ({ onRequestClose, setUserData, userData, sendEmail }) => {
  const classes = useStyles();
  const resetData = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={12} md={9} lg={4} >
        <Typography
          variant="h4"
          style={{ textAlign: "center" }}
          className={classes.title}
        >
          Contact Form
        </Typography>
        <CloseIcon
          className={classes.exit}
          onClick={() => {
            resetData();
            onRequestClose();
          }}
        ></CloseIcon>
      </Grid>
      <form 
        onSubmit={(e) => {
          sendEmail(e, userData);
        }}
        id="contact-form"
        style={{
          width: "100%",
          margin: "auto",
          padding: "2%",
          border: "1px solid black",
          borderRadius: "5px",
          boxShadow: "0 1px 0 rgb(0 0 0 / 10%)",

        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          direction="column"
        >
          <Grid item xs={12} md={9} lg={4}>
            <TextField
              style={{ padding: 10 }}
              id="contact-form"
              value={userData.firstName}
              label="First Name"
              variant="outlined"
              name="firstName"
              error={userData.firstName.length === 0 ?  true : false} 
              helperText={userData.firstName.length === 0 ? 'Please Enter First Name' : ''}
              required
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
            <TextField
              style={{ padding: 10 }}
              id="contact-form"
              label="Last Name"
              variant="outlined"
              value={userData.lastName}
              name="lastName"
              error={userData.lastName.length === 0 ?  true : false} 
              helperText={userData.lastName.length === 0 ? 'Please Enter Last Name' : ''}
              required
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={9} lg={4}>
            <TextField
              style={{ padding: 10 }}
              id="contact-form"
              value={userData.email}
              label="Email"
              variant="outlined"
              name="email"
              error={userData.email.includes('@') ?  false : true}
              helperText={userData.email.includes('@') ? '' : 'Please Enter Valid Email'}
              required
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={9} lg={4}>
            <TextField
              style={{ padding: 10 }}
              id="contact-form"
              label="Phone"
              type='number'
              name="phone"
              variant="outlined"
              value={userData.phone}
              error={userData.phone.length === 0 ?  true : false} 
              helperText={userData.phone.length === 0 ? 'Please Enter Your Phone Number' : ''}
              required
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={9} lg={12}>

        <Button
          variant="contained"
          style={{ marginTop: "5%", display: "block", margin: "auto" }}
          onClick={(e) => {sendEmail(e, userData), resetData()}}
          // type="submit"
          >
          Submit
        </Button>
          </Grid>
      </form>
    </Grid>
  );
};

export default ContactModal;
