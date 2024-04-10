import React from 'react';
import '../styles/NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Logo from '../assets/football-logo-light.png';


function NavBar() {
  return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="brand-name" href="/">
          <img src={Logo} alt="foot on a football"/> Wonder Cubs</Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/fixtures">Lioness Fixtures</Nav.Link>
                <Nav.Link href="/playerprofiles">Meet the Lionesses</Nav.Link>
                <Nav.Link href="/findyourclub">Find your club</Nav.Link>
                {/* <Nav.Link href="/blog">News & Activities</Nav.Link> */}
              </Nav>
              <Button className="login-btn" href="/login">Log in / Sign up</Button>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBar;
