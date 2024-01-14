import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineDownload,
  AiOutlineCluster,
  AiOutlineUser,
  AiOutlineMessage
} from "react-icons/ai";
// import {
//   AiOutlineHome,
//   AiFillCodeSandboxCircle,
//   AiOutlineDownload,
//   AiOutlineCluster,
//   AiOutlineUser,
//   AiOutlineMessage
// } from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={Link} to="/rough" onClick={() => updateExpanded(false)} >
                <AiFillCodeSandboxCircle style={{ marginBottom: "2px" }} /> Rough
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link as={Link} to="/download" onClick={() => updateExpanded(false)} >
                <AiOutlineDownload style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)} >
                <AiOutlineCluster style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/getintouch" onClick={() => updateExpanded(false)} >
                <AiOutlineMessage style={{ marginBottom: "2px" }} /> Get-In-Touch
              </Nav.Link>
            </Nav.Item>
{/* 
            <Nav.Item>
              <Nav.Link as={Link} to="/knowme" onClick={() => updateExpanded(false)} >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Know-Me
              </Nav.Link>
            </Nav.Item> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
