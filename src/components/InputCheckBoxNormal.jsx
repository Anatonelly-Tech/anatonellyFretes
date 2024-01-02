import React from 'react'

const InputCheckBoxNormal = ({ 
    id,
    planceHolder,
    subtitle,
    selected = [],
    onChange,
}) => {
    const createCheckBox = (id, planceHolder) => {
        const checkBoxArray = [];
        for (let i = 0; i < id.length; i++) {
          checkBoxArray.push(
            <label key={id[i]} htmlFor={id[i]} className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                id={id[i]}
                checked={selected.includes(id[i])}
                onChange={() => onChange(id[i])}
              />
              <svg
                className="checkbox__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
              >
                <rect
                  width="21"
                  height="21"
                  x=".5"
                  y=".5"
                  fill="#e5e5ff"
                  stroke="#004994"
                  rx="3"
                />
                <path
                  className="tick"
                  stroke="#004994"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M4 10l5 5 9-9"
                />
              </svg>
              <div className="Spans">
                <span className="checkbox__label">{planceHolder[i]}</span>
                <span className="checkbox__label" id="subtitle">
                  {subtitle[i]}
                </span>
              </div>
            </label>
          );
        }
        return checkBoxArray;
      };
      return <div className="check-group">{createCheckBox(id, planceHolder)}</div>;
    }

export default InputCheckBoxNormal