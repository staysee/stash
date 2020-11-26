import React from 'react';
import PropTypes from 'prop-types';
import ValidationError from '../../ValidationError/ValidationError';
import AuthApiService from '../../../services/auth-api-service';
import TokenService from '../../../services/token-service';
import MainContext from '../../../MainContext';

import './RegistrationForm.css';
import '../../../media-queries.css';

class RegistrationForm extends React.Component {
  static contextType = MainContext;

  static defaultProps = {
    onRegistrationSuccess: () => {},
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
      repeatPassword: {
        value: '',
        touched: false,
      },
      firstname: {
        value: '',
        touched: false,
      },
      lastname: {
        value: '',
        touched: false,
      },
    };
  }

  handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: {
        value,
        touched: true,
      },
    });
  };

  validateUsername = () => {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return 'Username is required';
    } if (username.length < 3) {
      return 'Username must be at least 3 characters long';
    }
  };

  validatePassword = () => {
    const password = this.state.password.value.trim();
    // eslint-disable-next-line max-len
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
    if (password.length === 0) {
      return 'Password is required';
    } if (password.length < 6 || password.length > 72) {
      return 'Password must be between 6 and 72 characters long';
    } if (!password.match(REGEX_UPPER_LOWER_NUMBER_SPECIAL)) {
      return 'Password must contain 1 upper case, lower case, number and special character';
    }
  };

  validateRepeatPassword = () => {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return 'Passwords do not match';
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
      repeatPassword: {
        value: '',
        touched: false,
      },
      firstname: {
        value: '',
        touched: false,
      },
      lastname: {
        value: '',
        touched: false,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    this.context.setLoading(true);

    const {
      firstname: { value: firstnameVal },
      lastname: { value: lastnameVal },
      username: { value: usernameVal },
      password: { value: passwordVal },
    } = this.state;

    // POST to Server
    AuthApiService.postUser({
      firstname: firstnameVal,
      lastname: lastnameVal,
      username: usernameVal,
      password: passwordVal,
    })
      .then((user) => {
        this.clearFields();
        TokenService.saveAuthToken(user.authToken);
        this.context.setLoading(false);
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.context.setLoading(false);
        this.setState({ error: res.error });
      });
  };

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <form className="RegistrationForm FormFields" onSubmit={this.handleSubmit}>
        <div className="FormField">
          <label className="FormField__label" htmlFor="firstname">
            First Name
            <input
              type="text"
              id="firstname"
              className="FormField__input"
              placeholder="Enter your First Name"
              name="firstname"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="FormField">
          <label className="FormField__label" htmlFor="lastname">
            Last Name
            <input
              type="text"
              id="lastname"
              className="FormField__input"
              placeholder="Enter your Last Name"
              name="lastname"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="FormField">
          <label className="FormField__label" htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              className="FormField__input"
              placeholder="Enter your username"
              name="username"
              onChange={this.handleChange}
            />
          </label>
          {this.state.username.touched && <ValidationError message={usernameError} />}
        </div>

        <div className="FormField">
          <label className="FormField__label" htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              className="FormField__input"
              placeholder="Enter password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
          {this.state.password.touched && <ValidationError message={passwordError} />}
        </div>
        <div className="FormField">
          <label className="FormField__label" htmlFor="repeatPassword">
            Repeat Password
            <input
              type="password"
              id="repeatpassword"
              className="FormField__input"
              placeholder="Repeat password to confirm"
              name="repeatPassword"
              onChange={this.handleChange}
            />
          </label>
          {this.state.repeatPassword.touched && <ValidationError message={repeatPasswordError} />}
        </div>

        {this.state.error && <ValidationError message={this.state.error} />}

        <div className="FormField">
          <button
            type="submit"
            className="FormField__button"
            disabled={
              this.validateUsername() || this.validatePassword() || this.validateRepeatPassword()
            }
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;

RegistrationForm.propTypes = {
  onRegistrationSuccess: PropTypes.func
};
