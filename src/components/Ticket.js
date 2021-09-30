import React from 'react'
import DateTime from "luxon/src/datetime";

export const Ticket = ({ticket}) => {

    const transCount = (trans) => {
        let res;
        trans.length > 1 ? res = trans.length + " ПЕРЕСАДКИ" : (
            trans.length == 1 ? res = trans.length + " ПЕРЕСАДКА" : res = "ПЕРЕСАДОК НЕТ"
        );
        return res;
    };
    const fromStartToEndTime = (date, duration) => {
        return DateTime.fromISO(date).toFormat('HH:mm')
            + ' - '
            + DateTime.fromISO(date).plus({minutes: duration}).toFormat('HH:mm');
    };
    const flyTime = (duration) => {
        return Math.trunc(duration/60) + 'ч ' + duration%60 + 'м'
    };

    return (
        <div className="row justify-content-md-center">
            <div className="col">
                <div className="col">
                    {ticket.origin} - {ticket.destination}
                </div>
                <div className="col">
                    {fromStartToEndTime(ticket.date, ticket.duration)}
                </div>
            </div>
            <div className="col">
                <div className="col">
                    В ПУТИ
                </div>
                <div className="col">
                    {flyTime(ticket.duration)}
                </div>
            </div>
            <div className="col">
                <div className="col">
                    {transCount(ticket.stops)}
                </div>
                <div className="col">
                    {ticket.stops.length == 0 ? '-' : ticket.stops.toString()}
                </div>
            </div>
        </div>
    )
};