import React from 'react';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return <h1>Sorry! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
