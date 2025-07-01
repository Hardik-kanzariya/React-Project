import { Container, Navbar, Nav, Form, FormControl, Button, Carousel } from "react-bootstrap";
import { FaShoppingCart, FaSearch, FaUser} from "react-icons/fa";
import logo from '../assets/Flipkart.svg'
import { Link } from "react-router";

const Header = () => {
  return (
    <>
     <Navbar bg="info" expand="lg" className="py-2">
      <Container fluid>

        {/* Flipkart Logo */}
        <Navbar.Brand  className="d-flex align-items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Flipkart Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          </Link>
        </Navbar.Brand>

        {/* Responsive Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">

          {/* Search Bar */}
          <Form className="d-flex mx-auto my-2" style={{ width: "60%" }}>
            <FormControl
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">
              <FaSearch />
            </Button>
          </Form>

          {/* Right Menu */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link className="text-white d-flex align-items-center me-3">
              <FaUser className="me-1" /> Login
            </Nav.Link>

            <Nav.Link className="text-white d-flex align-items-center me-3">
              <FaShoppingCart className="me-1" /> Cart
            </Nav.Link>

              <Link to="/add-product" className="text-white d-flex align-items-center text-decoration-none" >Add Products</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
