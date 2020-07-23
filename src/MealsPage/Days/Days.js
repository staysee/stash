import React from 'react'
import Meals from './Meals/Meals'

import './Days.css'

function Days({day, meals}){
    console.log(meals)
    console.log(`day`, day)
    return(
        <div className="Days">
            <h3>{day}</h3>

            {meals && meals.map( meal => <Meals meal={meal} />)}
        </div>
    )
}

export default Days