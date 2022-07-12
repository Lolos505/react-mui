import React, { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { Grid } from "@mui/material";

function PolarAreaChart() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((apiData) => {
        setDrinks(apiData);
      });
  }, []);

  const data = {
    labels: drinks?.drinks?.map((drink) => drink.strGlass),
    datasets: [
      {
        label: `${drinks?.drinks?.length} Categories`,
        data: drinks?.drinks?.map((drink) => drink.idDrink),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  };

  return (
    <SoftBox>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <SoftTypography sx={{ mb: 3, color: "#58bde5" }}>Polar Area Chart</SoftTypography>
        <PolarArea data={data} />
      </Grid>
    </SoftBox>
  );
}

export default PolarAreaChart;
