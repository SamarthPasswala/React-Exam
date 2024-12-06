import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
