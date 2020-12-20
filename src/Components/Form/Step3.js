import React from "react";
import Button from "../Button";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      comment: "",
      isDisabled: false,
    };
  }

  handleInputChange = (event) => {
    const newCarType = event.target.value;
    this.setState({ carType: newCarType });
  };

  handleNext = (event) => {
    event.preventDefault();
    const { name, email, phone, comment } = this.state;
    if (name.length < 1 || email.length < 1 || phone.length < 1) {
      this.setState({ isDisabled: true });
      alert("Molimo unesite tražene podatke");
      return;
    } else {
      this.props.handleChange(name, email, phone, comment);
    }
  };

  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name: name });
  };

  handleEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email: email });
  };

  handlePhoneChange = (event) => {
    const phone = event.target.value;
    this.setState({ phone: phone });
  };

  handleCommentChange = (event) => {
    const comment = event.target.value;
    this.setState({ comment: comment });
  };

  render() {
    const { step, handlePrev } = this.props;
    const { isDisabled } = this.state;
    if (step !== 3) {
      return null;
    }

    return (
      <div className="form-group">
        <h3 className="stepHeading">Korak {step}. Vaši kontakt podaci</h3>
        <div className="choiceContStep3">
          <input
            onChange={this.handleNameChange}
            type="text"
            id="name"
            name="name"
            placeholder="Ime i prezime*"
            required
          />
          <input
            onChange={this.handleEmailChange}
            type="email"
            id="email"
            name="email"
            placeholder="e-mail*"
            required
          />
          <input
            onChange={this.handlePhoneChange}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Broj telefona*"
            required
          />
          <textarea
            onChange={this.handleCommentChange}
            rows="5"
            cols="55"
            id="comment"
            name="comment"
            placeholder="Napomena (opcionalno)"
          />
        </div>
        <div className="prevNexCont">
          <Button btnName="Nazad" onClick={handlePrev} />
          <Button
            btnName="Dalje"
            onClick={this.handleNext}
            disabled={isDisabled}
          />
        </div>
      </div>
    );
  }
}

export default Step3;
