import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp";
import SnackBar from "../Components/SnackBar/SnackBar";
import usePostQuery from "../Services/usePostQuery";

const URL = "Inscription/";

export default function SignUpPage(props) {
  const [userInfo, setUserInfo] = useState(null);
  const { isSignedUp, error } = usePostQuery(URL + props.url, userInfo);
  return (
    <>
      {isSignedUp ? (
        <Redirect to={props.redirectionUrl} />
      ) : (
        <>
          <SignUp setUserInfo={setUserInfo} />
          {error && <SnackBar message="user already exists" />}
        </>
      )}
    </>
  );
}
