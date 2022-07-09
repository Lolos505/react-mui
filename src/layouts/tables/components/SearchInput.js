import { Card, Grid } from "@mui/material";
import { ResultCard } from "./ResultCard";
import SoftInput from "components/SoftInput";
import React, { useState } from "react";
import SoftBox from "components/SoftBox";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setDrinks(data.drinks);
        } else {
          setDrinks([]);
        }
      });
  };

  return (
    <Card sx={{ mt: 3 }}>
      <SoftBox sx={{ pl: 3, pr: 3, pt: 3, pb: 3 }}>
        <Grid container justifyContent="center">
          <Grid item>
            <SoftInput
              type="text"
              placeholder="Search for a drink"
              onChange={onChange}
              value={query}
            />
          </Grid>
          {drinks.length > 0 && (
            <Grid container justifyContent="center" spacing={4} sx={{ mt: 3 }}>
              {drinks.map((drink) => (
                <Grid item key={drink.idDrink}>
                  <ResultCard drink={drink} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </SoftBox>
    </Card>
  );
};

export default SearchInput;
