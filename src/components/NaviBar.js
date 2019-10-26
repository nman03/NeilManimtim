import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/kneel.svg';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #0b1021;
        position: fixed;
        width: 100%;
    }

    .brand {
        color: #f7be16 !important;
    }
    
    .item {
        color: white !important;

        &:hover {
            color: #f7be16 !important;
        }
    }

    .logo {
        margin-right: 10px;
    }
`;

export const NaviBar = () => (
    <Styles>
        <Navbar fluid className="navbar" >
            <Navbar.Brand className="brand" href="#/">
                <img className="logo" src={logo} width="20" height="20" alt="logo" />
                Neil Manimtim
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link className="item" href="#/">Home</Nav.Link>
                <Nav.Link className="item" href="#/Projects">Projects</Nav.Link>
                <Nav.Link className="item" href="ResumeGen.pdf" target="_blank">Resume</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>  
);