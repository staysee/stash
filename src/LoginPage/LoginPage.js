import React from 'react'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
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

    render() {
        return (
            <form className="FormFields" onSubmit={this.handleSubmit}>
    
                    <div className="FormField">
                        <label className="FormField__label" htmlFor="email">E-mail Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="FormField__input" 
                            placeholder="Enter your email" 
                            name="email" 
                            value={this.state.email}
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
                        <button className="FormField__button">Log In</button>
                        <Link to='/'>Create an Account</Link>
                    </div>
                </form>
        )
    }
}

export default LoginPage