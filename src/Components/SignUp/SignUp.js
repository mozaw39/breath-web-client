import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import MuiPhoneNumber from "material-ui-phone-number";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [subscribedUser, setSubscribedUser] = useState({
    login: "",
    mdp: "",
    nom: "",
    prenom: "",
    numTele: "",
    adresseMail: "",
  });

  return (
    <Container
      style={{ backgroundColor: "white" }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={subscribedUser.prenom}
                onChange={(event) =>
                  setSubscribedUser({
                    ...subscribedUser,
                    prenom: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nom"
                label="Last Name"
                name="nom"
                value={subscribedUser.nom}
                onChange={(event) =>
                  setSubscribedUser({
                    ...subscribedUser,
                    nom: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={subscribedUser.adresseMail}
                onChange={(event) =>
                  setSubscribedUser({
                    ...subscribedUser,
                    adresseMail: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPhoneNumber
                variant="outlined"
                fullWidth
                name="phone"
                label="Phone Number"
                defaultCountry={"ma"}
                value={subscribedUser.numTele}
                onChange={(event) =>
                  setSubscribedUser({
                    ...subscribedUser,
                    numTele: event,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                value={subscribedUser.login}
                onChange={(event) =>
                  setSubscribedUser({
                    ...subscribedUser,
                    login: event.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={subscribedUser.mdp}
                onChange={(event) =>
                  setSubscribedUser({
                    ...subscribedUser,
                    mdp: event.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => props.setUserInfo(subscribedUser)}
          >
            Sign Up
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link to="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}
