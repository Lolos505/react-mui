// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import LinkedIn from "@mui/icons-material/LinkedIn";

// Dashboard components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Dashboard examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Images
import website1 from "assets/images/1.jpg";
import website2 from "assets/images/2.jpg";
import website3 from "assets/images/3.png";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Theodoros! Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Theodoros E. Grivas",
                mobile: "(+30) 694 2275 742",
                email: "theogriv@gmail.com",
                location: "Athens, Greece",
              }}
              social={[
                {
                  link: "https://www.linkedin.com/in/theodoros-g-ab940255/",
                  icon: <LinkedIn />,
                  color: "linkedin",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Projects
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Some of my websites
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={website1}
                  label="project #1"
                  title="molivenio treno"
                  description="Molivenio treno is an afterschool playground for kids!"
                  action={{
                    type: "external",
                    route: "https://pixelcyclops.com/portfolio/",
                    color: "info",
                    label: "view project",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={website2}
                  label="project #2"
                  title="Mili Villas Green"
                  description="Mili Villas Green are luxury suits for vacations in Ithaki island."
                  action={{
                    type: "external",
                    route: "https://pixelcyclops.com/portfolio/",
                    color: "info",
                    label: "view project",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={website3}
                  label="project #3"
                  title="Ekkentrikon"
                  description="Ekkentrikon is a cocktail bar in Athens located in central square of Imittos."
                  action={{
                    type: "external",
                    route: "https://pixelcyclops.com/portfolio/",
                    color: "info",
                    label: "view project",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
