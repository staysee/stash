import React from 'react'
import Meals from './Meals/Meals'

function Days(props){
    return(
        <div className="Days">
            <h3>{props.day}</h3>
            <Meals type="breakfast" />
            <Meals type="lunch" />
            <Meals type="dinner" />
        </div>
    )
}

export default Days