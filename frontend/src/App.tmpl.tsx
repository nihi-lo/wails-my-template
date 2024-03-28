import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Route, Routes, useNavigate } from "react-router-dom";

import { AboutPage } from "@{{.ProjectName}}/components/page/About";
import { RootPage } from "@{{.ProjectName}}/components/page/Root";

function App(): JSX.Element {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
