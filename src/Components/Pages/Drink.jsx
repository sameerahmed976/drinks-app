import React from "react";
import { Link } from "react-router-dom";

const Drink = ({ id, name, image, info, glass }) => {
  return (
    <>
      <section className="drink-grid">
        <div className="img">
          <img src={image} alt="image" className="img" />
        </div>
        <h1>{name}</h1>
        <h2>{glass}</h2>
        <p>{info}</p>
        <Link to={`/singledrinks/${id}`}>details</Link>
      </section>
    </>
  );
};

export default Drink;
