import React, {useReducer} from 'react'
import axios from "axios";
import {TicketsContext} from "./ticketsContext";
import {ticketsReducer} from "./ticketsReducer";
import {FETCH_TICKETS, SHOW_LOADER} from "./types";

const url = process.env.REACT_APP_DB_URL;

export const TicketsState = ({children}) => {

    const initialState = {
        tickets: [],
        loading: false
    };

    const [state, dispatch] = useReducer(ticketsReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchTickets = async () => {
        showLoader();
        const key = await axios.get(`${url}/search`);
        const res = await axios.get(`${url}/tickets?searchId=${key.data.searchId}`);

        const payload = Object.keys(res.data.tickets).map(key => {
            return {
                ...res.data.tickets[key],
                id: key
            }
        });

        dispatch({type: FETCH_TICKETS, payload})
    };

    return (
        <TicketsContext.Provider value={{
            showLoader, fetchTickets,
            loading: state.loading,
            tickets: state.tickets
        }}>
            {children}
        </TicketsContext.Provider>
    )
};