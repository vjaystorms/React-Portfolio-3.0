import React from 'react';
import {useNavigate } from 'react-router-dom';
import "./Portfolio.css"

const PortfolioLink = ({actionType}) => {
  const navigate = useNavigate();
  const handleAction =(type)=>{
      switch (type) {
    case true:
      console.log("help me !!!!");
      // Clear local storage
      localStorage.removeItem('homePageState');
      // Navigate to the home page
      navigate('/',{state:{
        reload:Date.now()
      }})
      break;
  
    default:
      console.log("Wait for Transition");
      break;
  }
  }



  const handleClick = () => {
    handleAction(actionType)
  };

  return (
        <div className='portfolioBackground'>
           <h1 className={`portfolio-h1-text ${actionType ? "hide" : "show"}`} onClick={handleClick}>
            Portfolio
           </h1>
        </div>
  );
}

export default PortfolioLink;