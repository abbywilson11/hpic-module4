// Footer.jsx - Bottom section of the HPIC app
// Displays simple footer info and links

import React from "react";

export default function Footer() { //export footer
  return (
    <footer className="footer">
      {/* copyright */}
      <p>© 2025 Health Promotion International Centre (HPIC)</p> 

      {/* Optional helpful link about sicklecell disease*/}
      <a
        href="https://www.cdc.gov/ncbddd/sicklecell/index.html" /*link to website*/
        target="_blank" //open in new tab
        rel="noopener noreferrer" //security for new tab
      >
        Learn more at CDC
      </a>
    </footer>
  );
}