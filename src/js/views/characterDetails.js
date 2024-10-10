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
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://placehold.co/500x300"/>
                </div>
                <div className="col">
                    <h1>Character {characterDetails && characterDetails.name}</h1>
                    <p>Example lorem ipsum, using my own writing here, yada yada yada</p>
                    </div>
            </div>
            <div className="row text-danger">
                <hr></hr>
                <div>
                    <h5>Hair Color</h5>
                    <p>{characterDetails && characterDetails.hair_color}</p>
                </div>

                <div>
                    <h5>Skin Color</h5>
                    <p>{characterDetails && characterDetails.hair_color}</p>
                </div>

                <div>
                    <h5>Hair Color</h5>
                    <p>{characterDetails && characterDetails.hair_color}</p>
                </div>




            </div>
            
        </div>
    )
}

export default CharacterDetails;