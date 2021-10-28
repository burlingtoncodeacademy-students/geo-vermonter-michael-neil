import "./App.css";
import { useState } from "react";
import DisplayBox from "./components/DisplayBox";

import Map from "./components/Map";



function App(props) {
  const [center, setCenter] = useState([43.88, -72.7317]);



  return (
    <div id="layout">
      <Map center={center} />
      <DisplayBox />
    </div>
  );
}

export default App;
