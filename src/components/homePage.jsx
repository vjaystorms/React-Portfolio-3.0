import React, { useRef, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion"
import { fadeIn } from '../utilitis/motion'

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
          <Motion.span
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show">
            I
          </Motion.span>
          <Motion.span
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show">
            I am
          </Motion.span>
          <Motion.span
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView="show"
            style={{ color: "#e90f1f" }}>
            Abiola
          </Motion.span>
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
        <div className="ThreeParagraphedText z-index links">
          <Motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <Link
              to="/about">
              About
            </Link>
          </Motion.div>
          <Motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <Link
              to="/work">
              Work
            </Link>
          </Motion.div>
          <Motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
          >
            <Link
              style={{ color: "#e90f1f" }}to="/contact">
              Contact
            </Link>
          </Motion.div>

        </div>
      )}
    </div>
  );
}

export default HomePage;
