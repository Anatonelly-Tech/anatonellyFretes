import React from "react";
import "../styles/components/InputCheckBox.css";

const InputCheckBox = ({ newArray, selected = [], onChange, type }) => {
  const createCheckBoxUser = (newArray) => {
    const checkBoxArray = [];

    for (let i = 0; i < newArray.length; i++) {
      checkBoxArray.push(
        <label
          key={newArray[i].NomeCompleto}
          htmlFor={newArray[i].NomeCompleto}
          className="checkbox"
        >
          <input
            className="checkbox__input"
            type="checkbox"
            id={newArray[i].NomeCompleto}
            checked={selected.includes(newArray[i].NomeCompleto)}
            onChange={() => onChange(newArray[i].NomeCompleto)}
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
              fill="#f7f3e5"
              
              rx="3"
            />
            <path
              className="tick"
              stroke="#FFCD00"
              fill="none"
              strokeLinecap="round"
              strokeWidth="4"
              d="M4 10l5 5 9-9"
            />
          </svg>
          <div className="Spans">
            <span className="checkbox__label">{newArray[i].NomeCompleto}</span>
            <span className="checkbox__label" id="subtitle">
              {newArray[i].Telefone}
            </span>
          </div>
        </label>
      );
    }
    return checkBoxArray;
  };

  const createCheckBoxVeiculos = (newArray) => {
    const checkBoxArray = [];
    const elementosDivLeve = [];
    const elementosDivMedio = [];
    const elementosDivPesados = [];

    for (let i = 0; i < newArray.length; i++) {
      const categoria = newArray[i];

      for (let j = 0; j < categoria.opcoes.length; j++) {
        const tipoOpcao = categoria.opcoes[j];
        if (tipoOpcao.titulo === "Leve") {
          checkBoxArray.push(
            <div
              key={tipoOpcao.titulo}
              className="tipo-titulo"
              id={tipoOpcao.titulo}
            >
              <h3>{tipoOpcao.titulo}</h3>
              {elementosDivLeve}
            </div>
          );
        }
        if (tipoOpcao.titulo === "Médio") {
          checkBoxArray.push(
            <div
              key={tipoOpcao.titulo}
              className="tipo-titulo"
              id={tipoOpcao.titulo}
            >
              <h3>{tipoOpcao.titulo}</h3>
              {elementosDivMedio}
            </div>
          );
        }
        if (tipoOpcao.titulo === "Pesado") {
          checkBoxArray.push(
            <div
              key={tipoOpcao.titulo}
              className="tipo-titulo"
              id={tipoOpcao.titulo}
            >
              <h3>{tipoOpcao.titulo}</h3>
              {elementosDivPesados}
            </div>
          );
        }

        for (let k = 0; k < tipoOpcao.opcoes.length; k++) {
          const opcao = tipoOpcao.opcoes[k];
          let checkBoxCode = (
            <label key={opcao} htmlFor={opcao} className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                id={opcao}
                checked={selected.includes(opcao)}
                onChange={() => onChange(opcao)}
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
                  fill="#f7f3e5"
                  rx="3"
                />
                <path
                  className="tick"
                  stroke="#FFCD00"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M4 10l5 5 9-9"
                />
              </svg>
              <div className="Spans">
                <span className="checkbox__label">{opcao}</span>
                {/* Adicione outros spans conforme necessário */}
              </div>
            </label>
          );
          if (tipoOpcao.titulo === "Leve") {
            elementosDivLeve.push(checkBoxCode);
          }
          if (tipoOpcao.titulo === "Médio") {
            elementosDivMedio.push(checkBoxCode);
          }
          if (tipoOpcao.titulo === "Pesado") {
            elementosDivPesados.push(checkBoxCode);
          }
        }
      }
    }

    return checkBoxArray;
  };

  const createCheckBoxCarrocerias = (newArray) => {
    const checkBoxArray = [];
    const elementosDivFechada = [];
    const elementosDivAberta = [];
    const elementosDivEspecial = [];

    for (let i = 0; i < newArray.length; i++) {
      const categoria = newArray[i];

      for (let j = 0; j < categoria.opcoes.length; j++) {
        const tipoOpcao = categoria.opcoes[j];
        if (tipoOpcao.titulo === "Fechada") {
          checkBoxArray.push(
            <div
              key={tipoOpcao.titulo}
              className="tipo-titulo"
              id={tipoOpcao.titulo}
            >
              <h3>{tipoOpcao.titulo}</h3>
              {elementosDivFechada}
            </div>
          );
        }
        if (tipoOpcao.titulo === "Aberta") {
          checkBoxArray.push(
            <div
              key={tipoOpcao.titulo}
              className="tipo-titulo"
              id={tipoOpcao.titulo}
            >
              <h3>{tipoOpcao.titulo}</h3>
              {elementosDivAberta}
            </div>
          );
        }
        if (tipoOpcao.titulo === "Especial") {
          checkBoxArray.push(
            <div
              key={tipoOpcao.titulo}
              className="tipo-titulo"
              id={tipoOpcao.titulo}
            >
              <h3>{tipoOpcao.titulo}</h3>
              {elementosDivEspecial}
            </div>
          );
        }

        for (let k = 0; k < tipoOpcao.opcoes.length; k++) {
          const opcao = tipoOpcao.opcoes[k];
          let checkBoxCode = (
            <label key={opcao} htmlFor={opcao} className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                id={opcao}
                checked={selected.includes(opcao)}
                onChange={() => onChange(opcao)}
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
                  fill="#f7f3e5"
                  rx="3"
                />
                <path
                  className="tick"
                  stroke="#FFCD00"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M4 10l5 5 9-9"
                />
              </svg>
              <div className="Spans">
                <span className="checkbox__label">{opcao}</span>
                {/* Adicione outros spans conforme necessário */}
              </div>
            </label>
          );
          if (tipoOpcao.titulo === "Fechada") {
            elementosDivFechada.push(checkBoxCode);
          }
          if (tipoOpcao.titulo === "Aberta") {
            elementosDivAberta.push(checkBoxCode);
          }
          if (tipoOpcao.titulo === "Especial") {
            elementosDivEspecial.push(checkBoxCode);
          }
        }
      }
    }

    return checkBoxArray;
  };

  return type === "user"
    ? createCheckBoxUser(newArray)
    : type === "veiculo"
    ? createCheckBoxVeiculos(newArray)
    : type === "carroceria"
    ? createCheckBoxCarrocerias(newArray)
    : null;
};

export default InputCheckBox;
