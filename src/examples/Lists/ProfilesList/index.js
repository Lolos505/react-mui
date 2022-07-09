import { Card, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

function ProfilesList() {
  return (
    <Card>
      <Grid>
        <SoftBox>
          <PlaceholderCard title={{ variant: "h5", text: "New section" }} outlined />
        </SoftBox>
      </Grid>
    </Card>
  );
}

export default ProfilesList;
