import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./characterCard";
import PlanetCard from "./planetCard";
import VehicleCard from "./vehicleCard";
import { Context } from "../store/appContext";

const DataDisplay = () => {
    const {store, actions} = useContext(Context)
    // const [characters, setCharacters] = useState([]);
    // const [planets, setPlanets] = useState([]);
    // const [vehicles, setVehicles] = useState([]);

// useEffect(() => {
    

//     // const intervalId = setInterval(() => {
//     //     console.log("update form store", store)
//     //     setCharacters([...store.characterList])
//     //     setVehicles([...store.vehiclesList])
//     //     setPlanets([...store.planetsList])
//     // }, 1000)
    
//     // return () => clearInterval(intervalId)
// }, [])
console.log("rendering with state", store.characterList)
return (
    <Container>
        <h1>Characters</h1>
        <hr />
        <div className="d-flex gap-1 overflow-auto">
            {store.characterList.map((character, index) => (
                <Col key={`${character.url}-${index}`}>
                    <CharacterCard character={character} id={index+1}/>
                </Col>
            ))}
        </div>
        <h1>Planets</h1>
        <hr />
        <div className="d-flex gap-1 overflow-auto">
        {store.planetsList.map((planet, index) => (
                <Col key={`${planet.url}-${index}`}>
                    <PlanetCard planet={planet} id={index+1}/>
                </Col>
            ))} 
        </div>
        <h1>Vehicles</h1>
        <hr />
        <div className="d-flex gap-1 overflow-auto">
        {store.vehiclesList.map((vehicle, index) => (
                <Col key={`${vehicle.url}-${index}`}>
                    <VehicleCard vehicle={vehicle} id={index+1} />
                </Col>
            ))} 
        </div>
    </Container>
)
}

export default DataDisplay