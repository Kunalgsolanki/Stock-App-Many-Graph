import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        {loading ?  <div className="splash-screen">
      <img src="https://cdn.pixabay.com/animation/2022/12/20/08/31/08-31-33-442_512.gif" alt="Splash" className="splash-image" />
    </div> : <Dashboard />}
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
