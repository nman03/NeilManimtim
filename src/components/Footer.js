import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
    position: relative;
    
    .footer {
        position: fixed;
        bottom: 0;
        height: 20px;
        width: 100%;
        text-align: center;
        background-color: #45454d;
        color: white;
    }

`;

export const Footer = () => (
    <Styles>
        <div className="footer">&copy; Neil Manimtim | <a href="#">GitHub</a> </div>
    </Styles>
);