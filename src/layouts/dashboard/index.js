// Dashboard components
import SoftBox from "components/SoftBox";
import CardList from "./components/CardList";

// Dashboard examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import TodaysDate from "./components/Date";
import { Grid } from "@mui/material";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container justifyContent="center" sx={{ mb: 4 }}>
            <TodaysDate />
          </Grid>
          <CardList />
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
