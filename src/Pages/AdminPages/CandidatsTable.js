import React from "react";
import DataTable from "../../Components/DataTable/DataTable";
import useQuery from "../../Services/useQuery";

const columns = [
  { id: "nom", label: "Nom", minWidth: 170 },
  { id: "prenom", label: "Prenom", minWidth: 170 },
  {
    id: "adresseMail",
    label: "Adresse Mail",
    minWidth: 170,
    align: "right",
    //   format: (value) =>  value.toLocaleString("en-US"),
  },
  {
    id: "numTele",
    label: "Numéro Téléphone",
    minWidth: 170,
    align: "right",
    //   format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "login",
    label: "Login",
    minWidth: 170,
    align: "right",
    //   format: (value) => value.toLocaleString("en-US"),
  },
];
const URL = "authenticated/candidats";

export default function CandidatsTable() {
  const { data, error } = useQuery(URL);
  if (error) return;
  if (data) return <DataTable rows={data} columns={columns} />;
  return <div>nothing</div>;
}
