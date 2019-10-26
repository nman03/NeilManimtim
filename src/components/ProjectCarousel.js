import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import game from '../assets/game-footage.gif';
import taxi from '../assets/taxi.gif';
import chatbot from '../assets/chatbot.png';
import styled from 'styled-components';

const Styles = styled.div`
    .carousel {
        width: 75%;
        height: 50%;
        margin: auto;
        margin-bottom: 50px;
    }

    .img {
        width: 100%;
        max-width: 640px;
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

    .light-bg {
        background-color: rgba(256,256,256,0.2)
    }

    .light-bg h6 {
        color: black;
    }
`;

export const ProjectCarousel = () => (
    <Styles>
        <Carousel className="carousel" color="black">
            <Carousel.Item>
                <img className="img" src={game} alt="game-gif" />
                <Carousel.Caption className="light-bg">
                    <h3>Forgotten Dungeon</h3>
                    <h6>3D First-Person Dungeon Shooter made with Unity</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img" src={taxi} alt="taxi-gif" />
                <Carousel.Caption className="light-bg">
                    <h3>OpenAI Gym Taxi-v2</h3>
                    <h6>Feature-based Reinforcement Learning</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img" src={chatbot} alt="chatbot" />
                <Carousel.Caption className="light-bg">
                    <h3>University Chatbot</h3>
                    <h6>Service ChatBot with built-in Natural Languange Processing.</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
);

