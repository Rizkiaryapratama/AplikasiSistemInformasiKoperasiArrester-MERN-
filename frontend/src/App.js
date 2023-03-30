import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import InputKas from "./pages/BukuKasPages/InputKas";
import InputKontrak from "./pages/DaftarKontrakPages/InputKontrak";
import InputBebanUsaha from "./pages/BebanUsahaPages/InputBebanUsaha";
import DataKontrak from "./pages/DaftarKontrakPages/DataKontrak";
import DataKas from "./pages/BukuKasPages/DataKas";
import DataBebanUsaha from "./pages/BebanUsahaPages/DataBebanUsaha";
import UpdateBebanUsaha from "./pages/BebanUsahaPages/UpdateBebanUsaha";
import UpdateKas from "./pages/BukuKasPages/UpdateKas";
import UpdateKontrak from "./pages/DaftarKontrakPages/UpdateKontrak";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/inputkas" element={<InputKas />} />
              <Route path="/inputkontrak" element={<InputKontrak />} />
              <Route path="/inputbebanusaha" element={<InputBebanUsaha />} />
              <Route path="/datakas" element={<DataKas />} />
              <Route path="/datakontrak" element={<DataKontrak />} />
              <Route path="/databebanusaha" element={<DataBebanUsaha />} />
              <Route path="/updatebebanusaha/:id" element={<UpdateBebanUsaha />} />
              <Route path="/updatekas/:id" element={<UpdateKas />} />
              <Route path="/updatekontrak/:id" element={<UpdateKontrak />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
