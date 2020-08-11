import React from 'react'
import Meals from './Meals/Meals'
// import StashContext from '../../StashContext'

import './Days.css'

class Days extends React.Component{
    render() {
        const { day, meals } = this.props

        return(
            <div className="Days">
                <h3>{day}</h3>
                {meals && Object.keys(meals).map( (meal, key) => 
                    <Meals
                        key={key}
                        meal={meals[meal]}
                        type={meal}
                    />
                )}
            </div>
        )

    }
}

export default Days