// Header.jsx - Top section of the HPIC app
// Displays app name and a colored header bar

import React from "react";

// Functional component for header UI
export default function Header() { //export header 
  return (
    <header className="header">
      {/* Title of the application */}
      <h1>HPIC: Sickle-Cell Awareness</h1>

      {/* Subheading or tagline */}
      <p className="tagline">
        Search Nearby Hospitals and View Brochures on SCD 
      </p>
    </header>
  );
}