import { Link } from "react-router-dom";
import "../styles/components/CreatePages.css";

// eslint-disable-next-line react/prop-types
const CreatePages = ({ navItemsId }) => {
  const infoNav = [
    {
      link: "/",
      pasta: "Home",
      title: "Home",
      id: "Home",
    },
    {
      link: "/MeusFretes",
      pasta: "MeusFretes",
      title: "Criar frete",
      id: "CriarFrete",
    },
    {
      link: "/MeusFretes",
      pasta: "MeusFretes",
      title: "Lista de fretes",
      id: "ListaDeFretes",
    },
    {
      link: "/MeusFretes",
      pasta: "MeusFretes",
      title: "Monitoramento e viagens",
      id: "MonitoramentoEViagens",
    },
    {
      link: "/BuscarFretes",
      pasta: "BuscarFretes",
      title: "Todos os Fretes",
      id: "TodosFretes",
    },
    {
      link: "/BuscarFretes",
      pasta: "BuscarFretes",
      title: "Cotação de fretes",
      id: "CotacaoFretes",
    },
    {
      link: "/GerenciamentoRiscos",
      pasta: "GerenciamentoRiscos",
      title: "Cadastro e consulta",
      id: "CadastroConsulta",
    },
    {
      link: "/GerenciamentoRiscos",
      pasta: "GerenciamentoRiscos",
      title: "Listagem",
      id: "Listagem",
    },
    {
      link: "/EmitirDocumentos",
      pasta: "EmitirDocumentos",
      title: "CT-e",
      id: "CTe",
    },
    {
      link: "/EmitirDocumentos",
      pasta: "EmitirDocumentos",
      title: "MDF-e",
      id: "MDFe",
    },
    {
      link: "/Relatorios",
      pasta: "Relatorios",
      title: "Dados dos Fretes",
      id: "DadosDosFretes",
    },
    {
      link: "/Relatorios",
      pasta: "Relatorios",
      title: "Análise de rota",
      id: "AnaliseDeRota",
    },
    {
      link: "/Relatorios",
      pasta: "Relatorios",
      title: "Avaliação da empresa",
      id: "AvaliacaoDaEmpresa",
    },
    {
      link: "/MinhaConta",
      pasta: "MinhaConta",
      title: "Gestão de Acessos",
      id: "GestaoDeAcessos",
    },
    {
      link: "/MinhaConta",
      pasta: "MinhaConta",
      title: "Minhas Faturas",
      id: "MinhasFaturas",
    },
    {
      link: "/MinhaConta",
      pasta: "MinhaConta",
      title: "Consumo de Produtos",
      id: "ConsumoDeProdutos",
    },
    {
      link: "/MinhaConta",
      pasta: "MinhaConta",
      title: "Identificação de pagamento",
      id: "IdentificacaoDePagamentos",
    },
  ];
  function verifyID(navItemId, item, index) {
    return item.pasta === navItemId ? (
      <Link to={`${item.link}/${item.id}`} key={index}>
        <p key={index}>{item.title}</p>
      </Link>
    ) : null;
  }
  return (
    <div className="Selecao">
      {infoNav.map((item, index) => verifyID(navItemsId, item, index))}
    </div>
  );
};

export default CreatePages;
