/* eslint-disable react/no-did-mount-set-state */
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
import '../../media-queries.css';

class Main extends React.Component {
  static contextType = MainContext;

  state = {
    loading: false,
    mainApp: 'gradient'
  };

  componentDidMount() {
    const background = localStorage.getItem('userLoggedIn') ? 'app-background' : 'gradient';

    this.setState({
      mainApp: background
    });
  }

  setLoading = (status) => {
    this.setState({
      loading: status
    });
  };

  userLogIn = () => {
    localStorage.setItem('userLoggedIn', true);
    this.setState({
      mainApp: 'app-background'
    });
  };

  userLogOut = () => {
    localStorage.setItem('userLoggedIn', false);
    this.setState({
      mainApp: 'gradient'
    });
  };

  render() {
    const contextValue = {
      loading: this.state.loading,
      setLoading: this.setLoading,
      userLogIn: this.userLogIn
    };

    return (
      <MainContext.Provider value={contextValue}>
        <div id="main" className={`Main ${this.state.mainApp}`}>
          <Logo />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute path="/recipes" component={App} handleLogOut={this.userLogOut} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </MainContext.Provider>
    );
  }
}

export default Main;
