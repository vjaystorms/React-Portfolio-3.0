import React from "react";
import ToggleDarkMode from "./toggleDarkMode";
import "./links.css"
function WorkPage(){
    return(
<div>
  <ToggleDarkMode section={"dontShowParagraphe"} />
  <div className="wrapper">
    <h4 className="a-1">Blog</h4>
    <h5 style={{color:"#e90f1f"}} className="a-1 pointer"><a href="https://blog-template-vjaystorms.onrender.com">A simplistic template example.</a></h5>

    <h4 className="a-2">Landing Page</h4>
    <h5 style={{color:"#e90f1f"}} className="a-2 pointer"><a href="https://web-production-b03b.up.railway.app/">An Inversive Landing Page template.</a></h5>

  </div>
</div>
    )
}
export default WorkPage