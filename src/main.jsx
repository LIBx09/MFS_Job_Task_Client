import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-10/12 mx-auto">
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      <ToastContainer />
    </div>
  </StrictMode>
);
