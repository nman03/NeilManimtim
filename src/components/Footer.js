import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Styles = styled.div`
    position: relative;
    display: block;
    
    .footer {
        position: fixed;
        bottom: 0;
        height: 40px;
        width: 100%;
        text-align: center;
        background-color: #0b1021;
        color: white;
        padding-top: 10px;
    }

    .link {
        color: white;
        padding-left: 5px;

        &:hover {
            color: #f7be16;
        }
    }

    .logo {
        width: 25px;
        height: 25px;
        margin-left: 20px;
    }
`;

export const Footer = () => (
    <Styles>
        <div className="footer">
            &copy; Neil Manimtim | 
            <a className="link" href="https://github.com/nman03">GitHub</a> |
            <a className="link" href="https://www.linkedin.com/in/neilmanimtim/">LinkedIn</a> |
            <a className="link" href="mailto:nm31997@gmail.com">E-Mail</a>
            <img className="logo" src={logo} alt="react-logo"/> Powered by React
        </div>
    </Styles>
);