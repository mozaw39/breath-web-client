import React from "react";
import WithAuthorization from "./withAuthorization";
export default function Dashboard(){
    return (
        <div>
            <WithAuthorization>
            Dashboard
            </WithAuthorization>
        </div>
    );
}