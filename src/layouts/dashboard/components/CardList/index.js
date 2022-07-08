import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "../../redux/action";
import MuiCard from "../MuiCard";
import Image from "../../../../assets/images/404.jpg";
import SoftBox from "components/SoftBox";

const CardList = () => {
  const { cocktails } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strCategory,
          strInstructions,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          alcoholic: strAlcoholic,
          glass: strGlass,
          category: strCategory,
          instructions: strInstructions,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (!cocktails) {
    return (
      <SoftBox
        sx={{
          backgroundImage: `url(${Image})`,
          width: "774px",
          height: "529px",
          backgroundColor: "transparent",
          boxShadow: "0",
        }}
      />
    );
  }

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
      {modifiedCocktail.slice(0, 24).map((item) => {
        const { id, name, image, glass, category, instructions } = item;
        return (
          <Grid item key={id}>
            <MuiCard
              image={image}
              title={name}
              category={category}
              glass={glass}
              instructions={instructions}
              to={`/cocktail/${id}`}
              label="Read More"
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
