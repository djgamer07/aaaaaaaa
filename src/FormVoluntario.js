import React, { useState } from 'react';
import './FormVoluntario.css';

function FormVoluntario() {

  const [nome, setNome] = useState('');
  const [contacto, setContacto] = useState('');
  const [dias, setDias] = useState('');
  const [horario, setHorario] = useState('');
  const [comentario, setComentario] = useState('');
  const [botaoDesativado, setBotaoDesativado] = useState(false);

  const palavrasProibidas = [
    "Abécula",
    "Abentesma",
    "Alimária",
    "Achavascado",
    "Andrajoso",
    "Barregã",
    "Biltre",
    "Cacóstomo",
    "Cuarra",
    "Estólido",
    "Estroso",
    "Estultilóquio",
    "Nefelibata",
    "Néscio",
    "Pechenga",
    "Sevandija",
    "Somítico",
    "Tatibitate",
    "Xexé",
    "Xexelento",
    "Cheché"
  ];

  const handleComentarioChange = (event) => {
    const texto = event.target.value;
    setComentario(texto);

    const contemPalavraProibida = palavrasProibidas.some(palavra =>
      texto.toLowerCase().includes(palavra.toLowerCase())
    );

    setBotaoDesativado(contemPalavraProibida);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Obrigado ${nome} pela sua inscrição, em breve será contactado pela banda.`);
    setNome('');
    setContacto('');
    setDias('');
    setHorario('');
    setComentario('');
  };

  return (
    <div className="form-container">
      <h2>Formulário de Inscrição de Voluntário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contacto">Contacto (Email ou Telemóvel):</label>
          <input
            type="text"
            id="contacto"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dias">Disponibilidade (dias da semana):</label>
          <input
            type="text"
            id="dias"
            value={dias}
            onChange={(e) => setDias(e.target.value)}
            placeholder="Ex: Segundas, Quartas e Fins de semana"
          />
        </div>
        <div className="form-group">
          <label htmlFor="horario">Disponibilidade (horário):</label>
          <input
            type="text"
            id="horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            placeholder="Ex: Pós-laboral, das 10h às 14h"
          />
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentário:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={handleComentarioChange}
            rows="4"
          />
           {botaoDesativado && <p className="error-message">O seu comentário contém palavras não permitidas.</p>}
        </div>
        <button type="submit" disabled={botaoDesativado}>
          Submeter Inscrição
        </button>
      </form>
    </div>
  );
}

export default FormVoluntario;
