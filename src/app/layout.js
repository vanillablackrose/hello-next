import React from 'react';
export const dynamic = 'force-dynamic';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Page rendered on {new Date().toLocaleString()}
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
