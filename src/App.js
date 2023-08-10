import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";


function App() {
  return (
  <Router>
    <GlobalStyles />
    <Navbar />
    <HeroSection />
    <Routes>
      <Route path='/' />
      <Route path='/about' />
      <Route path='/projects' />
      <Route path='/contact' />
    </Routes>
  </Router>
  )
}

export default App;

//button not working to open links//
// piece of white screen shows when trying to exit screen//
//