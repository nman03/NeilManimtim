import React from 'react';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import { ProjectCarousel } from './ProjectCarousel'

const Styles = styled.div`
    h3 {
        color: #f7be16;
    }

    p {
        color: white;
    }

    .bottom {
        margin-bottom: 100px;
    }

    .accordion {
        margin-top: 20px;
    }

    .card-header {
        color: white;
        border: 1px solid white;
        background-color: #0b1021;
        border-collapse: collapse;
        height: 50px;

        &:hover {
            color: #f7be16;
        }
    }

    .card-body {
        color: white;
        border: 1px solid white;
    }

`;

export const Home = () => (
    <Styles>
        <ProjectCarousel />
        <h3>Background</h3>
        <p>I was born in the island nation of Philippines where I was raised until the age of 12.
        My family then relocated here in the US. Initially we moved to New York and stayed there
        for about 3 years, then finally we moved here in California to be closer to our relatives. 
        My parents sacrificed a lot in order to give us a better future, therefore upon graduating I am
        happy to start working and begin helping them out.</p>
        <p>Mathematics have always come natural to me. Therefore, I've planned to become an engineer 
        of some sorts in the future. Upon starting college however, I was unsure which field of engineering to
        enter. I decided on Computer Science with the mindset that it is where the future technologies 
        is heading. To my surpise, I started to find coding enjoyable. I found that problem-solving with 
        clean and efficient code satisfying. Similarly, I liked seeing the lines of code eventually do what I want
        it to do.</p>
        <h3>Education</h3>
        <p>I graduated Summa Cum Laude on May 2019 at CalState LA with a Bachelor's Degree
        in Computer Science. This not only demonstrates my efforts, but also shows my desire 
        and capacity to learn and excell in both general and advanced courses. These courses
        include industry-relevant topics in the fields of Computer Science such as: Artificial 
        Intelligence, Cyber Security, Full-Stack Web Development, and Game Development.</p>
        <h3>Technical Skills</h3>
        <Accordion className="bottom">
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <h6>Backend</h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                   <p>Java, Python, C#, Node JS</p>
                </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                <h6>Frontend</h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <p>JavaScript ES6, HTML5, CSS, React JS</p>
                </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="2">
                <h6>Database</h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                   <p>MySQL</p>
                </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="3">
                <h6>Utility</h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <Card.Body>
                   <p>GIT, Unity</p>
                </Card.Body>
            </Accordion.Collapse>
        </Accordion>
    </Styles>
);

