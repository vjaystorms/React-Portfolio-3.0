import React, { useRef, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// Components
import PortfolioLink from "./portfoliLink";
import ToggleDarkMode from "./toggleDarkMode";
import BlackWhiteBackground from "./blackWhitebackground";
import { ThemeContext } from "./ThemeContext";

// Styles & Assets
import "./showParagraphButton.css";
import "./threeParagraphedText.css";
import "./showLinks.css";
import backgroundImages from "./assets/expand.png";

function HomePage() {
  // Get both values from context
  const {
    showLinks,
    setShowLinks,
    showParagraphs,
    setShowParagraphs
  } = useContext(ThemeContext);

  const sectionRef = useRef(null);
  const location = useLocation();

  // Optional: reset on specific conditions like reloads or page refreshes
  useEffect(() => {
    // This can load from localStorage if you still want persistence on refresh
    const saved = JSON.parse(localStorage.getItem("homePageState")) || {};
    setShowParagraphs(saved.showParagraphs || false);
    setShowLinks(saved.showLinks || false);
  }, [location.state?.reload]);

  useEffect(() => {
    // Save both values
    localStorage.setItem("homePageState", JSON.stringify({
      showParagraphs,
      showLinks
    }));
  }, [showParagraphs, showLinks]);

  const handleScroll = () => {
    setShowParagraphs(true);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    setShowLinks(true);
  };

  return (
    <div className="app">

      <PortfolioLink actionType={showParagraphs} />
      <BlackWhiteBackground show={showParagraphs} />

      {/* Toggle Dark Mode Button */}
      {!showParagraphs && (
        <div>
          <ToggleDarkMode section={"showParagraphe"} />
        </div>
      )}

      {/* Animated Intro */}
      {showParagraphs && !showLinks && (
        <div ref={sectionRef} className="ThreeParagraphedText">
          <span>I</span>
          <span>I am</span>
          <span style={{ color: "#e90f1f" }}>Abiola</span>
        </div>
      )}

      {/* Arrow to reveal intro */}
      {!showParagraphs && !showLinks && (
        <div className="showParagrapheButton">
          <div
            onClick={handleScroll}
            style={{ backgroundImage: `url(${backgroundImages})` }}
            className="showParagrapheButtonArrow"
          ></div>
        </div>
      )}

      {/* Button to reveal navigation links */}
      {showParagraphs && !showLinks && (
        <div className="click-me-button" onClick={handleClick}>
          <div>Tap Anywhere</div>
        </div>
      )}

      {/* Navigation links */}
      {showLinks && (
        <div className="ThreeParagraphedText links">
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link style={{ color: "#e90f1f" }} to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;
