import React from "react";
import DataTable from "../Components/DataTable/DataTable";
import useQuery from "../Services/useQuery";

const columns = [
  { id: "ville", label: "Ville", minWidth: 170 },
  { id: "formateur", label: "Formateur", minWidth: 170 },
  {
    id: "dateDebut",
    label: "Date Debut",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dateFin",
    label: "date Fin",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
];

const URL = "formations";

export default function Formations() {
  const { data, error } = useQuery(URL);
  if (error) return;
  if (data)
    return (
      <div>
        <DataTable rows={data} columns={columns} />
      </div>
    );
  return <div>nothing</div>;
}
