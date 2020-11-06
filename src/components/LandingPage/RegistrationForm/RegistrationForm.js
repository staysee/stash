import React from 'react'
import ValidationError from '../../ValidationError/ValidationError'
import AuthApiService from '../../../services/auth-api-service'

import './RegistrationForm.css'
import TokenService from '../../../services/token-service'

class RegistrationForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    constructor(props){
        super(props);

        this.state = {
            username: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            repeatPassword: {
                value: '',
                touched: false
            },
            firstname: {
                value: '',
                touched: false
            },
            lastname: {
                value: '',
                touched: false
            },
        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: { 
                value: value,
                touched: true
            } 
        })
    }

    validateUserName() {
        const username = this.state.username.value.trim()
        if (username.length === 0) {
            return 'Username is required'
        } else if (username.length < 3) {
            return 'Username must be at least 3 characters long'
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
        if (password.length === 0) {
            return 'Password is required';
          } else if (password.length < 6 || password.length > 72) {
            return 'Password must be between 6 and 72 characters long';
        //   } else if (!password.match(/[0-9]/)) {
          } else if (!password.match(REGEX_UPPER_LOWER_NUMBER_SPECIAL)) {
            return 'Password must contain 1 upper case, lower case, number and special character';
          }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
    
        if (repeatPassword !== password) {
          return 'Passwords do not match';
        }
    }

    // handleSubmitJwtAuth = ev => {
    //     ev.preventDefault()
    //     this.setState({ error: null })
    //     const { username, password } = ev.target

    //     AuthApiService.postLogin({
    //         username: username.value,
    //         password: password.value
    //     })
    //         .then(res => {
    //             username.value = ''
    //             password.value = ''
    //             TokenService.saveAuthToken(res.authToken)
    //             this.props.onLoginSuccess()
    //             // this.handleLoginSuccess()
    //         })
    //         .catch(res => {
    //             this.setState({ error: res.error})
    //             console.log(`ERROR:`, this.state.error)
    //         })
    // }

    // handleJWTLogin = (username, password) => {
    //     AuthApiService.postLogin({
    //         username: username,
    //         password: password
    //     })
    //         .then(res => {
    //             TokenService.saveAuthToken(res.authToken)
    //             console.log(`NEW REGISTERED USER IS LOGGED IN`)
    //         })
    //         .catch(res => {
    //             this.setState({ error: res.error})
    //             console.log(`ERROR: `, this.state.error)
    //         })
    // }
    clearFields = () => {
        this.setState({
            username: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            repeatPassword: {
                value: '',
                touched: false
            },
            firstname: {
                value: '',
                touched: false
            },
            lastname: {
                value: '',
                touched: false
            },
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { firstname, lastname, username, password } = e.target;

        this.setState({ error: null })
        //POST to server
        AuthApiService.postUser({
            firstname: firstname.value,
            lastname: lastname.value,
            username: username.value,
            password: password.value,
        })
            .then(user => {
                this.clearFields()
                TokenService.saveAuthToken(user.authToken)
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const usernameError = this.validateUserName()
        const passwordError = this.validatePassword()
        const repeatPasswordError = this.validateRepeatPassword()

        return (
            <form className="RegistrationForm FormFields" onSubmit={this.handleSubmit}>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="firstname">First Name</label>
                    <input 
                        type="text" 
                        id="firstname" 
                        className="FormField__input" 
                        placeholder="Enter your First Name" 
                        name="firstname" 
                        onChange={this.handleChange}
                    />
                </div>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="lastname">Last Name</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        className="FormField__input" 
                        placeholder="Enter your Last Name" 
                        name="lastname" 
                        onChange={this.handleChange}
                    />
                </div>

                <div className="FormField">
                    <label className="FormField__label" htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="FormField__input" 
                        placeholder="Enter your username" 
                        name="username"
                        onChange={this.handleChange}
                    />
                    {this.state.username.touched && (<ValidationError message={usernameError} />)}
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
                    {this.state.password.touched && (<ValidationError message={passwordError} />)}
                </div>
                <div className="FormField">
                    <label className="FormField__label" htmlFor="repeatPassword">Repeat Password</label>
                    <input 
                        type="password" 
                        id="repeatpassword" 
                        className="FormField__input" 
                        placeholder="Repeat password to confirm" 
                        name="repeatPassword" 
                        onChange={this.handleChange}
                    />
                    {this.state.repeatPassword.touched && (<ValidationError message={repeatPasswordError} />)}
                </div>

                {this.state.error && <ValidationError message={this.state.error} />}

                <div className="FormField">
                    <button 
                        type="submit" 
                        className="FormField__registration-button"
                        disabled={
                            this.validateUserName() ||
                            this.validatePassword() ||
                            this.validateRepeatPassword()
                        }
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }
}

export default RegistrationForm