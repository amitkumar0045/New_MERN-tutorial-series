import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Note Zipper</Navbar.Brand>
        <Navbar.Brand>
          {/* <Link to='/'>  Note Zipper </Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Form inline>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
          </Nav>


          <Nav
          // className="mr-auto"
          // style={{ maxHeight: '100px' }}
          // navbarScroll
          >
            <Nav.Link href="/mynotes">
              {/* <Link to="/mynotes"> My Notes </Link> */}
            </Nav.Link>
            <NavDropdown title="USerNAme-AAraya" id="basic-navbar-dropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                localStorage.removeItem("userInfo");
                // history.push("/")
              }} >Logout</NavDropdown.Item>

            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
