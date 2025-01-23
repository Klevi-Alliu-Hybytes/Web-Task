
import './i18n/i18n.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/style.scss";
import "./assets/css/style.css.map";
import { useTranslation } from 'react-i18next';
import {useEffect} from "react";
import ScrollToHash from "./components/ScrollToHash"; // Import the ScrollToHash component

function App() {

    const { i18n } = useTranslation();
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);
    return (
      <Router>
          <ScrollToHash />
          <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
