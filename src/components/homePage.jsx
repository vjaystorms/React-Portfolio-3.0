import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PortfolioLink from "./portfoliLink";
import ToggleDarkMode from "./toggleDarkMode";
import BlackWhiteBackground from "./blackWhitebackground";
import "./showParagraphButton.css";
import "./threeParagraphedText.css";
import "./showLinks.css";
import "./mobileStyles.css";
import backgroundImages from "./assets/expand.png";

function HomePage() {
  const [showParagraphs, setShowParagraphs] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Load state from local storage
    const savedState = JSON.parse(localStorage.getItem("homePageState")) || {};
    setShowParagraphs(savedState.showParagraphs || false);
    setShowLinks(savedState.showLinks || false);
  }, [location.state?.reload]);

  useEffect(() => {
    // Save state to local storage
    localStorage.setItem("homePageState", JSON.stringify({ showParagraphs, showLinks }));
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

      <PortfolioLink actionType={showParagraphs}/>
      <BlackWhiteBackground show={showParagraphs}/>

      {!showParagraphs ?(
        <div>
          <ToggleDarkMode section={"showParagraphe"} />
        </div>
      ):!showLinks && (
        // This Section Would Be Displayed When showLinks Is False And showParagraphs is True
        <div ref={sectionRef} className="ThreeParagraphedText">
          <span>I</span>
          <span>I am</span>
          <span style={{ color: "#e90f1f" }}>Abiola</span>
        </div>
      )}

      {/* This Button Sets The showParagraphs To True */}
      {!showLinks && !showParagraphs && (
        <div className="showParagrapheButton">
          <div onClick={handleScroll} style={{ backgroundImage: `url(${backgroundImages})` }} className="showParagrapheButtonArrow"></div>
        </div>
      )}

      {/* This Button Sets The showLinks To True */}
      {showParagraphs && !showLinks && (
        <div className="click-me-button" onClick={handleClick}>
          <div>Tap Anywhere</div>
        </div>
      )}

      {/* This Section Would Be Displayed When showLinks Is True And showParagraphs is True */}
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