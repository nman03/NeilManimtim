import React from 'react';
import styled from 'styled-components';
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
        <h3>Education</h3>
        <p className="bottom">I graduated Summa Cum Laude on May 2019 at CalState LA with a Bachelor's Degree
        in Computer Science. This not only demonstrates my efforts, but also shows my desire 
        and capacity to learn and excell in both general and advanced courses. These courses
        include industry-relevant topics in the fields of Computer Science such as: Artificial 
        Intelligence, Cyber Security, Full-Stack Web Development, and Game Development.</p>
    </Styles>
);

