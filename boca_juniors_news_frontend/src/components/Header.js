import React from "react";
import "../App.css";

/**
 * Header for the Boca Juniors News app.
 * Includes branding, navigation, and a mobile-friendly layout.
 */

// PUBLIC_INTERFACE
function Header({ activeNav = "home", onNavigate = () => {} }) {
  /** Lightweight nav model; can be wired to routing later. */
  const navItems = [
    { id: "home", label: "Home" },
    { id: "latest", label: "Latest" },
    { id: "matches", label: "Matches" },
    { id: "transfers", label: "Transfers" },
  ];

  return (
    <header className="app-header" role="banner">
      <div className="app-header__inner">
        <button
          type="button"
          className="app-header__brand"
          onClick={() => onNavigate("home")}
          aria-label="Go to Boca Juniors News home"
        >
          <span className="app-header__logo" aria-hidden="true">
            BJ
          </span>
          <span className="app-header__brandText">
            <span className="app-header__title">Boca Juniors</span>
            <span className="app-header__subtitle">News</span>
          </span>
        </button>

        <nav className="app-header__nav" aria-label="Primary navigation">
          <ul className="app-header__navList">
            {navItems.map((item) => {
              const isActive = item.id === activeNav;
              return (
                <li key={item.id} className="app-header__navItem">
                  <button
                    type="button"
                    className={`app-header__navLink ${
                      isActive ? "is-active" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => onNavigate(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
