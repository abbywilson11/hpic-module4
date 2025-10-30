// index.js
// Entry point of the HPIC React app

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";     // Global styles
import App from "./App";  // Main app component

// Create the root element and render the app inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />   {/* Main application */}
  </React.StrictMode>
);