import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Top-level crash guard. Only class components can catch render errors
 * (there is no hook equivalent), so this stays a class component even
 * though the rest of the app is functional.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // No error-reporting service wired up yet. This is the spot to send to
    // one (or to Plausible custom events) once analytics is in place.
    console.error("Uncaught error in the app:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <div className="wrap">
            <h1>Something went wrong on our end.</h1>
            <p>Please reload the page. If this keeps happening, call or email us and we will help directly.</p>
            <div className="error-fallback-actions">
              <button className="btn" type="button" onClick={() => window.location.reload()}>Reload page</button>
              <a className="btn btn-ghost" href="/">Go to homepage</a>
            </div>
            <p className="price-note">Or call <a href="tel:+19175829560">917-582-9560</a> or email <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a>.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
