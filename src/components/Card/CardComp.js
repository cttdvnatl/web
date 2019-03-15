import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './CardComp.css';

const CardComp = props => (

    <section className="introduction">
        <div className="header">
            <h3>Welcome To CTTDVNATL</h3>
        </div>
        <div className="row content">
        <CardDeck>
            <Card>
            <a href="/home">
                    <Card.Img src="./images/internal.jpg" />
                </a>
                <Card.Title>History</Card.Title>
                <Card.Body>
                    <Card.Text>Started at the end of 2018 and finish at the end of 2019.</Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <a href="/home">
                    <Card.Img src="./images/internal.jpg"/>
                </a>
                <Card.Title>Mission</Card.Title>
                <Card.Body>
                    <Card.Text>Started at the end of 2018 and finish at the end of 2019.</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <a href="/home">
                    <Card.Img src="./images/internal.jpg" />
                </a>
                <Card.Title>Construction</Card.Title>
                <Card.Body>
                    <Card.Text>Started at the end of 2018 and finish at the end of 2019.</Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        </div>
    </section>

)

export default CardComp;