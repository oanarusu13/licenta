import React, { useState } from 'react';

const Formular = () => {
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [titlu, setTitlu] = useState('');
  const [descriere, setDescriere] = useState('');
  const [urgenta, setUrgenta] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nume, prenume, titlu, descriere, urgenta });
    alert('Alertă raportată cu succes!');
  };

  return (
    <div>
      <h2>Raportează o Alertă</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nume">Nume:</label>
          <input
            type="text"
            id="nume"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prenume">Prenume:</label>
          <input
            type="text"
            id="prenume"
            value={prenume}
            onChange={(e) => setPrenume(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="titlu">Titlu Alertă:</label>
          <input
            type="text"
            id="titlu"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descriere">Descriere:</label>
          <textarea
            id="descriere"
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="urgenta">Nivel de Urgență:</label>
          <select id="urgenta" value={urgenta} onChange={(e) => setUrgenta(e.target.value)}>
            <option value="">Selectează Urgența</option>
            <option value="scăzută">Scăzută</option>
            <option value="moderată">Moderată</option>
            <option value="înaltă">Înaltă</option>
            <option value="extremă">Extremă</option>
          </select>
        </div>
        <button type="submit">Trimite Raportul</button>
      </form>
    </div>
  );
};

export default Formular;
