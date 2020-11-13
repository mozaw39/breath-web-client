import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp";
import usePostQuery from "../Services/usePostQuery";

const URL = "Inscription/candidats";

export default function SignUpPage() {
  const [userInfo, setUserInfo] = useState(null);
  const { isSignedUp, error } = usePostQuery(URL, userInfo);
  if (error) return <div>error</div>;
  return (
    <>
      {isSignedUp ? (
        <Redirect to="/sign-in" />
      ) : (
        <SignUp setUserInfo={setUserInfo} />
      )}
    </>
  );
}
