import React from "react";

function DisplayBox(props) {
  return (
    <div id="display">
      <div class="display-boxes">
        <p>put info here</p>
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
          <button>Start a Game!</button>
          <button>Guess the Spot!</button>
          <button>I Give Up!</button>
      </div>
      <div class="display-boxes">
        <p>Score: scoreVariable</p>
      </div>
    </div>
  );
}

export default DisplayBox;
