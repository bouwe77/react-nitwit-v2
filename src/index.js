import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./components/app/App";
import { AuthProvider } from "./auth/AuthProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthProvider>
    OVERAL GEWOON AXIOS DIRECT GEBRUIKEN, behalve bij etag
    <App />
  </AuthProvider>,
  rootElement
);
