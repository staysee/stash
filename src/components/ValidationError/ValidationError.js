import React from 'react';
import PropTypes from 'prop-types';
import './ValidationError.css';

function ValidationError(props) {
  const { message } = props;

  if (message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}

export default ValidationError;

ValidationError.propTypes = {
  message: PropTypes.string,
};
