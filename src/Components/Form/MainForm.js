import React from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      carType: "",
      services: {},
      contact: {
        name: "",
        email: "",
        phone: "",
        comment: "",
      },
      finalPrice: 0,
      cuponValue: 0,
      cuponPercentage: "0%",
      realPrice: 0,
    };
  }

  handleChange1 = (carType) => {
    this.setState({ carType: carType, currentStep: 2 });
  };

  handleChange2 = (
    services,
    finalPrice,
    cuponValue,
    cuponPercentage,
    realPrice
  ) => {
    this.setState({
      services: services,
      finalPrice: finalPrice,
      cuponValue: cuponValue,
      cuponPercentage: cuponPercentage,
      realPrice: realPrice,
      currentStep: 3,
    });
  };

  handleChange3 = (name, email, phone, comment) => {
    this.setState({
      contact: { name: name, email: email, phone: phone, comment: comment },
      currentStep: 4,
    });
  };

  handlePrev = () => {
    const { currentStep } = this.state;
    const newStep = currentStep - 1;
    this.setState({ currentStep: newStep });
  };
  handleNext = () => {
    const { currentStep } = this.state;
    const newStep = currentStep + 1;
    this.setState({ currentStep: newStep });
  };
  handleBack = (newNum) => {
    this.setState({ currentStep: newNum });
  };

  render() {
    const {
      currentStep,
      carType,
      services,
      finalPrice,
      cuponValue,
      cuponPercentage,
      contact,
      realPrice,
    } = this.state;
    const { onClose } = this.props;

    switch (currentStep) {
      case 1:
        return <Step1 step={currentStep} handleChange={this.handleChange1} />;
      case 2:
        return (
          <Step2
            step={currentStep}
            handleChange={this.handleChange2}
            handlePrev={this.handlePrev}
          />
        );
      case 3:
        return (
          <Step3
            step={currentStep}
            handleChange={this.handleChange3}
            handlePrev={this.handlePrev}
          />
        );
      case 4:
        return (
          <Step4
            step={currentStep}
            carType={carType}
            services={services}
            finalPrice={finalPrice}
            cuponPercentage={cuponPercentage}
            cuponValue={cuponValue}
            contact={contact}
            realPrice={realPrice}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            handleBack={this.handleBack}
          />
        );
      case 5:
        return (
          <Step5
            step={currentStep}
            handleNext={this.handleNext}
            onClose={onClose}
          />
        );

      default:
        return null;
    }
  }
}

export default MainForm;
