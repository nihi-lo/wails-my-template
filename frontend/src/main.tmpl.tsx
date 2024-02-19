import "@{{.ProjectName}}/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { App } from "@{{.ProjectName}}/App.tsx";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <App />
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
