import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CurPage } from "./pages/CurPage";
import { SupPage } from "./pages/SupportPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";
import Loader from "./components/Loader";
import "./style/main.scss";
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Toggle loading state when location changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust timing to match your animation duration

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <div className="App">
        {loading && <Loader loading={loading} />}
        <Routes location={location}>
          <Route index path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/curriculum" element={<CurPage />} />
          <Route exact path="/support" element={<SupPage />} />
          <Route exact path="/resources" element={<ResourcesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
