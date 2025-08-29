// HomePage.jsx
import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={12}>
          <Carousel
            interval={4000}
            pause="hover"
            touch
            className="shadow-sm rounded"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/adidasbackpack.jpg"
                alt="Adidas backpack"
                loading="lazy"
                style={{ height: 320, objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Back-to-school picks</h3>
                <p>Durable bags for everyday use.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/harrypotterboxset.jpg"
                alt="Harry Potter book box set"
                loading="lazy"
                style={{ height: 320, objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Bestselling books</h3>
                <p>Stories for every age and shelf.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/instantpotduo.jpg"
                alt="Instant Pot Duo cooker"
                loading="lazy"
                style={{ height: 320, objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Kitchen essentials</h3>
                <p>Make dinner simpler and faster.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="align-items-center mt-5">
        <Col md={12} className="mb-4 mb-md-0 text-center">
          <h1 className="display-5 fw-bold">Welcome to the FakeStore App</h1>
          <p className="text-muted">
            Browse products, add new items, and manage your catalog.
          </p>
          <Button as={Link} to="/products" variant="primary" size="lg">
            Browse Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
