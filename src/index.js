import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultContextProvider } from "./context/ResultContextProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <ResultContextProvider>
        <App />
        <ToastContainer />
      </ResultContextProvider>
    </Router>
  </Provider>
);
