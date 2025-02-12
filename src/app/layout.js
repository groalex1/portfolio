import "./globals.css";
import React from 'react';
import PropTypes from 'prop-types';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

RootLayout.propTypes = {

  children: PropTypes.element,

};
