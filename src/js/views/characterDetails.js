import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const CharacterDetails = () => {
    const {id} = useParams()
    const [characterDetails, setCharacterDetails] = useState();
    useEffect(() => {
        fetch("https://swapi.dev/api/people/"+id)
        .then(res => {
            if (!res.ok ) {
                throw new Error()
            }
            return res.json()
        })
        .then(res => {
            setCharacterDetails(res)
        })
    })
    return (
        <h1>Character {characterDetails && characterDetails.name}</h1>
    )
}

export default CharacterDetails;