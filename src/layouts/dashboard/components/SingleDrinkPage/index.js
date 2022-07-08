import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftButton from "components/SoftButton";
import { styled } from "@mui/material/styles";
import Footer from "examples/Footer";

const SingleDrink = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const { id } = useParams();
  let dispatch = useDispatch();

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "lightgrey",
    padding: theme.spacing(1),
    width: "150px",
    borderRadius: "10px",
    marginTop: "10px",
    marginBottom: "5px",
  }));

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <SoftTypography variant="body2">No Cocktail to display</SoftTypography>;
  } else {
    const { name, image, category, glass, instructions, ingredients } = modifiedCocktail;
    return (
      <>
        {loading ? (
          <SoftBox>
            <SoftTypography variant="body2">Loading...</SoftTypography>
          </SoftBox>
        ) : (
          <DashboardLayout>
            <DashboardNavbar />
            <Grid container justifyContent="center" sx={{ mt: 4, mb: 4 }}>
              <Card sx={{ maxHeight: 1200, maxWidth: 900 }}>
                <CardMedia component="img" image={image} sx={{ maxHeight: 500, maxWidth: 900 }} />
                <CardContent sx={{ display: "flex" }}>
                  <SoftTypography variant="h5">
                    <Div>Drink Name:</Div>
                    {name}
                    <Div>Category:</Div>
                    {category}
                    <Div>Glass:</Div>
                    {glass}
                  </SoftTypography>
                  <SoftTypography variant="h6" sx={{ ml: 3 }}>
                    <Div>Instructions:</Div>
                    {instructions}

                    <Div>Ingredients: </Div>
                    {ingredients.map((item, index) => {
                      return item ? <span key={index}>{(index ? ", " : "") + item}</span> : null;
                    })}
                  </SoftTypography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mb: 2 }}>
                  <Link to="/">
                    <SoftButton>Go Back</SoftButton>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Footer />
          </DashboardLayout>
        )}
      </>
    );
  }
};

export default SingleDrink;
