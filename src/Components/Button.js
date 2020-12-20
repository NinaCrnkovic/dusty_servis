import React from "react";

class Button extends React.Component {
  handleClick = (event) => {
    this.props.onClick(event);
  };

  render() {
    const { btnName, className, color } = this.props;
    return (
      <button
        className={className}
        style={{ backgroundColor: color }}
        onClick={this.handleClick}
      >
        {btnName}
      </button>
    );
  }
}

export default Button;
