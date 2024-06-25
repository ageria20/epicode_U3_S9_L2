import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";


class MyNav extends Component {
    render() {
        return (
            <Navbar expand="lg">
            <Container fluid="md">
                <Navbar.Brand href="#">EpicBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }
}

export default MyNav