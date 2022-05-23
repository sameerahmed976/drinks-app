import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="error">
        <h1>Page Not Found! 😢</h1>
        <button className="back-btn">
          <Link to="/">back to Home</Link>
        </button>
      </main>
    </>
  );
};

export default Error;
