import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-stash.png';
import './Logo.css';

function Logo() {
  return (
    <div className="Logo">
      <Link to="/recipes">
        <img src={logo} alt="Stash logo" />
      </Link>
    </div>
  );
}

export default Logo;
