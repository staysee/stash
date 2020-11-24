/* eslint-disable max-len */
import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MainContext from '../../MainContext';
import bgImage1 from '../../assets/rayia-soderberg-ev_GpmUPOwo-unsplash.jpg';
import bgImage2 from '../../assets/kristen-kaethler-vaGL6AJkUb4-unsplash.jpg';
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
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/recipes';
    document.body.classList.add('html-bg');
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
        <Parallax bgImage={bgImage1} strength={500}>
          <div style={{ height: '100vh' }}>
            <div className="header">
              <p>Keep all of your recipes in one place for safekeeping. Stash can also help you plan out your meals for the week so you don&apos;t have to waste time thinking of your next meal!</p>
            </div>
          </div>
        </Parallax>

        <div className="LandingPage__description">

          <p>Ready to stash your recipes?</p>
          {loading ? (
            <Loader className="loader-grid" type="Grid" color="#43BA73" height={80} width={80} />
          ) : (
            showForms()
          )}

        </div>

        <Parallax bgImage={bgImage2} strength={100}>
          <div style={{ height: 100 }} />
        </Parallax>
      </div>
    );
  }
}

export default LandingPage;

LandingPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};
