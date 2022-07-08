import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";

const FavouritesHeader = () => {
  return (
    <SoftBox>
      <Grid container justifyContent="center">
        <SoftTypography variant="h4" sx={{ color: "#58bde5" }}>
          My favourite drinks
        </SoftTypography>
      </Grid>
    </SoftBox>
  );
};

export default FavouritesHeader;
