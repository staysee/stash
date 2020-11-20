import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MainContext from '../../MainContext';
import './LandingPage.css';

class LandingPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
    location: {
      state: () => {},
    }
  };

  static contextType = MainContext;

  state = {
    accountExist: false,
  };

  handleSuccess = () => {
    console.log('SUCCESS LOGGING IN/REGISTRATION');
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/recipes';
    history.push(destination);
  };

  render() {
    const { accountExist } = this.state;
    const { loading } = this.context;
    const showForms = () => {
      if (accountExist) {
        return (
          <ErrorBoundary>
            <div>
              <LoginForm onLoginSuccess={this.handleSuccess} />
              <button
                type="button"
                className="account-link"
                onClick={() => {
                  this.setState({ accountExist: false });
                }}
              >
                Create a new account
              </button>
            </div>
          </ErrorBoundary>
        );
      }
      return (
        <ErrorBoundary>
          <div>
            <RegistrationForm onRegistrationSuccess={this.handleSuccess} />
            <button
              type="button"
              className="account-link"
              onClick={() => {
                this.setState({ accountExist: true });
              }}
            >
              Already have an account?
            </button>
          </div>
        </ErrorBoundary>
      );
    };

    return (
      <div className="LandingPage">
        <div className="container">
          <div className="LandingPage__description">
            Stash is a place where you can keep all of your recipes in one place for safekeeping.
            Anytime you&apos;re ready to start cooking up a meal, open up your drawer where you
            stashed away all of your delicious recipes and easily find what you&apos;re looking for!
            Stash can also help you plan out your meals for the week so you don&apos;t have to
            waste time thinking of your next meal!
          </div>

          {loading ? (
            <Loader className="loader-grid" type="Grid" color="#43BA73" height={80} width={80} />
          ) : (
            showForms()
          )}
        </div>
      </div>
    );
  }
}

export default LandingPage;

LandingPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};
