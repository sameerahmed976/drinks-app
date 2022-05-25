import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "../Loading";
import Drink from "./Drink";

const Drinks = () => {
  const { data, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (data.length < 1) {
    return (
      <>
        <section className="no-match">
          <h1>No Drinks Matched your search Criteria!</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <h2 className="drinks-heading">Drinks</h2>
      <section className="drinks-grid">
        {data.map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Drinks;
