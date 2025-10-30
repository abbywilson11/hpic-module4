// Footer.jsx - Bottom section of the HPIC app
// Displays simple footer info and links

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* copyright */}
      <p>© 2025 Health Promotion International Centre (HPIC)</p> 

      {/* Optional helpful link about sicklecell disease*/}
      <a
        href="https://www.cdc.gov/ncbddd/sicklecell/index.html" /*link to website*/
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more at CDC
      </a>
    </footer>
  );
}