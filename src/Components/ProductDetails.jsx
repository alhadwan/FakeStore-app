import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Button, ListGroup } from "react-bootstrap";
import ProductRating from "./ProductRating";

const ProductDetails = ({ cart, setCart, quantity, setQuantity }) => {
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();
  const taxRate = 0.07;

  const handleClick = () => {
    const item = {
      id: productDetails.id,
      image: productDetails.image,
      title: productDetails.title,
      price: productDetails.price,
      quantity,
    };
    setCart([...cart, item]);
    console.log(...cart);
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error("FakeStoreAPI fetch did not work");
      }

      const productDetails = await response.json();

      setProductDetails(productDetails);
      console.log(productDetails);
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      {productDetails ? (
        <Row className="p-5">
          <Col md={4}>
            <img
              className="img-fluid "
              style={{
                height: "380px",
                width: "100%",
                objectFit: "contain",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              src={productDetails.image}
              alt={productDetails.title}
            />
          </Col>
          <Col md={4}>
            <h1>{productDetails.title}</h1>
            <p>{productDetails.description}</p>
            {/* <p>Price: ${productDetails.price}</p> */}
            <p>Category: {productDetails.category}</p>
            <p>
              <ProductRating
                value={productDetails.rating.rate}
                text={`${productDetails.rating.count} reviews`}
              />
            </p>
          </Col>
          <Col md={4}>
            <ListGroup className="list-group-flush text-center">
              <ListGroup.Item className="text-success fw-bold fs-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </ListGroup.Item>
              <ListGroup.Item className="text-muted fw-bold fs-5">
                {quantity &&
                  `Price: $${(productDetails.price * quantity).toFixed(2)}`}
              </ListGroup.Item>
              <ListGroup.Item className="text-muted fw-bold fs-5">
                Tax: ${(taxRate * productDetails.price * quantity).toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item className="text-success fw-bold fs-5">
                Total: $
                {(
                  (productDetails.price + taxRate * productDetails.price) *
                  quantity
                ).toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary w-100" onClick={handleClick}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
