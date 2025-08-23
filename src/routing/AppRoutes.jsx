import { Routes, Route } from "react-router-dom";
import RouteWrapper from "../utlis/RouteWrapper";

import UnderDev from "../componets/ui/UnderDev";

import { ROUTES } from "./routes";

import React, { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const OilFinder = lazy(() => import("../pages/OilFinder"));
const Certificates = lazy(() => import("../pages/Certificates"));
const EventsArticles = lazy(() => import("../pages/EventsArticles"));
const BecomeDistributor = lazy(() => import("../pages/BecomeDistributor"));
const Contact = lazy(() => import("../pages/Contact"));

/**
 * AppRoutes component defines the main routing structure of the application.
 * It uses RouteWrapper to set document titles for each route.
 */

function AppRoutes() {
  return (
    <Suspense
      fallback={<div className="text-center py-20 text-xl">Loading...</div>}
    >
      <Routes>
        {/* Public Routes (no login required) */}

        {/* Main App Routes */}
        {ROUTES.map(({ path, element, label }, idx) => {
          const ElementComponent = {
            Home,
            About,
            Products,
            Services,
            OilFinder,
            Certificates,
            EventsArticles,
            BecomeDistributor,
            Contact,
          }[element];
          return (
            <Route
              key={idx}
              path={path}
              element={
                <RouteWrapper element={<ElementComponent />} title={label} />
              }
            />
          );
        })}
        <Route path="*" element={<UnderDev />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
