import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import React, { useRef } from "react";
import { fetchSearchCocktail } from "../../../layouts/dashboard/redux/action";
import { useDispatch } from "react-redux";
import SoftButton from "components/SoftButton";

function SearchBar() {
  const searchValue = useRef();

  let dispatch = useDispatch();
  const searchCocktail = () => {
    dispatch(fetchSearchCocktail(searchValue.current.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SoftBox pr={1} onSubmit={handleSubmit}>
      <SoftInput
        type="text"
        id="name"
        name="name"
        onChange={searchCocktail}
        ref={searchValue}
        placeholder="Search Cocktail..."
        icon={{ component: "search", direction: "left" }}
      />
    </SoftBox>
  );
}

export default SearchBar;
