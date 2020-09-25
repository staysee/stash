import React from 'react'
import Meals from './Meals/Meals'
// import StashContext from '../../StashContext'

import './Days.css'

class Days extends React.Component{
    render() {
        const { day, meals } = this.props

        const mealsList = meals
            .filter( meal => meal.day === day)
            .map( (meal, key) => 
                <Meals 
                    key={key}
                    meal={meal}
                />
            )
        
        return(
            <div className="Days">
                <h3>{day}</h3>
                {meals && mealsList}
            </div>
        )

    }
}

export default Days