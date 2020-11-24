import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArchive,
  faPencilAlt,
  faSignOutAlt,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import StashContext from '../../StashContext';
import './Navigation.css';

class Navigation extends React.Component {
  static contextType = StashContext;

  handleLogoutClick = () => {
    document.body.classList.remove('html-bg');
    TokenService.clearAuthToken();
    this.context.userLogOut();
  };

  render() {
    return (
      <div className="Navigation">
        <NavLink className="item" to="/recipes">
          <FontAwesomeIcon className="nav-icon" icon={faArchive} />
          Recipes
        </NavLink>
        <NavLink className="item" to="/recipes/meals">
          <FontAwesomeIcon className="nav-icon" icon={faUtensils} />
          Meals
        </NavLink>
        <NavLink className="item" to="/recipes/new-recipe">
          <FontAwesomeIcon className="nav-icon" icon={faPencilAlt} />
          Stash Recipe
        </NavLink>
        <Link className="item" onClick={this.handleLogoutClick} to="/">
          <FontAwesomeIcon className="nav-icon" icon={faSignOutAlt} />
          Logout
        </Link>
      </div>
    );
  }
}

export default Navigation;
