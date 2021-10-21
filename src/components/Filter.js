import React from 'react'

const FiltersRow = ({checkboxSwitch, name, value}) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value={value} onChange={checkboxSwitch} defaultChecked={name==="Все"}/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                {name}
            </label>
        </div>
    )
};

export const Filter = ({checkboxSwitch}) => {

    const stops = ['Без пересадок', 'Одна пересадка', 'Две пересадки', 'Три пересадки', 'Все'];

    return (
        <div className="card">
            <h5 className="card-title">Количество пересадок</h5>
            {stops.map((stop, i) => (
                <FiltersRow checkboxSwitch={checkboxSwitch} name={stop} value={i} key={i}/>
            ))}
        </div>
    )
};
