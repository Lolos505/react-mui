import { Card, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";

const FavouritesHeader = () => {
  return (
    <Card>
      <SoftBox sx={{ pl: 3, pr: 3, pt: 3, pb: 3 }}>
        <Grid container justifyContent="center">
          <SoftTypography variant="h4" sx={{ color: "#58bde5" }}>
            My favourite drinks
          </SoftTypography>
        </Grid>
      </SoftBox>
    </Card>
  );
};

export default FavouritesHeader;
