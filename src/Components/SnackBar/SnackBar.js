import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext, UserDispatchContext } from "../../Context/UserContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackBar(props) {
  const classes = useStyles();
  const userContext = useContext(UserContext);
  const userDispatchContext = useContext(UserDispatchContext);

  const handleClick = () => {
    userDispatchContext({ ...userContext, error: true });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    userDispatchContext({ ...userContext, error: false });
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={userContext.error}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
