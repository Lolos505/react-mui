// @mui material components
import Grid from "@mui/material/Grid";

// Dashboard components
import SoftBox from "components/SoftBox";

// Dashboard components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Dashboard examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>Your favourites</SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
