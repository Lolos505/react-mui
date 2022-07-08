import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";

const SearchHeader = () => {
  return (
    <SoftBox>
      <Grid container justifyContent="center">
        <SoftTypography variant="h6" sx={{ color: "#58bde5" }}>
          Search for a drink and add it to your favorites
        </SoftTypography>
      </Grid>
    </SoftBox>
  );
};

export default SearchHeader;
