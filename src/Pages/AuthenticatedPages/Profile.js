import { Button } from "@material-ui/core";
import React from "react";
import { UserContext, UserDispatchContext } from "../../Context/UserContext";
import WithAuthentication from "./WithAuthentication";

function Profile() {
  const dispatchContext = React.useContext(UserDispatchContext);
  const context = React.useContext(UserContext);
  return (
    <>
      <WithAuthentication>
        <div>Profile</div>
      </WithAuthentication>
    </>
  );
}

export default Profile;
