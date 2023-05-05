import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Korean Kitchen</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <li>
                  <Link to="/home" className="nav-link">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="nav-link">
                    blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link">
                    Contact
                  </Link>
                </li>
              </Nav>
              {user && (
                <Tooltip className="p-2"  place="left" type="warning"anchorSelect="#clickable">
                  <button className="bg-blue">{user.displayName}</button>
                </Tooltip>
                
              )}

              <Nav>
                {user && (

                  <div id="clickable">
                    {" "}
                    <img
                      className="rounded-circle mx-3"
                      style={{ width: "40px" }}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  
                )}

                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    
    </div>
  );
};

export default NavigationBar;
