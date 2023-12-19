// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CreatePages from "./CreatePages";
import "../styles/NavBarActive.css";
import Logo from "../assets/LogoAnatonelly.png";
import IconHome from "../assets/Icons/IconHome.svg";
import IconMeusFretes from "../assets/Icons/IconMeusFretes.svg";
import IconBuscarFretes from "../assets/Icons/IconBuscarFretes.svg";
import IconGerenciamentodeRiscos from "../assets/Icons/IconGerenciamentodeRiscos.svg";
import IconEmitirDocumentosFiscais from "../assets/Icons/IconEmitirDocumentosFiscais.svg";
import IconRelatorio from "../assets/Icons/IconRelatorio.svg";
import IconUser from "../assets/Icons/IconUser.svg";
import Seta from "../assets/Icons/Seta.svg";
const NavBarActive = () => {
  const [openItem, setOpenItem] = useState(null);

  const navItems = [
    {
      id: "home",
      icon: IconHome,
      text: "Home",
    },
    {
      id: "meusfretes",
      icon: IconMeusFretes,
      text: "Meus Fretes",
      seta: Seta,
    },
    {
      id: "buscarfretes",
      icon: IconBuscarFretes,
      text: "Buscar Fretes",
      seta: Seta,
    },
    {
      id: "gerenciamentoderiscos",
      icon: IconGerenciamentodeRiscos,
      text: "Gerenciamento de Riscos",
      seta: Seta,
    },
    {
      id: "emitirdocumentosfiscais",
      icon: IconEmitirDocumentosFiscais,
      text: "Emitir Documentos Fiscais",
      seta: Seta,
    },
    {
      id: "relatorio",
      icon: IconRelatorio,
      text: "Relatório",
      seta: Seta,
    },
  ];

  function CheckClick(itemid) {
    if (itemid == "home") {
      return;
    }
    if (openItem === itemid) {
      // If the clicked item is already open, close it
      if (itemid == "minhaconta") {
        document.getElementById("LastOne").style.top = "90%";
      }
      document.querySelector(`#${itemid} .Selecao`).style.display = "none";
      document.querySelector(`#${itemid} .seta`).style.transform =
        "rotate(0deg)";
      setOpenItem(null);
    } else {
      // Close the previously open item, if any
      if (openItem) {
        document.querySelector(`#${openItem} .Selecao`).style.display = "none";
        document.querySelector(`#${openItem} .seta`).style.transform =
          "rotate(0deg)";
        document.getElementById("LastOne").style.top = "90%";
      }
      if (itemid == "minhaconta") {
        document.getElementById("LastOne").style.top = "70%";
      }

      // Open the clicked item
      document.querySelector(`#${itemid} .Selecao`).style.display = "flex";
      document.querySelector(`#${itemid} .seta`).style.transform =
        "rotate(180deg)";
      setOpenItem(itemid);
    }
  }
  return (
    <div className="NavBarActive">
      <div className="NavSupActive">
        <div className="logoActive">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="mainNavActive">
          {navItems.map((item) => (
            <>
              <div className="navAll" id={item.id}>
                <div className="navItemActive" onClick={() => CheckClick(item.id)}>
                  <img src={item.icon} alt={item.text} />
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                  <img src={item.seta} alt="" className="seta" />
                </div>
                <CreatePages navItemsId={item.id} />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="lastIconActive" id="LastOne">
        <div
          className="navItemLast"
          id="minhaconta"
          onClick={() => CheckClick("minhaconta")}
        >
          <div className="navItemActive">
            <img src={IconUser} alt="User" />
            <div className="text">
              <p>Minha Conta</p>
            </div>
            <img src={Seta} className="seta" alt="seta" />
          </div>
          <CreatePages navItemsId={"minhaconta"} />
        </div>
      </div>
    </div>
  );
};

export default NavBarActive;
