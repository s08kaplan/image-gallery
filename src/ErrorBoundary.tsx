import { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}


export class ErrorBoundary extends Component <ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error:unknown): ErrorBoundaryState {
    if (error instanceof Error) {
      return { error };
    }
    return { error: new Error(String(error)) };
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <p>Could not load images: {this.state.error.message}</p>
          <button onClick={() => this.setState({ error: null })}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}