import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./routing/ScrollToTop.jsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.ready.then((registration) => {
      // Listen for updates from the service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "NEW_VERSION_AVAILABLE") {
          // Option 1: Auto-reload immediately
          window.location.reload();
          // Option 2: Show a prompt to the user instead (uncomment below)
          // if (window.confirm('A new version is available. Reload now?')) {
          //   window.location.reload();
          // }
        }
      });
    });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <App />
    </BrowserRouter>
  </StrictMode>
);
