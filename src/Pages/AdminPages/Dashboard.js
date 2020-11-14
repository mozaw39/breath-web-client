import React, { useState } from "react";
import TabsComponent from "../../Components/TabsComponent/TabsComponent";
import CandidatsTable from "./CandidatsTable";
import UrgenciersTable from "./UrgenciersTable";
import UsersTable from "./UsersTable";
import WithAuthorization from "./withAuthorization";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import SimpleModal from "../../Components/Modal/SimpleModal";
import SignUp from "../../Components/SignUp/SignUp";
import SignUpPage from "../SignUpPage";

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
  //Handling the modal Form
  const [open, setOpen] = useState(false);
  const [urlValue, setUrlValue] = useState(null);
  const handleOpen = (url) => {
    console.log(typeof url);
    setUrlValue(url);
    setOpen(true);
  };
  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: (
        <AddIcon
          data-url="candidats"
          onClick={(event) => handleOpen(event.target.dataset.url)}
        />
      ),
      label: "Add",
    },
    {
      color: "primary",
      className: classes.fab,
      icon: (
        <AddIcon
          data-url="urgenciers"
          onClick={(event) => handleOpen(event.target.dataset.url)}
        />
      ),
      label: "Add",
    },
    {
      color: "primary",
      className: classes.fab,
      icon: (
        <AddIcon
          data-url="users"
          onClick={(event) => handleOpen(event.target.dataset.url)}
        />
      ),
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
        <SimpleModal open={open} setOpen={setOpen}>
          <SignUpPage redirectionUrl="/dashboard" url={urlValue} />
        </SimpleModal>
      </WithAuthorization>
    </div>
  );
}
