import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';
import Loader from 'react-loader-spinner';
import MainContext from '../../MainContext';

import './LandingPage.css';

class LandingPage extends React.Component {
  static contextType = MainContext;

  state = {
    accountExist: false,
  };

  handleSuccess = () => {
    console.log(`SUCCESS LOGGING IN/REGISTRATION`);
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
          <div>
            <LoginForm onLoginSuccess={this.handleSuccess} />
            <button
              className="account-link"
              onClick={(e) => {
                this.setState({ accountExist: false });
              }}
            >
              Create a new account
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <RegistrationForm onRegistrationSuccess={this.handleSuccess} />
            <button
              className="account-link"
              onClick={(e) => {
                this.setState({ accountExist: true });
              }}
            >
              Already have an account?
            </button>
          </div>
        );
      }
    };

    return (
      <div className="LandingPage">
        <div className="LandingPage__description">
          Stash is a place where you can keep all of your recipes in one place for safekeeping.
          Anytime you're ready to start cooking up a meal, open up your drawer where you stashed
          away all of your delicious recipes and easily find what you're looking for! Stash can also
          help you plan out your meals for the week so you don't have to waste time thinking of your
          next meal!
        </div>

        {loading ? (
          <Loader className="loader-grid" type="Grid" color="#43BA73" height={40} width={40} />
        ) : (
          showForms()
        )}
      </div>
    );
  }
}

export default LandingPage;
