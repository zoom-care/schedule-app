import React from "react";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import { reduxStore } from "./reduxStore";
import { QueryClient, QueryClientProvider } from "react-query";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
