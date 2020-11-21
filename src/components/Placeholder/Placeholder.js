import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Placeholder.css';

function Placeholder(props) {
  return (
    <div className="Placeholder">
      <FontAwesomeIcon className="images-icon" icon={props.icon} />
      <div className="placeholder-msg">
        <p>{props.message}</p>
        <p>
          {props.verb}
          {' '}
          a
          {props.item}
          {' '}
          to have it show up here!
        </p>
      </div>
    </div>
  );
}

export default Placeholder;

Placeholder.propTypes = {
  icon: PropTypes.object,
  message: PropTypes.string,
  verb: PropTypes.string,
  item: PropTypes.string
};

Placeholder.defaultProps = {
  message: '',
  verb: '',
  item: ''
};
