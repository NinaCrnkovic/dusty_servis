import React from "react";
import Button from "../Button";

class Step4 extends React.Component {
  handleBack = (e, n) => {
    let inputNumber = parseInt(e.target.dataset.number);
    if (isNaN(inputNumber)) {
      inputNumber = n;
    }
    const newNum = inputNumber;
    this.props.handleBack(newNum);
  };

  render() {
    const {
      step,
      handlePrev,
      handleNext,
      carType,
      services,
      finalPrice,
      cuponPercentage,
      cuponValue,
      contact,
      realPrice,
    } = this.props;
    const discount = realPrice * cuponValue;

    if (step !== 4) {
      return null;
    }

    return (
      <div className="form-group">
        <h3 className="stepHeading">
          Korak {step}. Pregled i potvrda Vašeg odabira
        </h3>
        <div className="step4Cont">
          <p>
            <span>MODEL VOZILA </span>
            <Button
              className="step4Btn"
              btnName="Uredi"
              onClick={(e) => this.handleBack(e, 1)}
            />
          </p>
          <p>{carType}</p>
        </div>
        <div className="step4Cont">
          <p>
            <span> ODABRANE USLUGE </span>
            <Button
              className="step4Btn"
              btnName="Uredi"
              onClick={(e) => this.handleBack(e, 2)}
            />
          </p>
          {services.map((service) => {
            return (
              <div>
                <span>{service.id}</span>
                <span> {service.price} KN</span>
              </div>
            );
          })}
          <p>
            Popust: - {discount} kn ({cuponPercentage}%)
          </p>
          <p>UKUPNO: {finalPrice} kn</p>
        </div>
        <div className="step4Cont">
          <p>
            <span>KONTAKT PODACI </span>
            <Button
              className="step4Btn"
              btnName="Uredi"
              onClick={(e) => this.handleBack(e, 3)}
            />
          </p>
          <p>Ime i prezime: {contact.name}</p>
          <p>Broj telefona: {contact.phone}</p>
          <p>Email adresa: {contact.email}</p>
          <p>Napomena: {contact.comment}</p>
        </div>
        <div className="prevNexCont">
          <Button btnName="Nazad" onClick={handlePrev} />
          <Button btnName="Pošalji" onClick={handleNext} />
        </div>
      </div>
    );
  }
}
export default Step4;
