import React from 'react'
import Meals from './Meals/Meals'
import PropTypes from 'prop-types'

import './Days.css'

class Days extends React.Component{
    render() {
        const { day, meals } = this.props
        let mealsList;

        if (meals[day]) {
            mealsList = meals[day]
                .map((meal, key) => 
                    <Meals 
                        key={key}
                        day={day}
                        meal={meal}
                    />
            )
        }
        
        return(
            <div className="Days">
                <h3>{day}</h3>
                {meals && meals[day] && mealsList}
            </div>
        )

    }
}

export default Days

Days.propTypes = {
    meals: PropTypes.object,
    days: PropTypes.oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
}