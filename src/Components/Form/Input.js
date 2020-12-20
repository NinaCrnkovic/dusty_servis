import React from "react";

export function Input({ type, id, name, value, step, onClick }) {
  
   if (step ===2 ) {
    return (
      <div>
        <input
          className="checkbox"
          type={type}
          id={id}
          name={name}
          value={value}
          onClick={onClick}
        />
        <label>
          {name} ({value}) kn
        </label>
      </div>
    );
    } else {
    return (
      <div>
        <input type={type} id={id} name={name} value={value} />
        <label>{value}</label>
      </div>
    )
    }
}
