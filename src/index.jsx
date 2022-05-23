import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Components/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
