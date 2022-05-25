import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../Loading";

const SingleDrink = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log(data.drinks);
      if (data.drinks) {
        const {
          idDrink: idvalue,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newDrinks = {
          idvalue,
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        console.log(newDrinks);
        setData(newDrinks);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <>
        <h1>No drinks display</h1>
      </>
    );
  } else {
    const {
      idvalue,
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients,
    } = data;

    return (
      <>
        <section className="button">
          <Link to="/">back to Home</Link>
        </section>
        <section className="single-card">
          <section className="image-single">
            <img src={image} alt="image" className="img-single" />
          </section>
          <section className="single-info">
            <h1>Name: {name}</h1>
            <h2>Category: {category}</h2>
            <h3>Info: {info}</h3>
            <h4>Glass: {glass}</h4>
            <p>Instructions:{instructions}</p>
            <p>
              Items:
              {ingredients.map((item, index) => {
                return (
                  <Fragment key={index}>
                    {item ? <span className="item">{item}</span> : null}
                  </Fragment>
                );
              })}
            </p>
          </section>
        </section>
      </>
    );
  }
};

export default SingleDrink;
