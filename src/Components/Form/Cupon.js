import React from "react";
import Button from "../Button";

const validCupon = { code: "Tokić123", percentage: 30, value: 0.3 };

class Cupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cupon: "",
    };
  }

  handleInputCupon = (event) => {
    this.setState({
      cupon: event.target.value,
    });
  };
  handleSubmitCupon = (event) => {
    event.preventDefault();
    const { cupon } = this.state;
    if (cupon !== validCupon.code) {
      alert("Unjeli kupon koji nije valjan: " + cupon);
    } else if (cupon === validCupon.code) {
      const cuponP = validCupon.percentage;
      const cuponV = validCupon.value;
      const { handleSubmitCupon } = this.props;
      handleSubmitCupon(cuponP, cuponV);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className="cuponInput"
            type="text"
            onChange={(event) => this.handleInputCupon(event)}
            placeholder="Unesite kod kupona ovdje"
          />
        </label>
        <Button onClick={this.handleSubmitCupon} btnName="Primijeni" />
      </form>
    );
  }
}

export default Cupon;
