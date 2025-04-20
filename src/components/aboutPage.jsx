import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { motion as Motion } from "framer-motion"
import { fadeIn, textVariant } from '../utilitis/motion'
import ToggleDarkMode from "./toggleDarkMode";
import "./links.css"
import backgroundImages from "./assets/img.jpg"
import cv from "./assets/doc/Abiola.pdf";
function AboutPage() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <ToggleDarkMode section={"dontShowParagraphe"} />
      <div className="wrapper">
        <Motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show">
          I'm a Frontend <span style={{ color: "#e90f1f" }}>& Backend</span> web developer
        </Motion.h2>
        <Motion.h3
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className={` ${isDarkMode ? "line-w" : "line-b"}`}>About</Motion.h3>
        <Motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          style={{ backgroundImage: `url(${backgroundImages})` }} className="img"></Motion.div>
        <Motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
        >
          Hi, I'm Abiola, a junior developer who approaches both front-end and back-end programming with unwavering dedication and enthusiasm.
          <br />
          My journey into programming commenced at the age of 15 when I began crafting websites. Since then, I've not only honed my skills but also ebr/aced a diverse range of programming languages and lbr/aries such as HTML, CSS, JavaScript, node.js,
          jQuery, bootstrap, and React. My insatiable curiosity propels me to remain on the cutting edge of technological advancements and industry trends, equipping me to conquer challenges and consistently deliver exceptional outcomes.
          <br />
          However, my interests and abilities extend beyond coding. My fervor for music and photography acts as a wellspring of creativity, enriching my capacity to design immersive digital experiences. Whether harmonizing melodies or capturing fleeting
          moments through a camera lens, these passions infuse my work with a distinct perspective. I'm also well-versed in database management, having cultivated expertise in SQL and MongoDB. I eagerly offer my multifaceted skill set, unyielding devotion to
          development, and artistic inspirations to craft seamless, user-centric digital landscapes.
          <br />
          I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
          <br />
          Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire.
          I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
          <br />
          My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
          <br />
          I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ. I currently work remotely with a selected freelance client base and are open for new opportunities.
        </Motion.p>
        <Motion.div 
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        className="btn">
          <a className={`resumebtn ${isDarkMode ? "resumebtn-w" : "resumebtn-b"}`} href={cv}>resume</a>
        </Motion.div>
      </div>
    </div>
  )

}
export default AboutPage