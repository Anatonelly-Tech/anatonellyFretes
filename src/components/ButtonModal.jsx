import React from 'react'
import Modal from 'react-modal';
import { useState } from "react";
import InputComponent from "./InputComponent";
import InputRadio from "./InputRadio";
import Button from "./Button";
import "../../src/styles/components/Modal.css";

const ButtonModal = ({ onSubmit, name, type}) => {
    Modal.setAppElement("#root");
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [selectedRadio2, setSelectedRadio2] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    const [formData, setFormData] = useState({
      radioValue: null,
      radioValue2: null,
    });
    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
    const handleRadioChange = (value) => {
      setSelectedRadio(value);
      setFormData({ ...formData, radioValue: value });
    };
    const handleRadioChange2 = (value) => {
      setSelectedRadio2(value);
      setFormData({ ...formData, radioValue2: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dados do formulário:", formData);
      
        onSubmit(formData);

        closeModal();
    };
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
        <button
            className="ButtonComponent"
            role="button"
            onClick={openModal}
            type={type}
        >
            <span className="text">{name}</span>
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="Modal"
            contentLabel="Example Modal"
        >
            <div className="TituloModal">
                <h1>Adicionar Usuário</h1>
                <Button name="X" type="button" functionButton={closeModal} />
            </div>
            <form onSubmit={handleSubmit} id='NewUser'>
                <div className="InputsModal">
                    <h2>Dados Pessoais</h2>
                    <div className="NomeEmail">
                    <InputComponent
                            name="NomeCompleto"
                            label="Nome Completo"
                            value={formData.NomeCompleto}
                            onChange={handleInputChange}
                    />
                    <InputComponent
                            name="Email"
                            label="E-mail"
                            value={formData.NomeCompleto}
                            onChange={handleInputChange}
                    />
                    </div>
                    <div className="TelefoneContato">
                    <InputComponent
                            name="Telefone"
                            label="Telefone"
                            value={formData.NomeCompleto}
                            onChange={handleInputChange}
                            />
                    <InputRadio
                        name="FormaDeContato"
                        id={["SomenteLigacao", "LigacaoWhatsapp"]}
                        title={["Somente Ligação", "Ligação e Whatsapp"]}
                        tituloRadios={"Forma de Contato"}
                        direction={"Row"}
                        selected={selectedRadio}
                        onChange={handleRadioChange}
                        />

                    </div>
                </div>

                <h2>Dados Profissionais</h2>
                    <div className="NivelAcessoDepartamento">
                    <InputComponent
                            name="Departamento"
                            label="Departamento (Opcional)"
                            value={formData.NomeCompleto}
                            onChange={handleInputChange}
                    />
                    <InputRadio
                        name="Role"
                        id={["Administrador", "Colaborador"]}
                        title={["Administrador", "Colaborador"]}
                        tituloRadios={"Nivel de Acesso"}
                        direction={"row"}
                        selected={selectedRadio2}
                        onChange={handleRadioChange2}
                        />
                    </div>
                    <h2>Senha</h2>
                <div className="ModalSenha">
                    <InputComponent
                            name="Senha"
                            label="Senha"
                            type={"password"}
                            value={formData.NomeCompleto}
                            onChange={handleInputChange}
                            />
                    <InputComponent
                            name="ConfirmarSenha"
                            label="Confirmar Senha"
                            type={"password"}
                            value={formData.NomeCompleto}
                            onChange={handleInputChange}
                    />

                </div>
            
            
                <div className="ButtonsModal">
                    {/* editar a função desse botão */}
                    <Button name="Criar Usuário" type="submit" functionButton={handleSubmit} />
                </div>
            </form>
        </Modal>
        </div>
    );
}


export default ButtonModal