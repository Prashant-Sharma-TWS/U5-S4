import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { RegisterPageContextProvider } from "./Contexts/RegisterPageContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RegisterPageContextProvider>
        <App />
      </RegisterPageContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
