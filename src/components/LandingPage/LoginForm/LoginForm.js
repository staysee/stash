import React from 'react';
import ValidationError from '../../ValidationError/ValidationError';
import TokenService from '../../../services/token-service';
import AuthApiService from '../../../services/auth-api-service';
import MainContext from '../../../MainContext';

import './LoginForm.css';

class LoginForm extends React.Component {
  static contextType = MainContext;
  static defaultProps = {
    onLoginSucces: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: '',
        touched: false,
      },
      password: {
        value: '',
        touched: false,
      },
    };
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: {
        value: value,
        touched: true,
      },
    });
  };

  validateUsername = () => {
    const username = this.state.username.value.trim();

    if (username.length === 0) {
      return 'Username is required';
    }
  };

  validatePassword = () => {
    const password = this.state.password.value.trim();

    if (password.length === 0) {
      return 'Password is required';
    }
  };

  clearFields = () => {
    this.setState({
      username: {
        value: '',
        touched: false,
      },
      password: {
        value: '',
        touched: false,
      },
    });
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    this.context.setLoading(true);
    const {
      username: { value: usernameVal },
      password: { value: passwordVal },
    } = this.state;

    AuthApiService.postLogin({
      username: usernameVal,
      password: passwordVal,
    })
      .then((res) => {
        // setTimeout(() => {
        this.clearFields();
        TokenService.saveAuthToken(res.authToken);
        this.context.setLoading(false);
        this.props.onLoginSuccess();
        // }, 3000);
      })
      .catch((res) => {
        this.context.setLoading(false);
        this.setState({ error: res.error });
        console.log(`ERROR:`, this.state.error);
      });
  };

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();

    return (
      <div className="LoginForm">
        <div className="demo">
          <p>Demo Account</p>
          <p>Username: demouser</p>
          <p>Password: P@ssword1!</p>
        </div>

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
              onChange={this.handleChange}
            />
            {this.state.username.touched && <ValidationError message={usernameError} />}
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
              onChange={this.handleChange}
            />
            {this.state.password.touched && <ValidationError message={passwordError} />}
          </div>

          {this.state.error && <ValidationError message={this.state.error} />}

          <div className="FormField">
            <button
              type="submit"
              className="FormField__button"
              disabled={this.validateUsername() || this.validatePassword()}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
