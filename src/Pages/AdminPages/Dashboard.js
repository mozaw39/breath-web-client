import React from "react";
import TabsComponent from "../../Components/TabsComponent/TabsComponent"
import CandidatsTable from "./CandidatsTable"
import UrgenciersTable from "./UrgenciersTable";
import UsersTable from "./UsersTable";

const tabLabel = ["Candidats", "Urgenciers", "Users"];
const tabContent = [<CandidatsTable/>, <UrgenciersTable/>, <UsersTable/> ];

export default function Dashboard(){
    return (
        <div>
            <TabsComponent tabLabel={tabLabel} tabContent={tabContent} />
        </div>
    );
}