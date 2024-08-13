import React, { useContext } from "react";
import { ThemeContext,ThemeProvider } from "./ThemeContext";
import ToggleDarkMode from "./toggleDarkMode";
import "./links.css"
function ContactPage(){
  const {isDarkMode}=useContext(ThemeContext);
    return(
<div>
  <ToggleDarkMode section={"dontShowParagraphe"} />
  <div className="wrapper contactWrapper">
    <h2 className="a-1">
      Let's make something <span  style={{color:"#e90f1f"}}>great!</span>
    </h2>
    <h3 className={`a-2 ${isDarkMode ? "line-w" : "line-b"}`}>Contact</h3>
    <p className="a-3 contact-p">
      I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that
      optimizes all of our respective experience and knowledge.
      <br />
      I want to avoid subjective pissing-matches, and favor open-minded collaborators where egos are out of the equation. If that all sounds about right, then lets for sure chat about how we can work together.
      <br />
      Feel free to reach out through any platforms bellow:
    </p>
    <ul className="a-4">

      <li className=""> <a href="mailto:victorsalimon6@gmail.com?subject=Job%20Proposition%20&body=Hello%20Victor%20">Email </a></li>

      <li className=""> <a href="https://github.com/vjaystorms/Blog-wedsite.git">GitHub </a></li>

      <li className=""> <a href="https://www.linkedin.com/in/victor-salimon-a643301b2">Linkedin </a></li>

      <li className=""> <a href="https://wa.me/2349161763951?text=Hello!%20Good%20to%20see%20you">WhatsApp </a></li>

    </ul>
  </div>
</div>
    )
}
export default ContactPage