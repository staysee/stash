import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import './Placeholder.css';

function Placeholder(props) {
  return (
    <div className="Placeholder">
      <FontAwesomeIcon className="images-icon" icon={faImages} />
      <div className="placeholder-msg">
        <p>{props.message}</p>
        <p>
          {props.verb} a {props.item} to have it show up here!
        </p>
      </div>
    </div>
  );
}

export default Placeholder;
