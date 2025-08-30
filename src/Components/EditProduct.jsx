import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const product = products?.find((p) => p.id === Number(id));

  const [form, setForm] = useState({
    productTitle: product?.title,
    price: product?.price,
    description: product?.description,
    category: product?.category,
  });
  useEffect(() => {
    if (product) {
      setForm({
        productTitle: product.title || "",
        price: product.price || "",
        description: product.description || "",
        category: product.category || "",
      });
      setSuccess(false);
    }
  }, [product]);
  const [success, setSuccess] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: form.productTitle,
            price: form.price,
            description: form.description,
            category: form.category,
          }),
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(`data: ${JSON.stringify(data)}  `);
      if (response.ok) {
        setSuccess(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setSuccess(false);
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
          value={form.description}
          id="description"
          name="description"
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button className="w-100 p-2" type="submit">
          Edit Product
        </button>
        {success && (
          <p className="text-success">Product edited successfully!</p>
        )}
      </form>
    </div>
  );
};

export default EditProduct;
