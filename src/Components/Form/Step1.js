import React from "react";
import Button from "../Button";
import { Input } from "./Input";

const cars = [
  "Peugeot",
  "Volkswagen",
  "Citroen",
  "Audi",
  "Bmw",
  "Seat",
  "AlfaRomeo",
  "Kia",
  "Hyundai",
  "Honda",
  "Toyota",
];

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carType: "",
      isDisabled: false,
    };
  }

  handleRadioChange = (event) => {
    const newCarType = event.target.value;
    this.setState({ carType: newCarType });
  };
  handleNext = (event) => {
    event.preventDefault();
    const { carType } = this.state;
    if (carType.length < 1) {
      this.setState({ isDisabled: true });
      alert("Molimo izaberite proizvođača vozila");

      return;
    } else {
      this.props.handleChange(carType);
    }
  };

  render() {
    const { step } = this.props;
    const { isDisabled } = this.state;
    if (step !== 1) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h3 className="stepHeading">
          Korak {step}. Odaberite proizvođača Vašeg vozila
        </h3>
        <div className="choiceCont" onChange={this.handleRadioChange}>
          {cars.map((car) => (
            <Input
              type="radio"
              id={car}
              name="carType"
              value={car}
              step={step}
              key={car}
            />
          ))}
        </div>
        <div className="prevNexCont1">
          <Button
            className="step1Btn"
            btnName="Dalje"
            onClick={this.handleNext}
            disabled={isDisabled}
          />
        </div>
      </div>
    );
  }
}

export default Step1;
