import React from "react";
import TabsComponent from "../../../Components/TabsComponent/TabsComponent";
import WithAuthorization from "./../WithAuthentication";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";
import ProfileInfo from "./ProfileInfo";
import UserFormation from "./UserFormation";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
const tabLabel = ["My Profile", "My Formation"];
const tabContent = [<ProfileInfo />, <UserFormation />];

export default function Profile() {
  const classes = useStyles();
  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "primary",
      className: classes.fab,
      icon: <DeleteIcon />,
      label: "Delete",
    },
  ];
  return (
    <div>
      <WithAuthorization>
        <TabsComponent
          fabs={fabs}
          tabLabel={tabLabel}
          tabContent={tabContent}
        />
      </WithAuthorization>
    </div>
  );
}
