import "../../styles/pages/CriarFrete.css";
import InputComponent from "../../components/InputComponent";
import InputRadio from "../../components/InputRadio";
import InputCheckBox from "../../components/InputCheckBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonModal from "../../components/ButtonModal";
// import ModalComponent from "../../components/ModalComponent";
import { useState } from "react";

const CriarFrete = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);
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

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
    setFormData({ ...formData, radioValue: value });
  };

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

      return 0; // Nomes são iguais
    });

    setResponsaveisFrete(novoArrayOrdenado);
  };

  return (
    <div className="CriarFrete">
      <Header />
      <div className="CriarFreteMain">
        <form onSubmit={handleSubmit}>
          <div className="Titulo">
            <h1>Dados de Coleta e Entrega</h1>
            <p>
              Não mostramos os endereços completos no aplicativo para os
              caminhoneiros, apenas estado e cidade.
            </p>
          </div>
          <InputRadio
            name="LocalizacaoFrete"
            id={["Nacional", "Internacional"]}
            title={["Nacional", "Internacional"]}
            tituloRadios={"Localização do Frete"}
            direction={"row"}
            selected={selectedRadio}
            onChange={handleRadioChange}
          />
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
          <div className="CidadeEntregaDataEntrega">
            <div className="CidadeEntrega">
              <InputComponent
                name="cidadeDeEntrega"
                label="Cidade da Entrega"
                value={formData.cidadeEntrega}
                onChange={handleInputChange}
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

          <div className="ResponsavelFrete">
            <div className="Titulo">
              <h3>Responsável do Frete</h3>
              <p>Selecione os Responsáveis pelo frete e o contato principal</p>
            </div>
            <ButtonModal
              name={"Adicionar Responsável +"}
              type={"button"}
              onSubmit={handleResponsaveisFreteSubmit}
            />
            <div className="ResponsaveisFrete">
              <InputCheckBox
                responsaveisFrete={responsaveisFrete}
                selected={selectedCheckbox}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          
          <Button name={"enviar"} type={"submit"} functionButton={""} />
        </form>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <div className="Titulo">
          <h1>Dados de Coleta e Entrega</h1>
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
          <InputCheckBox
            id={[1, 2, 3]}
            planceHolder={["checkbox1", "checkbox2", "checkbox3"]}
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
  );
};

export default CriarFrete;
