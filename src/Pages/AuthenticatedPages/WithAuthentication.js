import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { UserDispatchContext, UserContext } from "../../Context/UserContext";

export default function WithAuthentication({ children }) {
  const context = useContext(UserContext);
  const dispatchContext = useContext(UserDispatchContext);
  return <>{context.isLoggedIn && children}</>;
}
