import "@{{.ProjectName}}/styles/globals.css";

import { App } from "@{{.ProjectName}}/App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
