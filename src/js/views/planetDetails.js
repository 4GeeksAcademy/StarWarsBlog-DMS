import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const PlanetDetails = () => {
    const { id } = useParams()
    const [planetDetails, setplanetDetails] = useState();
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/" + id)
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .then(res => {
                setplanetDetails(res)
            })
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id
                        }.jpg`} />
                </div>
                <div className="col">
                    <h1>{planetDetails && planetDetails.name}</h1>
                    <p>Example lorem ipsum, using my own writing here, yada yada yada</p>
                </div>
            </div>
            <div className="row text-danger">
                <hr></hr>
                <div>
                    <h5>Terrain</h5>
                    <p>{planetDetails && planetDetails.terrain}</p>
                </div>

                <div>
                    <h5>Gravity</h5>
                    <p>{planetDetails && planetDetails.gravity}</p>
                </div>

                <div>
                    <h5>Population</h5>
                    <p>{planetDetails && planetDetails.population}</p>
                </div>




            </div>

        </div>
    )
}

export default PlanetDetails;