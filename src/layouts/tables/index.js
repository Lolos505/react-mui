import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MuiTable from "./components/MuiTable";
import SearchInput from "./components/SearchInput";
import { Card, Grid } from "@mui/material";
import SearchHeader from "./components/SearchHeader";
import PieChart from "./components/PieChart";

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={4}>
          <Grid container justifyContent="center" sx={{ mb: 4 }}>
            <Grid item>
              <SearchHeader />
              <SearchInput />
            </Grid>
          </Grid>
          <SoftBox sx={{ mb: 3, width: "400px" }}>
            <Card>
              <Grid container justifyContent="left">
                <Grid item sx={{ width: "400px", height: "500px" }}>
                  <PieChart />
                </Grid>
              </Grid>
            </Card>
          </SoftBox>
          <SoftBox>
            <Card>
              <MuiTable />
            </Card>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
