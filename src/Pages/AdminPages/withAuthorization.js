import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { UserDispatchContext } from "../../Context/UserContext";

export default function WithAuthorization({ children }) {
  const context = useContext(UserContext);
  const dispatchContext = useContext(UserDispatchContext);
  return <>{context.user.userType == "ADMIN" && children}</>;
}
