import React from "react";
import TabsComponent from "../../Components/TabsComponent/TabsComponent";
import CandidatsTable from "./CandidatsTable";
import UrgenciersTable from "./UrgenciersTable";
import UsersTable from "./UsersTable";
import WithAuthorization from "./withAuthorization";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
const tabLabel = ["Candidats", "Urgenciers", "Users"];
const tabContent = [<CandidatsTable />, <UrgenciersTable />, <UsersTable />];

export default function Dashboard() {
  const classes = useStyles();
  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
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
