import { Button } from "@material-ui/core";
import React from "react";
import { UserContext, UserDispatchContext } from "../../UserContext";
import WithAuthentication from "./WithAuthentication";


function Profile(){
    const dispatchContext = React.useContext(UserDispatchContext);
    const context = React.useContext(UserContext);
    return (
        <>
        <WithAuthentication>
        <div>
            Profile
        </div>
        </WithAuthentication>
        <Button onClick={() => dispatchContext({...context, isLoggedIn: !context.isLoggedIn})}>change the context state</Button>
        </>
    );
}

export default Profile;