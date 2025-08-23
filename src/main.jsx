
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./routing/ScrollToTop.jsx";

function UpdateNotification() {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!reg) return;
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setShow(true);
              }
            });
          }
        });
      });
    }
  }, []);

  const updateApp = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
    }
    setShow(false);
  };

  if (!show) return null;
  return (
    <div style={{position: 'fixed', bottom: 24, left: 0, right: 0, zIndex: 9999, display: 'flex', justifyContent: 'center'}}>
      <div style={{background: '#222', color: '#fff', padding: '16px 32px', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: 16}}>
        <span style={{fontWeight: 500}}>A new version is available.</span>
        <button onClick={updateApp} style={{background: '#facc15', color: '#222', fontWeight: 700, border: 'none', borderRadius: 4, padding: '8px 16px', cursor: 'pointer'}}>Update Now</button>
      </div>
    </div>
  );
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <UpdateNotification />
    </BrowserRouter>
  </StrictMode>
);
