import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "../Components/SignIn/SignIn";
import SnackBar from "../Components/SnackBar/SnackBar";
import useAuth from "../Services/useAuth";
import { UserContext } from "../Context/UserContext";

export default function SignInPage() {
  const [userInfo, setUserInfo] = useState({ username: null, password: null });
  const userContext = useContext(UserContext);
  const error = useAuth(userInfo);
  if (userContext.isLoggedIn) return <Redirect to="/home" />;
  return (
    <>
      <SignIn setUserInfo={setUserInfo} />
      {error && <SnackBar message="username or password is incorrect!" />}
    </>
  );
}
