// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";
import AddProduct from "./Components/AddProduct";
import AddToCart from "./Components/AddToCart";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/addToCart" element={<AddToCart />} />
      </Routes>
    </div>
  );
}

export default App;
