import { Routes, Route } from "react-router-dom";
import RouteWrapper from "../utlis/RouteWrapper";

import UnderDev from "../componets/ui/UnderDev";

import { ROUTES } from "./routes";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Services from "../pages/Services";
import OilFinder from "../pages/OilFinder";
import Certificates from "../pages/Certificates";
import EventsArticles from "../pages/EventsArticles";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes (no login required) */}

      {/* Main App Routes */}
      {ROUTES.map(({ path, element }, idx) => {
        const ElementComponent = {
          Home,
          About,
          Products,
          Services,
          OilFinder,
          Certificates,
          EventsArticles,
        }[element];
        return (
          <Route
            key={idx}
            path={path}
            element={<RouteWrapper element={<ElementComponent />} />}
          />
        );
      })}
      <Route path="*" element={<UnderDev />} />
    </Routes>
  );
}

export default AppRoutes;
