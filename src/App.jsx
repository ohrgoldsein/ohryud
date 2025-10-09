// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import KoheletPage from "./pages/KoheletPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kohelet" element={<KoheletPage />} />
        </Routes>
    );
}

export default App;
