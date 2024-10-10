import React from "react";
import Card from "react-bootstrap/Card"


const PlanetCard = ({ planet, id }) => {
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={
                  id + 2 < 20
                    ? `https://starwars-visualguide.com/assets/img/planets/${
                        id + 2
                      }.jpg`
                    : "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                } />
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