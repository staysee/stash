import React from 'react';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
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