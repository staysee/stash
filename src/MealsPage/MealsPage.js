import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Days from './Days/Days'

function MealsPage () {
    return (
        <div className="MealsPage">
            <PageHeader title="Meal Plan" />
            <Days day="Unassigned" />
            <Days day="Monday" />
            <Days day="Tuesday" />
            <Days day="Wednesday" />
            <Days day="Thursday" />
            <Days day="Friday" />
            <Days day="Saturday" />
            <Days day="Sunday" />
        </div>
    )
}

export default MealsPage