import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const CardComp = () => (

    <div>
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        write what you want here
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Footer text</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        write what you want here
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Footer text</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        write what you want here
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Footer text</small>
                </Card.Footer>
            </Card>
        </CardDeck>;
    </div>

)

export default CardComp;