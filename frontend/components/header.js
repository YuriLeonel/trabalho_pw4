import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/img/valorant-logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt="valorant logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/agent">Agents</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header