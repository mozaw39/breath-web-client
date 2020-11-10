import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "../Components/SignIn/SignIn";
import SnackBar from "../Components/SnackBar/SnackBar";
import useAuth from "../Services/useAuth";
import { UserContext } from "../UserContext";

export default function SignInPage(){
    const [userInfo, setUserInfo] = useState({username: null, password: null});
    const [errorFlag, setErrorFlag] = useState(false);
    const userContext = useContext(UserContext);
    const res = useAuth(userInfo);
    if(userContext.isLoggedIn)
      return  <Redirect to="/home" />
    return (
        <>
        <SignIn  setUserInfo={setUserInfo} />
        { userContext.error && <SnackBar />  }
        </>
    );
}