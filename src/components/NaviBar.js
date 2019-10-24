import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/kneel.svg';
import styled from 'styled-components';

const Styles = styled.div`
    .logo {
        margin-right: 10px;
    }
`;

export const NaviBar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#/">
                <img className="logo" src={logo} width="20" height="20" alt="logo" />
                Neil Manimtim
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#/" font-color="white">Home</Nav.Link>
                <Nav.Link href="#/Projects">Projects</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>  
);