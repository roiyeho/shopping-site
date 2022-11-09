import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand><Link className="nav-link" to="/">Our Store</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to="/products">Products</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to="/cart">Your Cart</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </div>    
  );
}
export default NavBar;