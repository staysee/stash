import React from 'react'
import TokenService from '../../service/token-service'
import { Link } from 'react-router-dom'

import './LoginPage.css'

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
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
        console.log('The log in form was submitted with the following data:');
        console.log(this.state);
    }
    
    handleSubmitBasicAuth = e => {
        e.preventDefault()
        const { username, password } = e.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )

        username.value = ''
        password.value = ''
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="LoginPage__image">
                    <img src="https://via.placeholder.com/100" alt="LoginPage" />
                </div>
                <form className="FormFields" onSubmit={this.handleSubmitBasicAuth}>
    
                    <div className="FormField">
                        <label className="FormField__label" htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="FormField__input" 
                            placeholder="Enter your username" 
                            name="username" 
                            value={this.state.username}
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
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <button className="FormField__button">
                            <Link to='/stashed-recipes'>Log In</Link>
                        </button>
                        <Link to='/'>Create an Account</Link>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default LoginPage