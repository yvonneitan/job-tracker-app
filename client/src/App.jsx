import { useState } from "react";
import "./App.css";
import "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ActivePage from "./pages/ActivePage/ActivePage.jsx";
import InactivePage from "./pages/InactivePage/InactivePage.jsx";
import AppsForm from "./components/AppsForm/AppsForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/active" element={<ActivePage />} />
        <Route path="/inactive" element={<InactivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
