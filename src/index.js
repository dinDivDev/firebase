import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={2}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
