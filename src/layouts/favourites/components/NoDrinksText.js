import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";

const NoDrinksText = () => {
  return (
    <SoftBox>
      <Grid container justifyContent="center">
        <SoftTypography variant="h4" sx={{ color: "#58bde5" }}>
          There are no drinks inside your favourites list, add some!
        </SoftTypography>
      </Grid>
    </SoftBox>
  );
};

export default NoDrinksText;
