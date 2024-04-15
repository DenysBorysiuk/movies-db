import { Component, ErrorInfo, PropsWithChildren } from "react";

export class ErrorBoundary extends Component<PropsWithChildren<any>> {
  state: { hasError: boolean };

  constructor(props: { children: JSX.Element }) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    alert(error);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong...</h2>;
    }

    return this.props.children;
  }
}
