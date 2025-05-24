import React from "react";
import ToggleDarkMode from "./toggleDarkMode";
import { motion as Motion } from "framer-motion"
import { fadeIn, textVariant } from '../utilitis/motion'
import "./links.css"
function WorkPage() {
  return (
    <div>
      <ToggleDarkMode section={"dontShowParagraphe"} />
      <Motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="wrapper">

        <Motion.h4
          variants={textVariant(0.3)}
        >Landing Page</Motion.h4>
        <Motion.h5
          variants={textVariant(0.4)}
          style={{ color: "#e90f1f" }} className="a-2 pointer"><a href="https://react-landing-page-taiilwind-css-framer-motion.vercel.app/">Modern Landing Page | React,Tailwindcss and Framer motion</a></Motion.h5>

        <Motion.h4
          variants={textVariant(0.5)}
        >Weather App</Motion.h4>
        <Motion.h5
          variants={textVariant(0.6)}
          style={{ color: "#e90f1f" }} className="a-2 pointer"><a href="https://weather-app-three-chi-54.vercel.app/">Weather Dashboard | React, React Query, API Integration</a></Motion.h5>

        <Motion.h4
          variants={textVariant(0.7)}
        >Blog</Motion.h4>
        <Motion.h5
          variants={textVariant(0.8)}
          style={{ color: "#e90f1f" }} className="a-1 pointer"><a href="https://blog-template-vjaystorms.onrender.com">A simplistic template example.</a></Motion.h5>

      </Motion.div>
    </div>
  )
}
export default WorkPage