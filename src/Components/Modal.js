import React from "react";
import Button from "./Button";
import MainForm from "./Form/MainForm";

function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="configCont">
        <h3>Kofigurator servisa</h3>
        <Button className="btnX" onClick={onClose} btnName="X" />
      </div>

      <MainForm onClose={onClose} />
    </div>
  );
}
export default Modal;
