import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const VehicleDetails = () => {
    const { id } = useParams()
    const [vehicleDetails, setvehicleDetails] = useState();
    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/" + id)
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                return res.json()
            })
            .then(res => {
                setvehicleDetails(res)
            })
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id
                        }.jpg`} />
                </div>
                <div className="col">
                    <h1>{vehicleDetails && vehicleDetails.name}</h1>
                    <p>Example lorem ipsum, using my own writing here, yada yada yada</p>
                </div>
            </div>
            <div className="row text-danger">
                <hr></hr>
                <div>
                    <h5>Crew</h5>
                    <p>{vehicleDetails && vehicleDetails.crew}</p>
                </div>

                <div>
                    <h5>Model</h5>
                    <p>{vehicleDetails && vehicleDetails.model}</p>
                </div>

                <div>
                    <h5>Passengers</h5>
                    <p>{vehicleDetails && vehicleDetails.passengers}</p>
                </div>




            </div>

        </div>
    )
}

export default VehicleDetails;