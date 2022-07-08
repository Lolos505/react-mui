import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../favourites/redux/GlobalState";
import PropTypes from "prop-types";
import "../../dashboard/components/MuiCard/styles.css";
import SoftTypography from "components/SoftTypography";

export const ResultCard = ({ drink, type }) => {
  const [selected, setSelected] = React.useState(false);
  const { addDrinkToFavoriteslist, favoriteslist } = useContext(GlobalContext);

  let storedDrink = favoriteslist.find((o) => o.idDrink === drink.idDrink);

  const favoriteslistDisabled = storedDrink ? true : false;

  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        {drink.strDrinkThumb ? (
          <Card className="card" sx={{ height: "450px", width: "300px" }}>
            <CardMedia
              component="img"
              sx={{ height: "200px" }}
              image={drink.strDrinkThumb}
              alt={`${drink.strDrink} poster`}
            />
            <CardContent>
              <SoftTypography variant="h4">{drink.strDrink}</SoftTypography>
              <SoftTypography variant="h6">{drink.strGlass}</SoftTypography>
              <SoftTypography variant="h6" sx={{ mb: 2 }}>
                {drink.strCategory}
              </SoftTypography>
              <Typography variant="body2" noWrap>
                {drink.strInstructions}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="text"
                disabled={favoriteslistDisabled}
                className="btn"
                onClick={() => addDrinkToFavoriteslist(drink)}
              >
                Add to favorites
              </Button>
            </CardActions>
          </Card>
        ) : (
          <div className="filler-poster"></div>
        )}
      </Grid>
    </Grid>
  );
};

ResultCard.propTypes = {
  drink: PropTypes.object,
  type: PropTypes.string,
};
