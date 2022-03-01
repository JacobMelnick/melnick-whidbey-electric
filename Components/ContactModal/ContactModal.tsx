import React from "react";
import { TextField, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from '@mui/icons-material/Close';

const useStlyes = makeStyles({
  title: {
    top: '50%',
    position: "relative",
    transform: "translateY(-50%)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginTop: "1%",
  },
  exit: {
    position: "absolute",
    top: "0",
    right: "0",
    cursor: "pointer",
  },
  
});

const ContactModal = ({ onRequestClose }) => {

  const classes = useStlyes();

  return (
    <Grid container spacing={1} direction="column">
      <Grid item xs={12}>
      <Typography variant="h4" style={{ textAlign: "center" }} className={classes.title}>
        Contact Form
      </Typography>
      <CloseIcon className={classes.exit} onClick={onRequestClose}></CloseIcon>
      </Grid>
      <TextField
        style={{ padding: 10 }}
        id="outlined-required"
        label="First Name"
        variant="outlined"
        error={false}
        required
      />
      <TextField
        style={{ padding: 10 }}
        id="outlined-required"
        label="Last Name"
        variant="outlined"
        error={false}
        required
      />
      <TextField
        style={{ padding: 10 }}
        id="outlined-required"
        label="Phone"
        variant="outlined"
        error={false}
        required
      />
      <TextField
        style={{ padding: 10 }}
        id="outlined-required"
        label="Address"
        variant="outlined"
        error={false}
        required
      />
    </Grid>
  );
};

export default ContactModal;
