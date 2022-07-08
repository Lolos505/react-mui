import React, { useContext } from "react";
import { GlobalContext } from "./redux/GlobalState";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import PropTypes from "prop-types";
import FavouritesHeader from "./components/FavouritesHeader";
import NoDrinksText from "./components/NoDrinksText";
import SoftTypography from "components/SoftTypography";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

function Favourites() {
  const { favoriteslist } = useContext(GlobalContext);
  const { removeFromFavorites } = useContext(GlobalContext);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={4}>
          <Grid container justifyContent="center" sx={{ mb: 4 }}>
            <FavouritesHeader />
          </Grid>
          {favoriteslist.length > 0 ? (
            <Grid container spacing={4} justifyContent="center">
              {favoriteslist.map((drink) => (
                <Grid item key={drink.idDrink}>
                  <Card className="card" sx={{ height: "450px", width: "300px" }}>
                    <CardMedia
                      component="img"
                      image={drink.strDrinkThumb}
                      sx={{ height: "200px" }}
                    />
                    <CardContent>
                      <SoftTypography variant="h4">{drink.strDrink}</SoftTypography>
                      <SoftTypography variant="h6">{drink.strCategory}</SoftTypography>
                      <SoftTypography variant="h6" sx={{ mb: 2 }}>
                        {drink.strGlass}
                      </SoftTypography>
                      <SoftTypography variant="body2" noWrap>
                        {drink.strInstructions}
                      </SoftTypography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Link to={`/cocktail/${drink.idDrink}`} className="readmorelink">
                        <Button variant="text">Read more</Button>
                      </Link>
                      <Button onClick={() => removeFromFavorites(drink.idDrink)}>
                        <ClearIcon sx={{ color: "#58bde5" }} />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container justifyContent="center" sx={{ mb: 4 }}>
              <NoDrinksText />
            </Grid>
          )}
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

Favourites.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  glass: PropTypes.string,
  instructions: PropTypes.string,
  to: PropTypes.string,
  label: PropTypes.string,
  drink: PropTypes.object,
  type: PropTypes.string,
};

export default Favourites;
