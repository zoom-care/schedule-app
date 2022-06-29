import React from "react";
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleUpdateUser.bind(this);
  }

  handleUpdateUser() {
    localStorage.setItem('user', null);
    window.location.reload();
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores

  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return (
        <div className="error-container">
          <span>Your token has randomly changed in Service Worker</span>
          <button onClick={this.handleUpdateUser}>Clear user</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;