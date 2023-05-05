import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ActiveLink from "./ActiveLink";
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
                <li className="text-md-center ms-md-5 my-2">
                  <ActiveLink to="/home" className="nav-link">
                    {" "}
                    Home{" "}
                  </ActiveLink>
                </li>
                <li className="ms-md-5 my-2">
                  <ActiveLink to="/blog" className="nav-link">
                    Blog
                  </ActiveLink>
                </li>
                {/* <li className="ms-md-5 my-2">
                  <ActiveLink  className="nav-link">
                    Contact
                  </ActiveLink>
                </li> */}
              </Nav>
              {user && (
                // <Tooltip className=""  place="BottomRight" anchorSelect="#clickable">
                //   <button className="bg-blue">{user.displayName}</button>
                // </Tooltip>
                <Tooltip anchorSelect="#clickable" className='text-dark bg-light'>
                <button className='text-dark bg-light border-0 '>{user.displayName}</button>
                </Tooltip>
                
                
              )}

              <Nav>
                {user && (

                  <div style={{ width: "50px" }} className="me-2" id="clickable">
                    {" "}
                    <img
                      className="rounded-circle "
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
