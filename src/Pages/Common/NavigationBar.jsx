import React from 'react';
import { Container, Navbar, Nav,NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
          <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Korean Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <li><Link to='/home' className="nav-link"> Home </Link></li>
            <li><Link to='/login' className="nav-link">login</Link></li>
            <li><Link to='/blog' className="nav-link">blog</Link></li>
            {/* <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">pic</Nav.Link>
            <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </div>
        </div>
    );
};

export default NavigationBar;