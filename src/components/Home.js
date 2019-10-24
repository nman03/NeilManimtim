import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import game from '../images/game-footage.gif';
import taxi from '../images/taxi.gif';
import chatbot from '../images/chatbot.png';
import styled from 'styled-components';

const Styles = styled.div`
    .carousel {
        width: 75%;
        height: 50%;
        margin: auto;
    }

    .img {
        width:100%;
        min-height: 300px;
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2355f' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }
    
    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2355f' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }
`;

export const Home = () => (
    <Styles>
        <Carousel className="carousel" color="black">
            <Carousel.Item>
                <img className="img" src={game} alt="game-gif" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img" src={taxi} alt="taxi-gif" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="img" src={chatbot} alt="chatbot" />
            </Carousel.Item>
        </Carousel>
    </Styles>
);

