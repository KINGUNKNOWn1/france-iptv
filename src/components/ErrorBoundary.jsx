import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Application render error:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <main className="min-h-screen bg-brand-black text-white flex items-center justify-center px-6">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Deze pagina kon niet worden geladen</h1>
            <p className="text-gray-400 mb-8">
              Er ging iets mis tijdens het laden. Probeer de pagina opnieuw te openen.
            </p>
            <button type="button" onClick={this.handleReload} className="btn-primary">
              Pagina opnieuw laden
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
