import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const debounce = (func, delay = 250) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, [setSearchTerm]);

  const Search = debounce(() => {
    setSearchTerm(inputRef.current.value);
  });

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="form-card">
        <h1>Search your favourite Drinks!</h1>
        <form className="form" onSubmit={handleClick}>
          <input type="text" ref={inputRef} onChange={Search} />
        </form>
      </section>
    </>
  );
};

export default SearchForm;
