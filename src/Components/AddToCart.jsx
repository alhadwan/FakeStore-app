import React from "react";
import { Card, Row, Col, Container, Button, ListGroup } from "react-bootstrap";
const AddToCart = ({ cart, setCart, quantity, setQuantity }) => {
  console.log(cart);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul style={{ listStyleType: "none", padding: 5 }}>
        {cart.map((item, index) => (
          <li key={index}>
            <Row>
              <Col md={3}>
                <img
                  className="img-fluid "
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  src={item.image}
                  alt={item.title}
                />
              </Col>
              <Col md={3} className="fw-bold fs-5">
                {item.title} -{" "}
                {quantity && `$${(item.price * quantity).toFixed(2)}`}
              </Col>
              <Col md={3}>
                <select
                  className="form-select fw-bold fs-5"
                  aria-label="Default select example"
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </Col>
              <Col md={3}>
                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
