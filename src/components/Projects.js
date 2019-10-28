import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import showcase from '../assets/game-showcase.mp4';
import taxi from '../assets/taxi.gif'



const Styles = styled.div`

    h3 {
        color: #f7be16;
    }

    .figure, .video {
        width: 600px;
        margin-top: 20px;
        margin-bottom: 20px; 
        display: block;
    }

    .button {
        color: #f7be16;
        border-color:  #f7be16;
        margin-bottom: 20px;
        
        &:hover {
            background-color:  #f7be16;
            color: #172842;
        }
    }

    .buffer {
        height: 100px;
        margin-bottom: 50px;
    }
`;

export const Projects = () => (
    <Styles>
        <h3>Forgotten Dungeon</h3>
        <video className="video" controls autoPlay preload muted><source src={showcase} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <Button className="button" 
            variant="outline-success" 
            href="FDWebGLBuild/" 
            target="_blank">
                Try the game!
        </Button>
        <h3>OpenAIGym Taxi-v2</h3>
        <Image className="figure" src={taxi} />
        <Button className="button" 
            variant="outline-success" 
            href="https://colab.research.google.com/drive/1lr_A64-_pt-rPz2fwTpiWL8XR_c9rb-t" 
            target="_blank">
                View and Run the code!
        </Button>
        <div className="buffer"></div>
    </Styles>
);
