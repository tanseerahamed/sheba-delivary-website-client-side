import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home" className="text-primary fw-bold fs-3 p-2">SHEBA</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                        {user.email && <Nav.Link as={HashLink} to="/addService">Add Your Service</Nav.Link>}
                        {user.email && <Nav.Link as={HashLink} to="/manageServices">Manage Services</Nav.Link>}
                        {user.email && <Nav.Link as={HashLink} to="/orders">Orders</Nav.Link>}
                        {user?.email ?
                            <Button onClick={logOut} variant="light"> Logout </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                             Signed in as: <a href="/home">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
