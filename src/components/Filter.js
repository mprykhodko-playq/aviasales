import React from 'react'

export const Filter = ({checkboxSwitch}) => {

    return (
        <div className="card">
            <h5 className="card-title">Количество пересадок</h5>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="4" name="all" onChange={checkboxSwitch} defaultChecked={true}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Все
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="0" name="none" onChange={checkboxSwitch}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Без пересадок
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="1" name="one" onChange={checkboxSwitch}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Одна пересадка
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="2" name="two" onChange={checkboxSwitch}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Две пересадки
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="3" name="three" onChange={checkboxSwitch}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Три пересадки
                </label>
            </div>
        </div>
    )
};