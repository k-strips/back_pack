import React from "react";

const Input = ({ type, name, label, className }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} name={name} />
    </div>
  );
};

export default Input;
