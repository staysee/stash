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
    loading: false,
  };

  setLoading = (status) => {
    this.setState({
      loading: status,
    });
  };

  render() {
    const contextValue = {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };

    return (
      <MainContext.Provider value={contextValue}>
        <div className="Main">
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
