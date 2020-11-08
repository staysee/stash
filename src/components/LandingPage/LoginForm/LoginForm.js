import React from 'react';
import ValidationError from '../../ValidationError/ValidationError';
import TokenService from '../../../services/token-service';
import AuthApiService from '../../../services/auth-api-service';

import './LoginForm.css';

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSucces: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  };

  clearFields = () => {
    this.setState({
      username: '',
      password: '',
    });
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = this.state;

    AuthApiService.postLogin({
      username,
      password,
    })
      .then((res) => {
        this.clearFields();
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
        console.log(`ERROR:`, this.state.error);
      });
  };

  render() {
    return (
      <div className="LoginForm">
        <form className="FormFields" onSubmit={this.handleSubmitJwtAuth}>
          <div className="FormField">
            <label className="FormField__label" htmlFor="username">
              Username
            </label>
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
            <label className="FormField__label" htmlFor="password">
              Password
            </label>
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

          {this.state.error && <ValidationError message={this.state.error} />}

          <div className="FormField">
            <button className="FormField__button" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
