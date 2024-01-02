import React, { useState } from "react";
import "../styles/components/selectOption.css";

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "Pix", label: "Pix" },
    { value: "Deposito", label: "Depósito em Conta" },
    { value: "Cartao", label: "Crédito em Cartão" },
    { value: "Cheque", label: "Cheque" },
    { value: "Outros", label: "Outros" },
  ];

  return (
    <div className="select-option-container">
      <select
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
        className="select-box"
      >
        <option value="" disabled>
          Escolha um método de pagamento:
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
