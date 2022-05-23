import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "../Loading";

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
      <section>
        <h2>Drinks</h2>
      </section>
    </>
  );
};

export default Drinks;
