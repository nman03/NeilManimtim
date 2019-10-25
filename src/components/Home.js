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
        width: 640px;
        height: 360px;
        margin: auto;
        display: block;
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f79a4e' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }
    
    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f79a4e' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }

    .carousel-indicators li {
        background-color: #f79a4e;
    }

    .caption p, .caption h3 {
        color: black;
        background-color: rgba(256,256,256,0.5)
    }
`;

export const Home = () => (
    <Styles>
        <Carousel className="carousel" color="black">
            <Carousel.Item>
                <img className="img" src={game} alt="game-gif" />
                <Carousel.Caption>
                    <h3>Forgotten Dungeon</h3>
                    <p>3D First-Person Dungeon Shooter made with Unity</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img" src={taxi} alt="taxi-gif" />
                <Carousel.Caption className="caption">
                    <h3>OpenAI Gym Taxi-v2</h3>
                    <p>Feature-based Reinforcement Learning</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img" src={chatbot} alt="chatbot" />
                <Carousel.Caption className="caption">
                    <h3>University Chatbot</h3>
                    <p>Service ChatBot with built-in Natural Languange Processing.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
);

