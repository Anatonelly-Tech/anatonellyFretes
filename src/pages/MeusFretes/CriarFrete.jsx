import "../../styles/pages/CriarFrete.css";
import logoAnatonelly from "../../assets/logoAnatonelly.png";
import InputComponent from "../../components/InputComponent";
import InputRadio from "../../components/InputRadio";
import InputCheckBox from "../../components/InputCheckBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonModal from "../../components/ButtonModal";
import SelectOption from "../../components/selectOption";
// import ModalComponent from "../../components/ModalComponent";
import { useState } from "react";

const CriarFrete = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [formData, setFormData] = useState({
    radioValue: null,
    checkboxValue: [],
  });

  const [responsaveisFrete, setResponsaveisFrete] = useState([
    {
      Departamento: "dev",
      Email: "usuario1@gmail.com",
      NomeCompleto: "Usuário 1",
      Senha: "",
      Telefone: "(45) 1111-1111",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario2@gmail.com",
      NomeCompleto: "Usuário 2",
      Senha: "",
      Telefone: "(45) 2222-2222",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario3@gmail.com",
      NomeCompleto: "Usuário 3",
      Senha: "",
      Telefone: "(45) 3333-3333",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario4@gmail.com",
      NomeCompleto: "Usuário 4",
      Senha: "",
      Telefone: "(45) 4444-4444",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario5@gmail.com",
      NomeCompleto: "Usuário 5",
      Senha: "",
      Telefone: "(45) 5555-5555",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario6@gmail.com",
      NomeCompleto: "Usuário 6",
      Senha: "",
      Telefone: "(45) 6666-6666",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario7@gmail.com",
      NomeCompleto: "Usuário 7",
      Senha: "",
      Telefone: "(45) 7777-7777",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario8@gmail.com",
      NomeCompleto: "Usuário 8",
      Senha: "",
      Telefone: "(45) 8888-8888",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario9@gmail.com",
      NomeCompleto: "Usuário 9",
      Senha: "",
      Telefone: "(45) 9999-9999",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario10@gmail.com",
      NomeCompleto: "Usuário 10",
      Senha: "",
      Telefone: "(45) 1010-1010",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario11@gmail.com",
      NomeCompleto: "Usuário 11",
      Senha: "",
      Telefone: "(45) 1111-1111",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario12@gmail.com",
      NomeCompleto: "Usuário 12",
      Senha: "",
      Telefone: "(45) 1212-1212",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario13@gmail.com",
      NomeCompleto: "Usuário 13",
      Senha: "",
      Telefone: "(45) 1313-1313",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario14@gmail.com",
      NomeCompleto: "Usuário 14",
      Senha: "",
      Telefone: "(45) 1414-1414",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario15@gmail.com",
      NomeCompleto: "Usuário 15",
      Senha: "",
      Telefone: "(45) 1515-1515",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario16@gmail.com",
      NomeCompleto: "Usuário 16",
      Senha: "",
      Telefone: "(45) 1616-1616",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario17@gmail.com",
      NomeCompleto: "Usuário 17",
      Senha: "",
      Telefone: "(45) 1717-1717",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario18@gmail.com",
      NomeCompleto: "Usuário 18",
      Senha: "",
      Telefone: "(45) 1818-1818",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario19@gmail.com",
      NomeCompleto: "Usuário 19",
      Senha: "",
      Telefone: "(45) 1919-1919",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario20@gmail.com",
      NomeCompleto: "Usuário 20",
      Senha: "",
      Telefone: "(45) 2020-2020",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario21@gmail.com",
      NomeCompleto: "Usuário 21",
      Senha: "",
      Telefone: "(45) 2121-2121",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario22@gmail.com",
      NomeCompleto: "Usuário 22",
      Senha: "",
      Telefone: "(45) 2222-2222",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario23@gmail.com",
      NomeCompleto: "Usuário 23",
      Senha: "",
      Telefone: "(45) 2323-2323",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario24@gmail.com",
      NomeCompleto: "Usuário 24",
      Senha: "",
      Telefone: "(45) 2424-2424",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario25@gmail.com",
      NomeCompleto: "Usuário 25",
      Senha: "",
      Telefone: "(45) 2525-2525",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario26@gmail.com",
      NomeCompleto: "Usuário 26",
      Senha: "",
      Telefone: "(45) 2626-2626",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario27@gmail.com",
      NomeCompleto: "Usuário 27",
      Senha: "",
      Telefone: "(45) 2727-2727",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario28@gmail.com",
      NomeCompleto: "Usuário 28",
      Senha: "",
      Telefone: "(45) 2828-2828",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario29@gmail.com",
      NomeCompleto: "Usuário 29",
      Senha: "",
      Telefone: "(45) 2929-2929",
      radioValue: "",
      radioValue2: "",
    },
    {
      Departamento: "dev",
      Email: "usuario30@gmail.com",
      NomeCompleto: "Usuário 30",
      Senha: "",
      Telefone: "(45) 3030-3030",
      radioValue: "",
      radioValue2: "",
    },
  ]);
  const dadosVeiculos = [
    {
      titulo: "Escolha Veículo",
      opcoes: [
        {
          titulo: "Leve",
          opcoes: [
            "Todos os Leves",
            "Caminhonete",
            "Fiorino",
            "Kombi",
            "Van",
            "Outros",
          ],
        },
        {
          titulo: "Médio",
          opcoes: ["Todos os Médios", "Truck", "Bitruck"],
        },
        {
          titulo: "Pesado",
          opcoes: [
            "Todos os Pesados",
            "Carreta",
            "Carreta Ls",
            "Bitrem",
            "Vand Erleia",
            "RodoTrem",
          ],
        },
      ],
    },
  ];
  const escolhaCarretas = [
    {
      titulo: "Escolha Quantas Carrocerias Quiser",
      opcoes: [
        {
          titulo: "Fechada",
          opcoes: ["Bau", "Sider", "Graneleiro", "Porta Container", "Outros"],
        },
        {
          titulo: "Aberta",
          opcoes: [
            "Aberto",
            "Caçamba",
            "Gaiola",
            "Graneleiro",
            "Prancha",
            "Outros",
          ],
        },
        {
          titulo: "Especial",
          opcoes: [
            "Apenas Cavalo",
            "Bug Porta Container",
            "Cavaqueira",
            "Cegonheiro",
            "Gaiola",
            "Hopper",
            "Munck",
            "Silo",
            "Tanque",
          ],
        },
      ],
    },
  ];

  const handleCheckboxChange = (value) => {
    const newSelectedCheckbox = selectedCheckbox.includes(value)
      ? selectedCheckbox.filter((item) => item !== value)
      : [...selectedCheckbox, value];

    setSelectedCheckbox(newSelectedCheckbox);
    setFormData({ ...formData, checkboxValue: newSelectedCheckbox });
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário
    console.log("Dados do formulário:", formData);
  };

  const handleResponsaveisFreteSubmit = (formData) => {
    const novoArray = [...responsaveisFrete, formData];

    const novoArrayOrdenado = novoArray.sort((a, b) => {
      const nomeA = a.NomeCompleto.toUpperCase();
      const nomeB = b.NomeCompleto.toUpperCase();

      if (nomeA < nomeB) {
        return -1;
      }

      if (nomeA > nomeB) {
        return 1;
      }

      return 0;
    });

    setResponsaveisFrete(novoArrayOrdenado);
  };
  const [selectedRadioLocalizacao, setSelectedRadioLocalizacao] =
    useState(null);
  const [selectedRadioTipoCarga, setSelectedRadioTipoCarga] = useState(null);
  const [selectedRadioLona, setSelectedRadioLona] = useState(null);
  const [selectedRadioRastreador, setSelectedRadioRastreador] = useState(null);
  const [selectedRadioValorInfo, setSelectedRadioValorInfo] = useState(null);
  const [selectedRadioPedagio, setSelectedRadioPedagio] = useState(null);
  const [selectedRadioCalculoValor, setSelectedRadioCalculoValor] =
    useState(null);
  const [selectedRadioUnidadeMedida, setSelectedRadioUnidadeMedida] =
    useState(null);
  const handleRadioLocalizacaoChange = (value) => {
    setSelectedRadioLocalizacao(value);
    setFormData({ ...formData, radioValue: value });
  };

  const handleRadioTipoCargaChange = (value) => {
    setSelectedRadioTipoCarga(value);
    // ... (outras ações)
  };

  const handleRadioLonaChange = (value) => {
    setSelectedRadioLona(value);
    // ... (outras ações)
  };

  const handleRadioRastreadorChange = (value) => {
    setSelectedRadioRastreador(value);
    // ... (outras ações)
  };
  const handleRadioUnidadeMedida = (value) => {
    setSelectedRadioUnidadeMedida(value);
    // ... (outras ações)
  };
  const handleRadioValorInfo = (value) => {
    setSelectedRadioValorInfo(value);
    // ... (outras ações)
  };
  const handleRadioPedagio = (value) => {
    setSelectedRadioPedagio(value);
    // ... (outras ações)
  };
  const handleRadioCalculoValor = (value) => {
    setSelectedRadioCalculoValor(value);
    // ... (outras ações)
  };

  return (
    <>
      <Header
        titulo="Criar Frete"
        subtitulo="Cadastro de Frete"
        username="Jorge Luiz Fana Guedes"
        role="Admin"
      />
      <div className="CriarFrete">
        <div className="CriarFreteMain">
          <form onSubmit={handleSubmit}>
            <div className="Titulo">
              <h2>Dados de Coleta e Entrega</h2>
              <p>
                Não mostramos os endereços completos no aplicativo para os
                caminhoneiros, apenas estado e cidade.
              </p>
            </div>
            <InputRadio
              groupName="LocalizacaoFrete"
              id={["Nacional", "Internacional"]}
              title={["Nacional", "Internacional"]}
              tituloRadios={"Localização do Frete*"}
              direction={"row"}
              selected={selectedRadioLocalizacao}
              onChange={handleRadioLocalizacaoChange}
              required={true}
            />
            <div className="coletaEentrega">

            <div className="CidadeColetaDataColeta">
              <div className="CidadeColeta">
                <InputComponent
                  name="cidadeDeColeta"
                  label="Cidade da Coleta*"
                  value={formData.cidadeColeta}
                  onChange={handleInputChange}
                  required={true}
                  />
              </div>
              <div className="DataColeta">
                <InputComponent
                  name="DataDeColeta"
                  label="Data"
                  type={"date"}
                  value={formData.dataColeta}
                  onChange={handleInputChange}
                  />
              </div>
            </div>
            <div className="CidadeEntregaDataEntrega">
              <div className="CidadeEntrega">
                <InputComponent
                  name="cidadeDeEntrega"
                  label="Cidade da Entrega*"
                  value={formData.cidadeEntrega}
                  onChange={handleInputChange}
                  required={true}
                  />
              </div>
              <div className="DataEntrega">
                <InputComponent
                  name="DataDeEntrega"
                  label="Data"
                  type={"date"}
                  value={formData.dataEntrega}
                  onChange={handleInputChange}
                />
              </div>
            </div>
                  </div>

            <div className="ResponsavelFrete">
              <div className="Titulo">
                <h2>Responsável do Frete</h2>
                <p>
                  Selecione os Responsáveis pelo frete e o contato principal
                </p>
              </div>
              <ButtonModal
                name={"Adicionar Responsável +"}
                type={"button"}
                onSubmit={handleResponsaveisFreteSubmit}
              />
              <div className="ResponsaveisFrete">
                <InputCheckBox
                  type={"user"}
                  newArray={responsaveisFrete}
                  selected={selectedCheckbox}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
            <div className="DadosCarga">
              <div className="Titulo">
                <h2>Dados da Carga</h2>
                <p>
                  Quanto mais Informações você preenche, menos ligações
                  desnecessárias você recebe.
                </p>
              </div>
              <div className="DadosCargaRadios">
                <InputRadio
                  groupName="TipoCarga"
                  id={["Completa", "Complemento"]}
                  title={["Completa", "Complemento"]}
                  tituloRadios={"Tipo de Carga*"}
                  direction={"row"}
                  selected={selectedRadioTipoCarga}
                  onChange={handleRadioTipoCargaChange}
                  required={true}
                />

                <InputRadio
                  name="Lona"
                  id={["Sim", "Não"]}
                  title={["Sim", "Não"]}
                  tituloRadios={"Precisa de Lona?*"}
                  direction={"row"}
                  selected={selectedRadioLona}
                  onChange={handleRadioLonaChange}
                  required={true}
                />
                <InputRadio
                  name="Rastreador"
                  id={["Sim", "Não"]}
                  title={["Sim", "Não"]}
                  tituloRadios={"Precisa de Rastreador?*"}
                  direction={"row"}
                  selected={selectedRadioRastreador}
                  onChange={handleRadioRastreadorChange}
                  required={true}
                />
                <InputRadio
                  name="UnidadeMedida"
                  id={["Quilo", "Tonelada"]}
                  title={["Por Quilo", "Por Tonelada"]}
                  tituloRadios={"Unidade de Medida*"}
                  direction={"row"}
                  selected={selectedRadioUnidadeMedida}
                  onChange={handleRadioUnidadeMedida}
                  required={true}
                />
              </div>
              <div className="DadosCargaInputs">
                <InputComponent
                  name="Produto"
                  label="Produto*"
                  value={formData.produto}
                  onChange={handleInputChange}
                  required={true}
                />
                <InputComponent
                  name="especie"
                  label="Espécie*"
                  value={formData.especie}
                  onChange={handleInputChange}
                  required={true}
                />

                <InputComponent
                  name="PesoTotalDaCarga"
                  label="Peso Total Da Carga*"
                  value={formData.pesoTotalDaCarga}
                  onChange={handleInputChange}
                  required={true}
                />
                <InputComponent
                  name="Volume"
                  label="Volume (Opicional)"
                  value={formData.volume}
                  onChange={handleInputChange}
                />

                <InputComponent
                  name="PesoCubado"
                  label="Peso Cubado (Opicional)"
                  value={formData.pesoCubado}
                  onChange={handleInputChange}
                />

                <InputComponent
                  name="MetragemCubicaTotal"
                  label="Metragem Cubica Total (M³) (Opicional)"
                  value={formData.metragemCubicaTotal}
                  onChange={handleInputChange}
                />

                <InputComponent
                  name="Comprimento"
                  label="Comprimento (Opicional)"
                  value={formData.comprimento}
                  onChange={handleInputChange}
                />

                <InputComponent
                  name="Largura"
                  label="Largura (Opicional)"
                  value={formData.largura}
                  onChange={handleInputChange}
                />

                <InputComponent
                  name=""
                  label="Altura (Opicional)"
                  value={formData.altura}
                  onChange={handleInputChange}
                />
              </div>
              <div className="Veiculos">
                <div className="VeiculosInside">
                  <div className="Titulo">
                    <h2>Escolha Quantos Veículos Quiser</h2>
                    <p>
                      Marcamos Algumas Sugestões de Veiculos com a espécie da
                      Carga.
                    </p>
                  </div>
                  <div className="VeiculosLevesMediosPesados">
                    <InputCheckBox
                      type={"veiculo"}
                      newArray={dadosVeiculos}
                      selected={selectedCheckbox}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
                <div className="Carrocerias">
                  <div className="Titulo">
                    <h2>Escolha Quantas Carrocerias Quiser</h2>
                    <p>
                      {" "}
                      Marcamos Algumas Sugestões de Carrocerias com a espécie da
                      Carga.
                    </p>
                  </div>
                  <div className="CarroceriasFechadaAbertaEspecial">
                    <InputCheckBox
                      type={"carroceria"}
                      newArray={escolhaCarretas}
                      selected={selectedCheckbox}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="DadosPagamento">
              <div className="Titulo">
                <h2>Dados do Pagamento</h2>
              </div>

              <div className="DadosPagamentoRadios">
                <InputRadio
                  name="InformacoesValor"
                  id={["Já Sei o Valor", "A Combinar"]}
                  title={["Já Sei o Valor", "A Combinar"]}
                  tituloRadios={"Informações de Valor*"}
                  direction={"row"}
                  selected={selectedRadioValorInfo}
                  onChange={handleRadioValorInfo}
                  required={true}
                />
                <InputRadio
                  name="Pedagio"
                  id={["Incluso no Valor", "Pago a Parte"]}
                  title={["Incluso no Valor", "Pago a Parte"]}
                  tituloRadios={"Pedágio*"}
                  direction={"row"}
                  selected={selectedRadioPedagio}
                  onChange={handleRadioPedagio}
                  required={true}
                />
                <InputRadio
                  name="CalculoValor"
                  id={["Por Quilo", "Por Tonelada", "Total"]}
                  title={["Por Quilo", "Por Tonelada", "Total"]}
                  tituloRadios={"Cálculo do Valor*"}
                  direction={"row"}
                  selected={selectedRadioCalculoValor}
                  onChange={handleRadioCalculoValor}
                  required={true}
                />
              </div>
              <div className="DadosPagamentoInputs">
                <InputComponent
                  name="ValorFrete"
                  label="Valor do Frete*"
                  value={formData.valorFrete}
                  onChange={handleInputChange}
                  required={true}
                />
                <InputComponent
                  name="Adiantamento"
                  label="Adiantamento (Opicional)"
                  value={formData.adiantamento}
                  onChange={handleInputChange}
                />
                <SelectOption />
                <InputComponent
                  type="textarea"
                  name="Observacoes"
                  label="Observações (Opicional)"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <Button
              name={"Publicar Frete"}
              type={"submit"}
              functionButton={""}
            />
          </form>
        </div>
        {/* <div className="rightPage">
          <div className="infoTop">
            <h3>Preencha o formulário para cadastrar um novo frete.</h3>
          </div>
          <img src={logoAnatonelly} draggable="false" className="logoPageCriar" alt="" />
        </div> */}
        {/* <form onSubmit={handleSubmit}>
        <div className="Titulo">
          <h2>Dados de Coleta e Entrega</h2>
          <h2>
            Não mostramos os endereços completos no aplicativo para os
            caminhoneiros, apenas estado e cidade.
          </h2>
        </div>
        <div className="LocalizacaoFrete">
          <h3>Localização do Frete</h3>
          <div>aqui vão os input radio</div>

          <InputRadio
            name="radioGroup"
            id={[1, 2, 3]}
            title={["teste", "teste", "teste"]}
            selected={selectedRadio}
            onChange={handleRadioChange}
          />
        </div>
        <div className="CidadeColetaDataColeta">
          <div className="CidadeColeta">
            <InputComponent
              name="cidadeDeColeta"
              label="Cidade da Coleta"
              value={formData.cidadeColeta}
              onChange={handleInputChange}
            />
          </div>
          <div className="DataColeta">
            <InputComponent
              name="DataDeColeta"
              label="Data"
              type={"date"}
              value={formData.dataColeta}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="teste">
          <InputCheckBoxNormal
            id={[1, 2, 3]}
            planceHolder={["checkbox1", "checkbox2", "checkbox3"]}
            subtitle={''}
            selected={selectedCheckbox}
            onChange={handleCheckboxChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form> */}
        {/*
      &Dados de coleta e entrega 
        --Localização do Frete (radio)
          -Nacional (option)
          -Internacional  (option)
        --Cidade da Coleta (input)
        --Data da Coleta (input) [Opicional]
        --Cidade da Entrega (input)
        --Data da Entrega (input) [Opicional]
        --Botão de Adicionar Responsavel (button)
        --Responsável do Frete (checkbox)
      &Dados da Carga
        --Tipó de Carga (radio)
          -Completa (option)
          -Complemento (option)
        --Precisa de Lona (radio) 
          -sim  (option)
          -não  (option)
        --Precisa de Rastreador  
          -sim  (option)
          -não  (option)
          --Produto (input)
          --Peso Total Da Carga(input)
          --Espécie (input Select)
            -Animais (option)
            -Big Bag (option)
            -Bobina (option)
            -Caixas (option)
            -Container (option)
            -Diversos (option)
            -Fardo (option)
            -Fracionada (option)
            -Granel (option)
            -Metro Cubico (option)
            -Milheiro (option)
            -Mudança (option)
            -Paletes (option)
            -Passageiro (option)
            -Sacos (option)
            -Tambor (option)
            -Unidades (option)
          --Unidade de Medida (input Select)
            -Por Quilo (option)
            -Por Tonelada (option)
          --Volume (input) [Opicional]
          --Peso Cubado (input) [Opicional]
          --Metragem Cubica Total (M³) (input) [Opicional]
          --Comprimento (input) [Opicional]
          --Largura (input) [Opicional]
          --Altura (input) [Opicional]
          --Mais Informações (textarea)
      &Escolha Veículo
        --leve (titulo)
        --veículos leves (radio)
          -todos os leves (option)
          -Caminhonete (option)
          -Fiorino (option)
          -Kombi (option)
          -Van (option)
          -Outros (option)
        --Medio (titulo)
        --veículos medios (radio)
          -todos os medios (option)
          -Truck (option)
          -Bitruck (option)
        --Pesado (titulo)
        --veículos pesados (radio)
          -todos os pesados (option)
          -Carreta (option)
          -Carreta Ls (option)
          -Bitrem (option)
          -vand erleia (option)
          -RodoTrem (option)
      &Escolha quantas carrocerias quiser
        --fechada (titulo)
          --veículos fechados (checkbox)
            -Bau (option)
            -Sider (option)
            -Graneleiro (option)
            -Porta Container (option)
            -Porta Container (option)
            -Outros (option)  
        --aberta (titulo)
          --veículos abertos (checkbox)
            -Aberto (option)
            -Caçamba (option)
            -Gaiola (option)
            -Graneleiro (option)
            -Prancha (option)
            -Outros (option)
        --especial (titulo)
          --veículos especiais (checkbox)
            -Apenas Cavalo (option)
            -Bug Porta Container (option)
            -Cavaqueira (option)
            -Cegonheiro (option)
            -Gaiola (option)
            -Hopper (option)
            -Munck (option) 
            -Silo (option)
            -Tanque (option)
      &Dados do Pagamento
        --Informações de Valor (titulo)
          -Já Sei o Valor (option)
          -A Combinar (option)
        --Pedágio (titulo)
          -Incluso no volor(option)
          -Pago a ParteParte (option)
        --Valor do Frete (input)
        --Cálculo do Valor (Select)
          -Por Quilo (option)
          -Por Tonelada (option)        
          -Total (option)
        --Forma de Pagamento (Select) [Opicional]
          -Depósito em Conta (option)
          -Crédito em Cartão (option)
          -Pix (option)
          -Cheque (option)
          -E-Frete (option)
          -Outros (option)
        --Adiantamento (input) [Opicional]
        --Observações (textarea) [Opicional]
      --Escolha o ttipo do Frete (radio)
        -frete simples (option)
        -frete destaque extra (option)
      --Publicar Frete (button)  
    */}
      </div>
    </>
  );
};

export default CriarFrete;
