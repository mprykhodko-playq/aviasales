import React, {Fragment, useContext, useEffect, useState} from 'react'
import {TicketsList} from "../components/TicketsList";
import {Filter} from "../components/Filter";
import {TicketsContext} from "../context/ticketsContext";
import {Loader} from "../components/Loader";

let checks = ['4'];

export const Home = () => {

    const {loading, tickets, fetchTickets} = useContext(TicketsContext);

    const [actualTickets, setActualTickets] = useState(tickets);

    useEffect(() => {
        fetchTickets();
    },[]);

    const checkboxSwitch = (event) => {
        if (event.target.checked) {
            if (!checks.includes(event.target.value)) {
                checks.push(event.target.value);
                console.log(checks);
            }
        } else {
            if (checks.includes(event.target.value)){
                checks = checks.filter(item => item !== event.target.value);
                console.log(checks);
            }
        }
        setActualTickets(
            tickets.filter(t => checks.includes(t.segments[0].stops.length.toString()) && checks.includes(t.segments[0].stops.length.toString()))
        );
    };

    return (
        <Fragment>
            <Filter checkboxSwitch={checkboxSwitch}/>
            {
                loading
                    ? <Loader/>
                    : <TicketsList tickets={actualTickets}/>
            }
        </Fragment>
    )
};