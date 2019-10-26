import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import jumbo from '../images/dawn.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${jumbo}) no-repeat center;
        bacground-size: cover;
        color: white;
        height: 100px;
        margin-bottom: 50px;
        padding: 10px;
        margin-right: auto;
        z-index: -2;
    }

    h4 {
        color:  #0b1021;
    }
`;

export const Summary = () => (
    <Styles>
        <Jumbotron fluid className="jumbo">
            <Container>
                <h4>Welcome</h4> 
                <h6>I'm a programmer who loves to learn. I have a strong 
                grasp of OOPs concepts, built on a strong foundation 
                in JAVA. Below are some of the projects I've worked on.</h6>
            </Container>   
        </Jumbotron>
        
    </Styles>    
);