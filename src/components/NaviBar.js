import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/kneel.svg';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #0b1021;
        color: white;
    }

    .brand, .item {
        color: white !important;
        font-size: .9em;

        &:hover {
            color: #f79a4e !important;
        }
    }

    .logo {
        margin-right: 10px;
    }
`;

export const NaviBar = () => (
    <Styles>
        <Navbar className="navbar" >
            <Navbar.Brand className="brand" href="#/">
                <img className="logo" src={logo} width="20" height="20" alt="logo" />
                Neil Manimtim
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link className="item" href="#/">Home</Nav.Link>
                <Nav.Link className="item" href="#/Projects">Projects</Nav.Link>
                <Nav.Link className="item" href="/ResumeGen.pdf" target="_blank">Resume</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>  
);