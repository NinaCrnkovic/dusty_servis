import React from "react";
import Button from "../Button";
import Cupon from "./Cupon";
import { Input } from "./Input";

const servicesOptions = [
  ["Zamjena ulja i filtera", 500],
  ["Promjena pakni", 450],
  ["Promjena guma", 100],
  ["Servis klima uređaja", 299],
  ["Balansiranje guma", 50],
  ["Zamjena ulja u kočnicama", 229],
];

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      realPrice: 0,
      finalPrice: 0,
      cuponPercentage: 0,
      cuponValue: "",
      isDisabled: true,
      isCupon: false,
    };
  }

  handleCheckboxChange = (event) => {
    let checked = event.target.checked;
    if (checked) {
      const newServiceValue = event.target.value;
      const newServiceName = event.target.name;
      const servicesId = event.target.id;
      const newService = {
        name: newServiceName,
        price: newServiceValue,
        id: servicesId,
      };
      this.setState({ services: [...this.state.services, newService] });
    } else if (!checked) {
      const { services } = this.state;
      const servicesId = event.target.id;
      const newServices = services.filter(
        (service) => service.id !== servicesId
      );
      this.setState({ services: newServices });
    }
  };

  handlePriceChange = (event) => {
    const { finalPrice, cuponValue, realPrice } = this.state;
    let checked = event.target.checked;
    let price = parseInt(event.target.value);
    let newPrice;
    let noDiscPrice;

    if (checked && cuponValue !== 0) {
      let discount = price * cuponValue;
      let discountPrice = price - discount;
      newPrice = finalPrice + discountPrice;
      noDiscPrice = realPrice + price;
      this.setState({ finalPrice: newPrice, realPrice: noDiscPrice });
    }
    if (checked && cuponValue === 0) {
      newPrice = finalPrice + price;
      this.setState({ finalPrice: newPrice, realPrice: noDiscPrice });
    }
    if (!checked && cuponValue !== 0) {
      let discount = price * cuponValue;
      let discountPrice = price - discount;
      newPrice = finalPrice - discountPrice;
      noDiscPrice = realPrice - price;
      this.setState({ finalPrice: newPrice, realPrice: noDiscPrice });
    }
    if (!checked && cuponValue === 0) {
      newPrice = finalPrice - price;
      noDiscPrice = realPrice - price;
      this.setState({ finalPrice: newPrice, realPrice: noDiscPrice });
    }
  };

  handleNext = () => {
    const {
      services,
      finalPrice,
      cuponValue,
      cuponPercentage,
      realPrice,
    } = this.state;
    if (services.length === 0) {
      this.setState({ isDisabled: true });
      alert("Molimo izaberite jednu od ponuđenih opcija servisa");
      return;
    }
    this.props.handleChange(
      services,
      finalPrice,
      cuponValue,
      cuponPercentage,
      realPrice
    );
  };
  handleOpenCupon = () => {
    this.setState({ isCupon: !this.state.isCupon });
  };

  handleSubmitCupon = (cuponP, cuponV) => {
    const { finalPrice } = this.state;
    const newPrice = finalPrice - finalPrice * cuponV;

    this.setState({
      cuponPercentage: cuponP,
      cuponValue: cuponV,
      finalPrice: newPrice,
    });
  };

  render() {
    const { step, handlePrev } = this.props;
    const {
      isDisabled,
      finalPrice,
      cuponPercentage,
      cuponValue,
      isCupon,
      realPrice,
    } = this.state;

    const discount = realPrice * cuponValue;

    if (step !== 2) {
      return null;
    }

    return (
      <div className="form-group">
        <h3 className="stepHeading">
          Korak {step}. Odaberite jednu ili više usluga
        </h3>
        <div className="choiceCont" onChange={this.handleCheckboxChange}>
          {servicesOptions.map((service) => (
            <Input
              onClick={this.handlePriceChange}
              type="checkbox"
              id={service[0]}
              name={service[0]}
              value={service[1]}
              key={service[0]}
              step={step}
            />
          ))}
        </div>

        {this.state.cuponValue > 0 ? (
          <div>
            {" "}
            <p className='cuponMessage'>Hvala Vam, unijeli ste ispravan kod kupona</p>{" "}
            <p>Osnovica: {realPrice} </p>{" "}
            <p>
              Popust: ({cuponPercentage}%) : -{discount}
            </p>{" "}
          </div>
        ) : (
          <div>
            {isCupon ? null : (
              <div  onClick={this.handleOpenCupon}>
              <p className="cuponLink"> Imam kupon </p> 
              </div>
            )}

            {isCupon > 0 ? (
              <Cupon handleSubmitCupon={this.handleSubmitCupon} />
            ) : null}
          </div>
        )}

        <div>
          <p>UKUPNO: {finalPrice} kn</p>
        </div>

        <div className="prevNexCont">
          <Button btnName="Nazad" onClick={handlePrev} />
          <Button
            className="noButton"
            btnName="Dalje"
            onClick={this.handleNext}
            disabled={isDisabled}
          />
        </div>
      </div>
    );
  }
}

export default Step2;
