import React from "react";
import Card from "react-bootstrap/Card"


const VehicleCard = ({ vehicle }) => {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.co/397x548" />
        <Card.Body>
            <Card.Title>{vehicle.name}</Card.Title>
            <Card.Text>
            <p>model: {vehicle.model}</p>
            <p>crew: {vehicle.crew}</p>
            <p>passengers: {vehicle.passengers}</p>
            <p>pilot: {vehicle.pilot}</p>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default VehicleCard