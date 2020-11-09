import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css';

function PageHeader(props) {
  return <h2 className="PageHeader">{props.title}</h2>;
}

export default PageHeader;

PageHeader.propTypes = {
  title: PropTypes.string,
};
