import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MuiTable from "./components/MuiTable";
import SearchInput from "./components/SearchInput";
import { Grid } from "@mui/material";
import SearchHeader from "./components/SearchHeader";

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
          <MuiTable />
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
