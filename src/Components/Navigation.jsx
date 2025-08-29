import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navigation = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg" className="p-3 mb-4">
      {/* logo */}
      <Navbar.Brand href="/">FakeStoreAPI</Navbar.Brand>
      {/* little hamburger icon button for smaller screens */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* This button controls the element whose id is basic-navbar-nav */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center p-3">
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeclassname="active">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products/add" activeclassname="active">
            Add Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products/addToCart" activeclassname="active">
            <FaShoppingCart /> Add to Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
