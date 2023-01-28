import React from "react";
import './App.css';
import Home from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./assets/images/lenses1.jpg" alt=""/>
        <Home/>
        
      </header>
    </div>
  );
}
