// buildRoutes.js
import React from "react";
import { Route } from "react-router-dom";

// Example: routes = [{ path: '/dashboard', element: <Dashboard /> }, ...]
const buildRoutes = (routes) =>
  routes.map(({ path, element, ...rest }, idx) => (
    <Route key={idx} path={path} element={element} {...rest} />
  ));

export default buildRoutes;
