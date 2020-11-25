/* eslint-disable max-len */
import React from 'react';
import { Route, Switch } from 'react-router';
import App from '../App/App';
import LandingPage from '../LandingPage/LandingPage';
import NotFoundPage from '../../NotFoundPage';
import Logo from '../Logo/Logo';
import PrivateRoute from '../Utils/PrivateRoute';
import MainContext from '../../MainContext';

import './Main.css';

class Main extends React.Component {
  static contextType = MainContext;

  state = {
    loading: false
  };

  componentDidMount() {
    localStorage.setItem('userLoggedIn', false);
  }

  setLoading = (status) => {
    this.setState({
      loading: status,
    });
  };

  userLogIn = () => {
    localStorage.setItem('userLoggedIn', true);
  };

  render() {
    const contextValue = {
      loading: this.state.loading,
      setLoading: this.setLoading,
      userLogIn: this.userLogIn,
    };

    const userLoggedIn = localStorage.getItem('userLoggedIn');
    console.log(userLoggedIn);

    return (
      <MainContext.Provider value={contextValue}>
        <div id="main" className={`Main ${userLoggedIn ? 'app-background' : 'gradient'}`}>
          <Logo />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute path="/recipes" component={App} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </MainContext.Provider>
    );
  }
}

export default Main;
