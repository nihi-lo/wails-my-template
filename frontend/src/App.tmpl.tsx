import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Route, Routes, useNavigate } from "react-router-dom";

import { RootPage } from "@{{.ProjectName}}/components/page";

function App(): JSX.Element {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Routes>
          <Route path="/" element={<RootPage />} />
        </Routes>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
