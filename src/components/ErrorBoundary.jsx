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
            <h1 className="text-3xl font-bold mb-4">Cette page n'a pas pu être chargée</h1>
            <p className="text-gray-400 mb-8">
              Une erreur de connexion est survenue. Vérifiez votre connexion internet et réessayez.
            </p>
            <button type="button" onClick={this.handleReload} className="btn-primary">
              Recharger la page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
