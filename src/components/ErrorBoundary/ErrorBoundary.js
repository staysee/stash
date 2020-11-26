import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    reportError(error, info);
  }

  render() {
    return this.state.hasError ? <div>Oh no! There was a problem!</div> : this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node
};
