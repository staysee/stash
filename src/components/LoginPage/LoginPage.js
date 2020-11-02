import React from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Link } from 'react-router-dom'
import StashContext from '../../StashContext'

import './LoginPage.css'

class LoginPage extends React.Component {
    static contextType = StashContext;

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

    handleLoginSuccess = () => {
        console.log('LOG IN SUCCES!')
        this.context.userLogIn()
        console.log(`context log in:`, this.context)
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/recipes'
        history.push(destination)
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.handleLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error})
            })
    }



    render() {
        return (
            <div className="LoginPage">
                <form className="FormFields" onSubmit={this.handleSubmitJwtAuth}>
    
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
                            Log In
                        </button>
                        <Link to='/'>Create an Account</Link>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default LoginPage