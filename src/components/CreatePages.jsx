import React from "react";
import "../styles/CreatePages.css";
const CreatePages = ({ navItemsId, selectedNavItem }) => {
  const infoNav =[
    {
      link: "",
      title: "Criar frete",
      id: "meusfretes",
    },
    {
      link: "",
      title: "Lista de fretes",
      id: "meusfretes",
    },
    {
      link: "",
      title: "Monitoramento e viagens",
      id: "meusfretes",
    },
    {
      link: "",
      title: "Todos os Fretes",
      id: "buscarfretes",
    },
    {
      link: "",
      title: "Cotação de fretes",
      id: "buscarfretes",
    },
    {
      link: "",
      title: "Cadastro e consulta",
      id: "gerenciamentoderiscos",
    },
    {
      link: "",
      title: "Listagem",
      id: "gerenciamentoderiscos",
    },
    {
      link: "",
      title: "CT-e",
      id: "emitirdocumentosfiscais",
    },
    {
      link: "",
      title: "MDF-e",
      id: "emitirdocumentosfiscais",
    },
    {
      link: "",
      title: "Ver Outras Opções do TMS",
      id: "emitirdocumentosfiscais",
    },
    {
      link: "",
      title: "Dados dos Fretes",
      id: "relatorio",
    },
    {
      link: "",
      title: "Análise de rota",
      id: "relatorio",
    },
    {
      link: "",
      title: "Avaliação da empresa",
      id: "relatorio",
    },
    {
      link: "",
      title: "Gestão de Acessos",
      id: "minhaconta",
    },
    {
      link: "",
      title: "Minhas Faturas",
      id: "minhaconta",
    },
    {
      link: "",
      title: "Consumo de Produtos",
      id: "minhaconta",
    },
    {
      link: "",
      title: "Identificação de pagamento",
      id: "minhaconta",
    },
  ];

  function verifyID(navItemId, item, index) {
    return navItemId === item.id ? <p key={index}>{item.title}</p> : null;
  }
  
  return (
    <div className="Selecao">
      {infoNav.map((item, index) => verifyID(navItemsId, item, index))}
    </div>
  );
};
export default CreatePages;
