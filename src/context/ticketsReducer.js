import {FETCH_TICKETS, SHOW_LOADER} from "./types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [FETCH_TICKETS]: (state, {payload}) => ({...state, tickets: payload, loading: false}),
    DEFAULT: state => state
};

export const ticketsReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};