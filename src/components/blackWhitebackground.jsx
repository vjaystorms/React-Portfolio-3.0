import React from "react";
import "./blackWhitebackground.css";
function BlackWhiteBackground({show}){
    return(
        <div className={`BlackWhiteBackground ${show ? "hide" : "show"}`}></div>
    )
}
export default BlackWhiteBackground