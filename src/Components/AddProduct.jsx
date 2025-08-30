import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const AddProduct = () => {
  const [form, setForm] = useState({
    productTitle: "",
    price: "",
    description: "",
    category: "",
  });
  const [success, setSuccess] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/products/", {
        method: "POST",
        body: JSON.stringify({
          title: form.productTitle,
          price: form.price,
          description: form.description,
          category: form.category,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(`data: ${JSON.stringify(data)}  `);
      if (response.ok) {
        setSuccess(true);
        setForm({
          productTitle: "",
          price: "",
          description: "",
          category: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(form);
  return (
    <div>
      <form
        onSubmit={handleClick}
        className="d-flex flex-column justify-content-center align-items-center p-5"
      >
        <label htmlFor="productTitle">Product Title: </label>
        <input
          className="w-100 p-2"
          type="text"
          id="productTitle"
          name="productTitle"
          value={form.productTitle}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          className="w-100 p-2"
          type="number"
          name="price"
          id="price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          className="w-100 p-2"
          type="text"
          name="category"
          id="category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea
          className="w-100 p-3"
          type="text"
          value={form.description}
          id="description"
          name="description"
          onChange={handleChange}
          required
        >
          {" "}
        </textarea>
        <br />
        <button className="w-100 p-2" type="submit">
          Add Product
        </button>
        {success && <p className="text-success">Product added successfully!</p>}
      </form>
    </div>
  );
};

export default AddProduct;
