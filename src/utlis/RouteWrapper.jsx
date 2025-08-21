// RouteWrapper.jsx

import React, { useEffect } from "react";

const RouteWrapper = ({ element, title }) => {
  useEffect(() => {
    document.title = title ? `${title} | Lubrex India` : "Lubrex India";
  }, [title]);
  return element;
};

export default RouteWrapper;
