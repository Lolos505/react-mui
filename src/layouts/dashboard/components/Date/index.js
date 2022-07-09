import { Card, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";
import { format } from "date-fns";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const TodaysDate = () => {
  return (
    <Card>
      <SoftBox sx={{ pl: 3, pr: 3, pt: 3, pb: 3 }}>
        <Grid container justifyContent="center">
          <SoftTypography variant="h4" sx={{ color: "#58bde5", textAlign: "center" }}>
            Welcome <EmojiPeopleIcon />
            <br></br> Today is {format(new Date(), "do MMMM Y")}
          </SoftTypography>
        </Grid>
      </SoftBox>
    </Card>
  );
};

export default TodaysDate;
