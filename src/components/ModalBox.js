import React from "react";
import "./Modal.css";

export const ModalBox = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-nav">
        <button>About</button>
        <button>High Scores</button>
        <div className="modal-header">
          <p>What County are We In?</p>
          <span onClick={close} className="close-modal-btn">
            x
          </span>
        </div>
        <div className="modal-content">
          <div className="modal-body"></div>
          <h4>Modal outline For Guess Button </h4>
         
          <select>
            <option value="addison">Addison County</option>
            <option value="bennington">Bennington County</option>
            <option value="caledonia">Caledonia County</option>
            <option value="chittenden">Chittenden County</option>
            <option value="essex">Essex County</option>
            <option value="franklin">Franklin County</option>
            <option value="grand">Grand Isle County</option>
            <option value="lamoille">Lamoille County</option>
            <option value="orange">Orange County</option>
            <option value="orleans">Orleans County</option>
            <option value="rutland">Rutland County</option>
            <option value="washington">Washington County</option>
            <option value="windham">Windham County</option>
            <option value="windsor">Windsor County</option>
          </select>
          <div className="modal-footer"></div>
          <button onClick={close} className="btn-cancel">
            Guess
          </button>
          <button onClick={close} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
