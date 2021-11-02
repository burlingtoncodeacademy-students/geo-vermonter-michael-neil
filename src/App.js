import "./App.css";
import { useState } from "react";
import DisplayBox from "./components/DisplayBox";
import { ModalBox } from "./components/ModalBox";
import Map from "./components/Map";



function App(props) {
  const [center, setCenter] = useState([43.88, -72.7317]);

// const [show, setShow] = useState(false);

    //const closeModalHandler = () => setShow(false);


  return (
    <div id="layout">
      <Map center={center} />
      <DisplayBox />
    </div>  

    // <div>
       //{ show ? <div> className="back-drop"</div> : null}
       //<button onClick={() => setShow(true)} className="btn-openModal">Guess Button to open Modal</button>
        //  <ModalBox show={show} close= closeModalHandler />
       // </div>
     


     
       
     // )
   // }
  );
}

export default App;
