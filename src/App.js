import React , {Component} from "react";
import './App.css'
import HeroSection from "./Component/HeroSection";
import NavBar from "./Component/NavBar";
function App() {
  return (
    <div className="App bg-black">
      <NavBar/>
     <HeroSection /> 
    </div>
  );
}

export default App;
