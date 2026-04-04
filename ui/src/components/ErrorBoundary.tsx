import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("[ErrorBoundary] Uncaught error:", error, info.componentStack);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  override render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-[50vh] items-center justify-center p-4">
        <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-md border border-destructive/20 bg-destructive/10 p-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Something went wrong</h1>
              <p className="text-sm text-muted-foreground">
                An unexpected error occurred. You can try again or reload the page.
              </p>
            </div>
          </div>

          {this.state.error && (
            <div className="mt-4 rounded-md border border-border bg-muted/20 px-3 py-2 text-xs text-muted-foreground">
              <code className="font-mono break-all">{this.state.error.message}</code>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            <Button onClick={this.handleReload}>
              <RefreshCw className="mr-1.5 h-4 w-4" />
              Reload Page
            </Button>
            <Button variant="outline" onClick={this.handleReset}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
