import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { CurPage } from "./pages/CurPage";
import { SupPage } from "./pages/SupPage";
import { ConPage } from "./pages/ConPage";
import { ResPage } from "./pages/ResPage";
import Cursor from "./components/CursorComponent";
import "./style/main.scss";
import "./style/mobile.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/curriculum" element={<CurPage />} />
          <Route exact path="/support" element={<SupPage />} />
          <Route exact path="/contact" element={<ConPage />} />
          <Route exact path="/resources" element={<ResPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
