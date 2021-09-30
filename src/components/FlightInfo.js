import React from 'react'
import {Ticket} from "./Ticket";

export const FlightInfo = ({ticket}) => {

    const logoURL = `//pics.avs.io/99/36/${ticket.carrier}.png`;

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col">
                    <h1>{ticket.price}</h1>
                </div>
                <div className="col">
                </div>
                <div className="col">
                    <img src={logoURL} className="rounded float-start"></img>
                </div>
            </div>
            <Ticket ticket={ticket.segments[0]}/>
            <Ticket ticket={ticket.segments[1]}/>
        </div>
    )
};