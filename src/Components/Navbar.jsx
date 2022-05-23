import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SharedLayout from "./Pages/SharedLayout";
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
