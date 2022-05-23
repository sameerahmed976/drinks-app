import React from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { data, setSearchTerm } = useGlobalContext();
  return (
    <>
      <section>
        <h1>Search your favourite Drinks!</h1>
        <form>
          <input type="text" />
        </form>
      </section>
    </>
  );
};

export default SearchForm;
