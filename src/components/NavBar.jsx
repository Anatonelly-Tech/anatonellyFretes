// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/components/NavBar.css";
import Logo from "../assets/AnatonellyWhite.png";
import IconHome from "../assets/Icons/IconHome.svg";
import IconMeusFretes from "../assets/Icons/IconMeusFretes.svg";
import IconBuscarFretes from "../assets/Icons/IconBuscarFretes.svg";
import IconGerenciamentodeRiscos from "../assets/Icons/IconGerenciamentodeRiscos.svg";
import IconEmitirDocumentosFiscais from "../assets/Icons/IconEmitirDocumentosFiscais.svg";
import IconRelatorio from "../assets/Icons/IconRelatorio.svg";
import IconUser from "../assets/Icons/IconUser.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavSup">
        <div className="logo">
          <img src={Logo} alt="Logo" draggable="false" />
        </div>
        <div className="mainNav">
          {[
            { icon: IconHome, text: "Home" },
            { icon: IconMeusFretes, text: "Meus Fretes" },
            { icon: IconBuscarFretes, text: "Buscar Fretes" },
            {
              icon: IconGerenciamentodeRiscos,
              text: "Gerenciamento de Riscos",
            },
            {
              icon: IconEmitirDocumentosFiscais,
              text: "Emitir Documentos Fiscais",
            },
            { icon: IconRelatorio, text: "Relatório" },
          ].map((item, index) => (
            <div className="navItem" key={index}>
              <img src={item.icon} alt={item.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="lastIcon">
        <div className="navItem">
          <img src={IconUser} alt="User" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
