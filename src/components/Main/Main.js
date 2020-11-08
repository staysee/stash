import React from 'react';
import { Route, Switch } from 'react-router';
import App from '../App/App';
import LandingPage from '../LandingPage/LandingPage';
import NotFoundPage from '../../NotFoundPage';
import Logo from '../Logo/Logo';
import PrivateRoute from '../Utils/PrivateRoute';

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Logo />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/recipes" component={App} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Main;
