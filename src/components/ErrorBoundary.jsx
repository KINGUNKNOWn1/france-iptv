import React from 'react';

// After a new deploy, a browser tab left open from before still holds the old
// JS bundle. Clicking through to a page whose chunk hash changed (or that
// didn't exist yet) makes React.lazy() try to fetch a file that no longer
// exists on the server, since Vercel only serves the latest deployment's
// assets. That throws here as a render error. A single automatic reload
// fetches the current index.html/bundle and fixes it - the sessionStorage
// guard stops it from reload-looping if the real cause is something else.
const isStaleChunkError = (error) => {
  const message = String(error?.message || '');
  return /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/i.test(message);
};

const RELOAD_GUARD_KEY = 'france-iptv-chunk-reload-attempted';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidMount() {
    // Reaching a successful mount means the currently-loaded bundle works,
    // so clear the guard - a future deploy should get its own auto-reload
    // attempt rather than being silently blocked by an old incident's flag.
    try {
      window.sessionStorage.removeItem(RELOAD_GUARD_KEY);
    } catch {
      // ignore
    }
  }

  componentDidCatch(error, info) {
    console.error('Application render error:', error, info);

    if (isStaleChunkError(error)) {
      let alreadyTried = false;
      try {
        alreadyTried = window.sessionStorage.getItem(RELOAD_GUARD_KEY) === '1';
      } catch {
        // sessionStorage unavailable (private mode, etc.) - fall through to manual reload
      }

      if (!alreadyTried) {
        try {
          window.sessionStorage.setItem(RELOAD_GUARD_KEY, '1');
        } catch {
          // ignore - worst case we just show the manual reload button instead
        }
        window.location.reload();
      }
    }
  }

  handleReload = () => {
    try {
      window.sessionStorage.removeItem(RELOAD_GUARD_KEY);
    } catch {
      // ignore
    }
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <main className="min-h-screen bg-surface-2 text-white flex items-center justify-center px-6">
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
