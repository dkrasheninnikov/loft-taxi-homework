import React from "react";

const Input = (props) => {
  const {
    name,
    placeholder,
    label,
    onChange,
    errorMessage,
    type,
    required,
    value,
  } = props;
  return (
    <div className={"field" + (errorMessage ? " error" : "")}>
      <label>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
      {errorMessage && errorMessage !== "" && (
        <div className="errorMessage">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
