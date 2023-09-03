import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Furama</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Service</Nav.Link>
                        <Nav.Link href="/customer">Customer</Nav.Link>
                        <Nav.Link href="/contract">Contract</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}