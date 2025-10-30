// main.jsx
// Entry point for the HPIC React application
// This file connects React to the root HTML element and renders the App component.

import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM for rendering
import App from "./App.jsx";             // Import main App component
import "./index.css";                    // Import global styles

// Find the <div id="root"> in index.html and render the React app inside it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />  {/* Render the main application */}
  </React.StrictMode>
);