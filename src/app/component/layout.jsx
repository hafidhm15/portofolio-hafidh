// components/Layout.js
import React from 'react';
import Header from './Header'; // Import header component

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> {/* Header will be displayed on all pages */}
      <main>{children}</main> {/* Main content of each page */}
      {/* You can add footer component here if needed */}
    </div>
  );
};

export default Layout;
