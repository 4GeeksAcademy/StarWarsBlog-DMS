import React from "react";
import Card from "react-bootstrap/Card"


const CharacterCard = ({ character }) => {
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
                birth year: {character.birth_year}
                gender: {character.gender}
                eye color: {character.eye_color}
                hair color: {character.hair_color}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default CharacterCard