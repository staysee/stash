import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Days from './Days/Days'
import StashContext from '../../StashContext'

class MealsPage extends React.Component {
    static contextType = StashContext

    render() {
        const { meals } = this.context;
        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
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

            </div>
        )
    }
}

export default MealsPage