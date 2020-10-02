import React from 'react'
import RegistrationForm from './RegistrationForm/RegistrationForm'

import './LandingPage.css'

class LandingPage extends React.Component {
    render(){
        const { history } = this.props

        return (
            <div className="LandingPage">
                <div className="LandingPage__description">
                    Stash is a place where you can keep all of your recipes in one place for safekeeping. Anytime you're ready to start cooking up a meal, open up your drawer where you stashed away all of your delicious recipes and easily find what you're looking for! Stash can also help you plan out your meals for the week so you don't have to waste time thinking of your next meal!
                </div>
    
                <RegistrationForm history={history} />
            </div>
        )
    }

}

export default LandingPage