import React from "react";
import Card from "react-bootstrap/Card"


const PlanetCard = ({ planet }) => {
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{planet.name}</Card.Title>
            <Card.Text>
                climate: {planet.climate}
                population: {planet.population}
                diameter: {planet.diameter}
                gravity: {planet.gravity}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default PlanetCard