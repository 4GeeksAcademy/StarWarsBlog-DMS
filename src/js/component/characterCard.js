import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext, useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"



const CharacterCard = ({ character, id }) => {
    const {store, actions} = useContext(Context);
    const [detail, setDetail] = useState();
    
    
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={
              id>= 16
                ? `https://starwars-visualguide.com/assets/img/characters/${
                    id + 1
                  }.jpg`
                : `https://starwars-visualguide.com/assets/img/characters/${
                    id
                  }.jpg`
            } />
        <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
                <p>birth year: {character.birth_year}</p>
                <p>gender: {character.gender}</p>
                <p>eye color: {character.eye_color}</p>
                <p>hair color: {character.hair_color}</p>
            </Card.Text>
            <div class="d-flex justify-content-between align-items-center">
                <Link className="btn btn-warning" to={`/character/details/${id}`}>Learn More</Link>
                <Button variant="primary"><FontAwesomeIcon icon={faHeart}/></Button>
            </div>
        </Card.Body>
    </Card>
    )
}

export default CharacterCard