import React, { useState } from "react";
import MaterialTable from "material-table";
import SoftAvatar from "components/SoftAvatar";
import SoftBox from "components/SoftBox";
import data from "../data/data.json";
import { Button } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function MuiTable() {
  const [tableData] = useState(data);

  const columns = [
    {
      field: "strDrinkThumb",
      filtering: false,
      render: (data) => <SoftAvatar sx={{ height: 60, width: 60 }} src={data.strDrinkThumb} />,
    },
    {
      title: "ID",
      field: "idDrink",
      filtering: false,
    },
    {
      title: "Name",
      field: "strDrink",
      filterPlaceholder: "Filter by name",
    },
    { title: "Category", field: "strCategory", filterPlaceholder: "Filter by category" },
    { title: "Glass", field: "strGlass", filterPlaceholder: "Filter by glass" },
    {
      title: "Instructions",
      field: "strInstructions",
      filtering: false,
      cellStyle: { fontSize: "small" },
    },
    {
      title: "Ingredients",
      field: "strIngredient1",
      filtering: false,
    },
  ];

  return (
    <SoftBox>
      <MaterialTable
        options={{
          filtering: true,
          pageSizeOptions: [5, 10, 20],
          pageSize: 20,
          actionsColumnIndex: -1,
          columnsButton: true,
          cellStyle: { fontSize: "medium" },
        }}
        actions={[
          {
            icon: () => <Button variant="text">Add</Button>,
            tooltip: "Add drink to favourites",
            onClick: (e, data) => console.log(data),
          },
        ]}
        columns={columns}
        data={tableData}
        title="Drinks Table"
      />
    </SoftBox>
  );
}

export default MuiTable;
