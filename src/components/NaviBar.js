import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/kneel.svg';

let styles = {
    margin: '8px'
};

export const NaviBar = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/">
            <img style={styles} src={logo} width="30" height="30" alt="logo" />
            Neil Manimtim
        </Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#/" font-color="white">Home</Nav.Link>
            <Nav.Link href="#/Projects">Projects</Nav.Link>
        </Nav>
    </Navbar>
);