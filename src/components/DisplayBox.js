import React from "react";
import { useState } from "react";
import ModalBox from "./ModalBox"

function DisplayBox(props) {
  const [start, setStart] = useState(true);

  function startButton(evt) {
    setStart(false);
  }

  return (

  
    <div id="display">
      <div class="display-boxes">
     <ModalBox show={true}/> 
        
      </div>
      <div class="display-boxes">
        <p>latitude, long, county, town</p>
      </div>
      <div class="display-boxes">
        <button>North</button>
        <button>East</button>
        <button>South</button>
        <button>West</button>
      </div>
      <div class="display-boxes">
        <button
          id="start"
          type="button"
          onClick={startButton}
          disabled={!start}
        >
          Start a Game!
        </button>
        <button id="start" type="button" disabled={start}>
          Guess the Spot! 
        </button>
        <button id="start" type="button" disabled={start}>
          I Give Up!
        </button>
      </div>
      <div class="display-boxes">
        <p>Score: scoreVariable</p>
      </div>
    </div>
  );
}

export default DisplayBox;
