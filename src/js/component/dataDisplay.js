import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./characterCard";
import PlanetCard from "./planetCard";
import VehicleCard from "./vehicleCard";
import { Context } from "../store/appContext";

const DataDisplay = () => {
    const {store, actions} = useContext(Context)
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);

useEffect(() => {
    actions.loadSomeData()

    const intervalId = setInterval(() => {
        console.log("update form store", store)
        setCharacters([...store.characterList])
        setVehicles([...store.vehiclesList])
        setPlanets([...store.planetsList])
    }, 1000)
    
    return () => clearInterval(intervalId)
}, [actions, store])
console.log("rendering with state", {characters, planets, vehicles})
return (
    <Container>
        <Row>
            {characters.map((character, index) => (
                <Col key={`${character.url}-${index}`} md={4}>
                    <CharacterCard character={character} />
                </Col>
            ))}
        </Row>
        <Row>
        {planets.map((planet, index) => (
                <Col key={`${planets.url}-${index}`} md={4}>
                    <PlanetCard planet={planet} />
                </Col>
            ))} 
        </Row>
        <Row>
        {vehicles.map((vehicle, index) => (
                <Col key={`${vehicles.url}-${index}`} md={4}>
                    <VehicleCard vehicle={vehicle} />
                </Col>
            ))} 
        </Row>
    </Container>
)
}

export default DataDisplay