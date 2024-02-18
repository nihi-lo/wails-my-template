import "@{{.ProjectName}}/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@{{.ProjectName}}/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <App />
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
