import ProductItem from "./ProductItems";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchProductData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("FakeStoreAPI fetch did not work");
        }

        const productData = await response.json();

        setProducts(productData);
        setLoading(false);
      };

      fetchProductData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Container className="d-flex flex-row justify-content-center align-items-center py-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            {loading ? <div>Loading...</div> : <ProductItem productItems={p} />}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListing;
