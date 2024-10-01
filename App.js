import React, { useState } from 'react';
import './App.css'; // Importa o arquivo CSS

const CadastroCTTEmergencia = () => {
  const [formData, setFormData] = useState({
    pessoaum: '',
    numeroum: '',
    parentescoum: '',

    pessoadois: '',
    numerodois: '',
    parentescodois: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="container">
   
      <div className="header">
        <img src="/logoaelin.png" alt="Logo" className="logo" />
        <h1 className="title">Última etapa! Estamos acabando.</h1>
        <p className="linkLogin">
          Você precisa nos dizer pelo menos duas pessoas para serem seus "contatos de emergência".
        </p>
      </div>

      <div className="stepsContainer">
        <p className="step">Passo 1 </p> 
        <p className="step">Passo 2</p>
        <p className="step1">Passo 3</p>
      </div>

      <div className="form">
        <div className="inputRowCentered">
          <div className="inputGroupWide">
            <label className="label">Pessoa 1</label>
            <input
              className="input"
              value={formData.pessoaum}
              onChange={(e) => handleInputChange('pessoaum', e.target.value)}
              placeholder="Digite o nome e sobrenome"
            />
          </div>
        </div>

        <div className="inputRow">
          <div className="inputGroup">
            <label className="label">Número</label>
            <input
              className="input"
              value={formData.numeroum}
              onChange={(e) => handleInputChange('numeroum', e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
            />
          </div>

          <div className="inputGroup">
            <label className="label">Parentesco</label>
            <input
              className="input"
              value={formData.parentescoum}
              onChange={(e) => handleInputChange('parentescoum', e.target.value)}
              placeholder="mãe, tia, amiga e etc"
            />
          </div>
        </div>

        <div className="inputRowCentered">
          <div className="inputGroupWide">
            <label className="label">Pessoa 2</label>
            <input
              className="input"
              value={formData.pessoadois}
              onChange={(e) => handleInputChange('pessoadois', e.target.value)}
              placeholder="Digite o nome e sobrenome"
            />
          </div>
        </div>

        <div className="inputRow">
          <div className="inputGroup">
            <label className="label">Número</label>
            <input
              className="input"
              value={formData.numerodois}
              onChange={(e) => handleInputChange('numerodois', e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
            />
          </div>

          <div className="inputGroup">
            <label className="label">Parentesco</label>
            <input
              className="input"
              value={formData.parentescodois}
              onChange={(e) => handleInputChange('parentescodois', e.target.value)}
              placeholder="mãe, tia, amiga e etc"
            />
          </div>
        </div>
      </div>

   
        <button className="button1">Finalizar cadastro</button>
      </div>
  );
};

export default CadastroCTTEmergencia;
