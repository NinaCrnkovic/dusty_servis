import React from "react";
import logo from "../Assets/logo.png";

import "reactjs-popup/dist/index.css";
import Modal from "./Modal";
import MainForm from "./Form/MainForm";
import Button from "./Button";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="main-container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="h1-cont">
            <h1>Konfigurator servisa</h1>
            <h3>Izračunajte trošak servisa</h3>
          </div>
        </header>
        <main>
          <div className="container1">
            <h4>Pritisnite gumb niže kako biste pokrenuli konfigurator</h4>
            <Button btnName="Pokreni Konfigurator" onClick={this.handleOpen} />
            <Modal open={isOpen} onClose={this.handleClose}>
              <MainForm />
            </Modal>
          </div>
        </main>
      </div>
    );
  }
}
export default MainPage;
