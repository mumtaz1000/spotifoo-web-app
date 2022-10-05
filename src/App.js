import React from "react";
import Home from "./components/Home";
import Search from "./components/Search"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
