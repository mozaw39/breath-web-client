import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";
import "fontsource-roboto";
import InfoIcon from "@material-ui/icons/Info";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import React from "react";
import { UserContext, UserDispatchContext } from "../../Context/UserContext";
import WithAuthentication from "./WithAuthentication";
import image from "../../assets/placeholder.jpg";
import { PhotoCamera } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  imageProfile: {
    // paddingTop: "81.25%",
    borderRadius: "20",
    // margin: "28px",
    height: "250px",
    width: "250px",
  },
  title: {
    fontWeight: 600,
  },
}));
const InfosIcons = {
  nom: <InfoIcon color="secondary" />,
  prenom: <InfoIcon color="secondary" />,
  adresseMail: <ContactMailIcon color="secondary" />,
  numTele: <ContactPhoneIcon color="secondary" />,
  login: <PermContactCalendarIcon color="secondary" />,
};

const infosTitle = {
  nom: "Nom",
  prenom: "Prenom",
  adresseMail: "Adresse Mail",
  numTele: "Numéro Téléphone",
  login: "Login",
};

function Profile() {
  const classes = useStyles();
  const dispatchContext = React.useContext(UserDispatchContext);
  const context = React.useContext(UserContext);
  const userInfo = context.user;
  const title = Object.keys(infosTitle);
  // console.log(userInfo[title[0]]);

  return (
    <>
      <WithAuthentication>
        <Box width="50%">
          <Paper elevation={4} className={classes.paper}>
            <Grid container spacing={6} className={classes.root}>
              <Grid item xs={12}>
                {/* <Typography>Image Profile</Typography>
              <Avatar>I</Avatar> */}
                <CardMedia
                  className={classes.imageProfile}
                  component="img"
                  // alt="Contemplative Reptile"
                  // height="140"
                  image={image}
                  // title="Contemplative Reptile"
                />
                <input
                  accept="image/*"
                  hidden
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                <Divider />
              </Grid>
              {title.map((value) => (
                <>
                  {console.log(infosTitle[value])}
                  <Grid item xs={6}>
                    <ListItem>
                      <ListItemAvatar>{InfosIcons[value]}</ListItemAvatar>
                      <Typography
                        className={classes.title}
                        variant="h6"
                        component="h2"
                      >
                        {infosTitle[value]}:
                      </Typography>
                    </ListItem>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="h2">
                      {userInfo[value]}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Grid>
          </Paper>
        </Box>
      </WithAuthentication>
    </>
  );
}

export default Profile;
