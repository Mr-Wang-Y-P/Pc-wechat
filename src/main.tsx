import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./style.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
