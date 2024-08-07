import React from "react";
import Card from "react-bootstrap/Card"


const VehicleCard = ({ vehicle }) => {
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{vehicle.name}</Card.Title>
            <Card.Text>
                model: {vehicle.model}
                crew: {vehicle.crew}
                passengers: {vehicle.passengers}
                pilot: {vehicle.pilot}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default VehicleCard