// ToggleDarkMode.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import "./toggleDarkMode.css"
const ToggleDarkMode =({section}) =>{
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      {section==="showParagraphe"&&(
            <button onClick={handleToggle} className="toggle-button-outter-border">
            <div className={`toggle-button-inner-circle ${isDarkMode ? 'Light-Mode' : 'Dark-Mode'}`}></div>
          </button>
      )}
            {section==="dontShowParagraphe"&&(
              <div className='header'>
            <button onClick={handleToggle} className={`toggle-button-victor ${isDarkMode ? 'toggle-button-victor-dark' : 'toggle-button-victor-light'}`}>
              Abiola
          </button>
          </div>
      )}
      </div>
  )
}

export default ToggleDarkMode;