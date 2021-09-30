import React from 'react'
import {FlightInfo} from "./FlightInfo";

export const TicketsList = ({tickets}) => {
    return (
        <ul className="list-group">
            {tickets.map(ticket => (
                <li
                    className="list-group-item"
                    key={ticket.id}
                >
                    <FlightInfo ticket={ticket}/>
                </li>
            ))}
        </ul>
    )
};