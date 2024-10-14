import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext, useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"


const VehicleCard = ({ vehicle, id }) => {
    return (
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={
              id>= 16
                ? `https://starwars-visualguide.com/assets/img/vehicles/${
                    id
                  }.jpg`
                : `https://starwars-visualguide.com/assets/img/vehicles/${
                    id
                  }.jpg`
            } />
        <Card.Body>
            <Card.Title>{vehicle.name}</Card.Title>
            <Card.Text>
            <p>model: {vehicle.model}</p>
            <p>crew: {vehicle.crew}</p>
            <p>passengers: {vehicle.passengers}</p>
            <p>pilot: {vehicle.pilot}</p>
            </Card.Text>
            <div class="d-flex justify-content-between align-items-center">
                <Link className="btn btn-warning" to={`/vehicle/details/${id}`}>Learn More</Link>
                <Button variant="primary"><FontAwesomeIcon icon={faHeart}/></Button>
            </div>
        </Card.Body>
    </Card>
    )
}

export default VehicleCard