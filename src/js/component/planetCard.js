import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext, useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

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
            <div class="d-flex justify-content-between align-items-center">
                <Link className="btn btn-warning" to={`/planet/details/${id}`}>Learn More</Link>
                <Button variant="primary"><FontAwesomeIcon icon={faHeart}/></Button>
            </div>
        </Card.Body>
    </Card>
    )
}

export default PlanetCard