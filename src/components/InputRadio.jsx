import React from "react";
import "../styles/components/InputRadio.css";

const InputRadio = ({
  groupName,
  id,
  title,
  tituloRadios,
  direction,
  selected,
  onChange,
  required,
}) => {
  const createRadio = (groupName, id, title) => {
    const radioArray = [];
    for (let i = 0; i < id.length; i++) {
      radioArray.push(
        <label key={id[i]} className="labelRadio">
          <input
            type="radio"
            name={groupName}
            value={id[i]}
            checked={selected === id[i]}
            onChange={() => onChange(id[i])}
            required
          />
          <span>{title[i]}</span>
        </label>
      );
    }
    return radioArray;
  };

  const createRadioRequired = (groupName, id, title) => {
    const radioArray = [];
    for (let i = 0; i < id.length; i++) {
      radioArray.push(
        <label key={id[i]} className="labelRadio">
          <input
            type="radio"
            name={groupName}
            value={id[i]}
            checked={selected === id[i]}
            onChange={() => onChange(id[i])}
            required
          />
          <span>{title[i]}</span>
        </label>
      );
    }
    return radioArray;
  };

  const StyleDirecton = {
    display: "flex",
    flexDirection: direction,
  };

  if (required !== undefined) {
    return (
      <div className="container">
        <h3>{tituloRadios}</h3>
        <div className="direction" style={StyleDirecton}>
          {createRadioRequired(groupName, id, title)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>{tituloRadios}</h3>
        <div className="direction" style={StyleDirecton}>
          {createRadio(groupName, id, title)}
        </div>
      </div>
    );
  }
};

export default InputRadio;
