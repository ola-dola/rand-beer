import { Component } from 'react';
// import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically we'll send this to something like Sentry or Trackjs etc
    console.error('ErrorBoundary caught an error', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className='error-container'>
          <h2>Unexpected error</h2>
          <p>There was an unexpected error. <br/> Click the button below to refresh the page</p>
          <button onClick={() => window.location.reload()}>Refresh page</button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
