import { createContext, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import React from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      // console.log(data);
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkthumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkthumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setData(newDrinks);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        searchTerm,
        data,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

// custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext };
