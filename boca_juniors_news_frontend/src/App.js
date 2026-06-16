import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  const [activeNav, setActiveNav] = useState("home");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const pageTitle = useMemo(() => {
    switch (activeNav) {
      case "latest":
        return "Latest";
      case "matches":
        return "Matches";
      case "transfers":
        return "Transfers";
      case "home":
      default:
        return "Home";
    }
  }, [activeNav]);

  return (
    <div className="App">
      <Header activeNav={activeNav} onNavigate={setActiveNav} />

      <main className="app-main" role="main">
        <div className="container">
          <div className="page-header">
            <div className="page-header__text">
              <h1 className="page-title">{pageTitle}</h1>
              <p className="page-subtitle">
                Modern, clean Boca Juniors sports news layout (header + nav).
              </p>
            </div>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>

          <section className="placeholder-surface" aria-label="Content placeholder">
            <p className="placeholder-surface__title">Next: News feed</p>
            <p className="placeholder-surface__text">
              The header is now integrated. The upcoming work item can add the
              filter/search bar and responsive grid of news cards in this main
              area.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
