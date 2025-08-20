import React from "react";
import Navbar from "./componets/layout/Navbar";
import Layout from "./Layout";
import AppRoutes from "./routing/AppRoutes";

const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
