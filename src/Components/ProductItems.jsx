import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import ProductRating from "./ProductRating";

const ProductItems = ({ productItems }) => {
  console.log(productItems);
  return (
    <Card
      className="h-100 rounded-4"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <Card.Img
        variant="top"
        src={productItems.image}
        alt={productItems.title}
        style={{
          height: 180,
          objectFit: "contain",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="top"
        delay={{ show: 150, hide: 100 }}
        containerPadding={8}
        // container="body" // uncomment if the tooltip is clipped
        overlay={
          <Tooltip id={`desc-tip-${productItems.id}`}>
            <div className="fw-semibold mb-1">{productItems.title}</div>
            <div style={{ whiteSpace: "normal", maxWidth: 320 }}>
              {productItems.description}
            </div>
          </Tooltip>
        }
      >
        <Card.Body tabIndex={0}>
          <Card.Title className="ellipsis1">{productItems.title}</Card.Title>
          <Card.Text className="ellipsis">{productItems.description}</Card.Text>
        </Card.Body>
      </OverlayTrigger>

      <ListGroup className="list-group-flush">
        <ListGroup.Item className="text-success fw-bold fs-5 text-center">
          ${productItems.price}
        </ListGroup.Item>
        <ListGroup.Item>
          <ProductRating
            value={productItems.rating.rate}
            text={`${productItems.rating.count} reviews`}
          />
        </ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Button
          as={Link}
          to={`/products/${productItems.id}`}
          variant="primary"
          // size="lg"
          className="w-100"
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItems;
