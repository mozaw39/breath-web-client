import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function DataRow({ row, columns }) {
  console.log("datarow");
  console.log(row);
  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number"
                ? column.format(value)
                : value}
            </TableCell>
          );
        })}
      </TableRow>
    </>
  );
}
