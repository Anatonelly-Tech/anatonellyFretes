// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/components/input.css";

// eslint-disable-next-line react/prop-types
const InputComponent = ({ name, label, type, onChange,required }) => {
  const handleInputChange = (event) => {
    onChange(name, event.target.value);
  };
  if (required !== undefined) {
    return (
      <div className="form__group field">
        <input
          type={type}
          className="form__field"
          placeholder=""
          name={name}
          id={name}
          required
          onChange={handleInputChange}
        />
        <label htmlFor={name} className="form__label">
          {label}
        </label>
      </div>
    );
  }
  else{

    return (
      <div className="form__group field">
      <input
        type={type}
        className="form__field"
        placeholder=""
        name={name}
        id={name}
        onChange={handleInputChange}
        />
      <label htmlFor={name} className="form__label">
        {label}
      </label>
    </div>
  );
  }
};

export default InputComponent;
