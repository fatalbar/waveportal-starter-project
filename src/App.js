import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Cat there!
        </div>

        <div className="bio">
        I am Cat see you at 2024 ? meet and coffe time wave at me! 

          
          <iframe src="https://giphy.com/embed/mBLYrKaZJACmtum22X" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=""></a></p>
          
        </div>
        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
