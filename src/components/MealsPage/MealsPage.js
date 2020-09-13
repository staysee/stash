import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Days from './Days/Days'
import StashContext from '../../StashContext'

class MealsPage extends React.Component {
    static contextType = StashContext

    render() {
        const { meals } = this.context;
        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        // const days = Object.keys(meals)
        
        return (
            <div className="MealsPage">
                <PageHeader title="Meal Plan" />
                {daysOfWeek.map( (aDay, key) => 
                    <Days 
                        key={key}
                        day={aDay}
                        meals={meals}
                    />
                )}

                {/* {days.map( (day, key) => 
                    <Days 
                        key={key}
                        day={day} 
                        meals={meals[day]} 
                    />
                )} */}
            </div>
        )
    }
}

export default MealsPage