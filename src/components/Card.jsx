import React from "react";
import "../styles/Card.css";
import IconUser from "../assets/Icons/IconUser.svg";
import IconMoney from "../assets/Icons/IconMoney.svg";
import MarketingImage2 from "../assets/MarketingImage2.png";
import CotacaodeFretes from "../assets/Icons/IconCotacaoDeFretes.svg";
import ViagenseMonitoramento from "../assets/Icons/IconViagensEMonitoramento.svg";
import PF from "../assets/Icons/IconPerguntasFrequentes.svg";
import Line from "../assets/Line.svg";
import OrigemDestino from "../assets/Destino.svg";
// import IconUser from "../assets/Icons/IconUser";

const Card = () => {
  const OutrosAcessos = [
    {
      link: "#",
      icon: CotacaodeFretes,
      text: "Cotação de Fretes",
    },
    {
      link: "#",
      icon: ViagenseMonitoramento,
      text: "Viagens e Monitoramento",
    },
    {
      link: "#",
      icon: PF,
      text: "Perguntas Frequentes",
    },
  ];
  const qntdFretes = 2;
  const Cards = [
    {
      link: "#",
      icon: IconMoney,
      info: "R$ 499,99",
      title: "Ver Fatura",
      id: "fatura",
    },
    {
      link: "#",
      icon: IconUser,
      info: "9 de 10 Usuários",
      title: "Gerenciar Usuários",
      id: "usuarios",
    },
  ];
  const Viagens = [
    {
      id: "1",
      transporte: "Carreta LS +2",
      transporte2: "Graneleiro",
      infoProduto: "Farelo de Soja",
      cidadeOrigem: "Lucas do Rio Verde, MT",
      cidadeDestino: "Areias, SP",
      link: "#",
    },
    {
      id: "2",
      transporte: "3/4 +6",
      transporte2: "Graneleiro +3",
      infoProduto: "Tanque 700kg",
      cidadeOrigem: "Mogi Guaçu, SP",
      cidadeDestino: "Felicio dos Santos, MG",
      link: "#",
    },
  ];
  return (
    <div className="Card">
      <div className="cardLeft">
        <div className="informationsCards">
          {Cards.map((card) => (
            <div className="Card__container" key={card.id}>
              <img src={card.icon} alt="" draggable="false"/>
              <h2>{card.info}</h2>
              <a href={card.link}>
                <p>{card.title}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="fotoComInfo">
          {<img src={MarketingImage2} alt="fotoMarketing" draggable="false" />}
          <h1>
            Gerenciamento de Risco Anatonelly: Reduza 61% nos seus custos com GR
          </h1>
        </div>
      </div>
      <div className="cardRight">
        <div className="cardRightSup">
          <div className="cardRightSupHeader">
            <div className="cardRightSupText">
              <h2>{qntdFretes} Fretes</h2>
              <p>ATIVOS</p>
            </div>
            <button>Criar Frete</button>
          </div>
          <div className="cardRightInf">
            {Viagens.map((Viagens) => (
              <div className="viagem" key={Viagens.id}>
                <div className="viagemInterior">
                  <div className="viagemText">
                    <div className="viagemTextTransporte">
                      <h4>{Viagens.transporte}</h4>
                      <h4>|</h4>
                      <h4>{Viagens.transporte2}</h4>
                    </div>
                    <p>{Viagens.infoProduto}</p>
                  </div>
                  <div className="OrigemDestino">
                    <img src={OrigemDestino} alt=""draggable="false"/>
                    <div className="viagemCidades">
                      <h2>{Viagens.cidadeOrigem}</h2>
                      <h2>{Viagens.cidadeDestino}</h2>
                    </div>
                  </div>
                  <div className="ViagemButton">
                    <button>Ver Detalhes</button>
                  </div>
                </div>
                {Viagens.id == 1 ? <hr /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="cardRightBottom">
          <h1>Outros Acessos</h1>
          <div className="mapOrdenado">
            {OutrosAcessos.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className="OutrasAcoesMap" key={index}>
                <a href={item.link}>
                  <div className="Oa">
                    <img className="icon" src={item.icon} alt={item.text} draggable="false" />
                    <h3>{item.text}</h3>
                  </div>
                </a>
                {index < OutrosAcessos.length - 1 && (
                  <img className="LineOA" src={Line} alt="Line" draggable="false" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
