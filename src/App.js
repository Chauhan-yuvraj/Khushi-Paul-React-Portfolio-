import React , {Component} from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import './App.css'
import HeroSection from "./Component/HeroSection";
import GetInTouch from "./Component/GetInTouch";
import AboutMe from "./Component/AboutMe";
import Skill from "./Component/Skill";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HeroSection/> } />
        <Route path="/GetInTouch" element={ <GetInTouch/> } />
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Skill" element={<Skill/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
