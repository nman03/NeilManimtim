import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import jumbo from '../images/dawn.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${jumbo}) no-repeat center;
        bacground-size: cover;
        color: Black;
    }
`;
export const Summary = () => (
    <Styles>
        <Jumbotron className="jumbo" fluid></Jumbotron>
    </Styles>    
);