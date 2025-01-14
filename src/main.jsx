import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import router from "./Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <div className=" lg:max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </StrictMode>
);
