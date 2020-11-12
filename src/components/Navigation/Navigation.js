import React from 'react';
import TokenService from '../../services/token-service';
import { Link, NavLink } from 'react-router-dom';
import StashContext from '../../StashContext';
import './Navigation.css';

class Navigation extends React.Component {
  static contextType = StashContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.userLogOut();
  };

  render() {
    return (
      <div className="Navigation">
        <NavLink className="item" to="/recipes">
          Recipes
        </NavLink>
        <NavLink className="item" to="/recipes/meals">
          Meals
        </NavLink>
        <NavLink className="item" to="/recipes/new-recipe">
          Stash Recipe
        </NavLink>
        <Link className="item" onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }
}

export default Navigation;
