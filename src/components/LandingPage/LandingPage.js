import React from 'react'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import LoginForm from './LoginForm/LoginForm'

import './LandingPage.css'

class LandingPage extends React.Component {
    state = {
        accountExist: false
    }

    //move all log in function to this landing page
    
    render() {
        return (
            <div className="LandingPage">
                <div className="LandingPage__description">
                    Stash is a place where you can keep all of your recipes in one place for safekeeping. Anytime you're ready to start cooking up a meal, open up your drawer where you stashed away all of your delicious recipes and easily find what you're looking for! Stash can also help you plan out your meals for the week so you don't have to waste time thinking of your next meal!
                </div>
    
                {this.state.accountExist
                    ?   <div>
                            <LoginForm />
                            <button onClick={ e => {this.setState({accountExist: false})}}>Create a new account</button>
                        </div>
                        
                    :   <div>
                            <RegistrationForm />
                            <button onClick={ e => {this.setState({accountExist: true})}}>Already have an account?</button>
                        </div>
                    }
            </div>
        )
    }

}

export default LandingPage