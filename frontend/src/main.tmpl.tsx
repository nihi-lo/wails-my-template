import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import ReactDOM from "react-dom/client";

import { RootPage } from "@{{.ProjectName}}/components/page";

import "@{{.ProjectName}}/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <RootPage />
      </NextUIProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
