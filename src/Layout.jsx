import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">{children}</div>
  );
};

export default Layout;
