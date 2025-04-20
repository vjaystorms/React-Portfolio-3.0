import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./homePage";
import ContactPage from "./contactPage";
import AboutPage from "./aboutPage";
import WorkPage from "./workPage";
import ErrorPage from "./404Page"

function App(){
    return(
        <ThemeProvider>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/work" element={<WorkPage />}/>
                <Route path="/error" element={<ErrorPage />}/>
            </Routes>
        </Router>
        </ThemeProvider>
    );
}

export default App;