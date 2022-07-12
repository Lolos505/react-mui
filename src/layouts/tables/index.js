import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MuiTable from "./components/MuiTable";
import SearchInput from "./components/SearchInput";
import { Card, Grid } from "@mui/material";
import SearchHeader from "./components/SearchHeader";
import ChartPie from "./components/ChartPie";
import DoughnutChart from "./components/DoughnutChart";
import PolarAreaChart from "./components/PolarAreaChart";
import RadarChart from "./components/RadarChart";

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
          <Grid container justifyContent="space-evenly">
            <SoftBox sx={{ mb: 3, width: "400px" }}>
              <Card>
                <Grid item>
                  <ChartPie />
                </Grid>
              </Card>
            </SoftBox>
            <SoftBox sx={{ mb: 3, width: "400px" }}>
              <Card>
                <Grid item>
                  <DoughnutChart />
                </Grid>
              </Card>
            </SoftBox>
            <SoftBox sx={{ mb: 3, width: "400px" }}>
              <Card sx={{ height: "490px" }}>
                <Grid item>
                  <PolarAreaChart />
                </Grid>
              </Card>
            </SoftBox>
            <SoftBox sx={{ mb: 3, width: "400px" }}>
              <Card sx={{ height: "490px" }}>
                <Grid item>
                  <RadarChart />
                </Grid>
              </Card>
            </SoftBox>
          </Grid>
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
