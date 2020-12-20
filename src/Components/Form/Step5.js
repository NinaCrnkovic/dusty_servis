import React from "react";
import Button from "../Button";

export default function Step5({ step, onClose }) {
  if (step !== 5) {
    return null;
  }

  return (
    <div className="form-group">
      <div className="step5Cont">
        <h3 className="stepHeading">Vaša prijava je uspješno poslana</h3>
        <p>Vaša prijava je poslana i zaprimljena</p>
        <p>Kontaktirati ćemo Vas u najkraćem mogućem roku</p>
        <p>Hvala Vam.</p>
      </div>

      <div>
        <Button className="step5Btn" btnName="Zatvori" onClick={onClose} />
      </div>
    </div>
  );
}
