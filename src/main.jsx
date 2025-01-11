import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
