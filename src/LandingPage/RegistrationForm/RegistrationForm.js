import React from 'react'
import { Link } from 'react-router-dom'

import './RegistrationForm.css'

class RegistrationForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('The registration form was submitted with the following data:');
        console.log(this.state);

        //POST to server
    }

    render() {
        return (
            <form className="RegistrationForm FormFields" onSubmit={this.handleSubmit}>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        className="FormField__input" 
                        placeholder="Enter your First Name" 
                        name="firstName" 
                        onChange={this.handleChange}
                    />
                </div>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        className="FormField__input" 
                        placeholder="Enter your Last Name" 
                        name="lastName" 
                        onChange={this.handleChange}
                    />
                </div>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="email">E-mail Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="FormField__input" 
                        placeholder="Enter your email" 
                        name="email"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="FormField__input" 
                        placeholder="Enter password" 
                        name="password" 
                        onChange={this.handleChange}
                    />
                </div>

                <div className="FormField">
                    <button className="FormField__button">
                        <Link to="/stashed-recipes">Sign Up</Link>
                    </button>
                    <Link to='/login'>Already have an account?</Link>
                </div>
            </form>
        )
    }
}

export default RegistrationForm