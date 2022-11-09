import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
import ScrollToTop from "./component/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);
