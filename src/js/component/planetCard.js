import React from "react";
import Card from "react-bootstrap/Card"


const PlanetCard = ({ planet }) => {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.co/397x548" />
        <Card.Body>
            <Card.Title>{planet.name}</Card.Title>
            <Card.Text>
                <p>climate: {planet.climate}</p>
                <p>population: {planet.population}</p>
                <p>diameter: {planet.diameter}</p>
                <p>gravity: {planet.gravity}</p>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default PlanetCard