import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import HomePage from "../pages/HomePage";
import Loader from "../components/Loader"; // <-- Boya yasagan Loader faylimizni chaqiramiz

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.5 soniyadan keyin sayt ochiladi
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {loading ? (
        // Agar loading bo'lsa, yangi Loader komponentini ko'rsatamiz
        <Loader />
      ) : (
        // Loading tugasa, saytni ko'rsatamiz
        <div className="App">
          <Router>
            <HomePage />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
