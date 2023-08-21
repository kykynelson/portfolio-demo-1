import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";





function App() {
  return (
  <Router>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path='/'element={<HeroSection />}/>
      <Route path='/about' element={<AboutMe />}/>
      <Route path='/project'  element={<Project />}/>
      <Route path='/contact'  element={<Contact />}/>
    </Routes>
  </Router>
  )
}

export default App;

//button not working to open links// 
// piece of white screen shows when trying to exit screen//
// changing font