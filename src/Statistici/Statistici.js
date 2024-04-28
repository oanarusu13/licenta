import React, { useState } from 'react';
import 'chart.js/auto';
import './Statistici.css';
import { Bar, Pie } from 'react-chartjs-2';
import Navbar from '../Navbar/Navbar';


const Statistici = () => {
  const [judetSelectat, setJudetSelectat] = useState('');

  const date = {
    "Cluj": {
      "operatori": ["Operator 1", "Operator 2"],
      "alertePreluate": [100, 50],
      "urgente": {
        "Medical": 120,
        "Pompieri": 80,
        "Politia": 50
      }
    },
    "Bucuresti": {
      "operatori": ["Operator 3", "Operator 4"],
      "alertePreluate": [150, 120],
      "urgente": {
        "Medical": 200,
        "Pompieri": 90,
        "Politia": 70
      }
    }
  };

  const handleChange = (e) => {
    setJudetSelectat(e.target.value);
  };

  const infoJudet = date[judetSelectat] || {};

  const AlertelePreluateChart = ({ operatori, alertePreluate }) => {
    const data = {
      labels: operatori,
      datasets: [{
        label: 'Alerte Preluate',
        data: alertePreluate,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe'],
        hoverOffset: 4
      }]
    };

    const options = {
      maintainAspectRatio: false,
      responsive: true
    };

    return (
      <div className="pie-chart-container">
        <Pie data={data} options={options} />
      </div>
    );
  };

  const UrgenteChart = ({ urgente }) => {
    const data = {
      labels: Object.keys(urgente),
      datasets: [{
        label: 'Număr de urgențe',
        data: Object.values(urgente),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe'],
        hoverOffset: 4
      }]
    };

    return <Bar data={data} />;
  };

  return (
    <div className="statistici-container">
      <Navbar />
      <select className="select-judet" onChange={handleChange} value={judetSelectat}>
        <option value="">Selectează un județ</option>
        {Object.keys(date).map(numeJudet => (
          <option key={numeJudet} value={numeJudet}>{numeJudet}</option>
        ))}
      </select>

      {judetSelectat && (
        <div>
          <div className="judet-section">
            <h2 className="judet-title">{judetSelectat}</h2>
            <h3>Operatori:</h3>
            <ul className="operatori-list">
              {infoJudet.operatori && infoJudet.operatori.map((operator, index) => <li key={index}>{operator}</li>)}
            </ul>
            <div className="urgente-chart-container">
              <h3 className="urgente-chart-title">Statistici Urgențe:</h3>
              <UrgenteChart urgente={infoJudet.urgente} />
            </div>
          </div>
          <div className="alerte-preluate-section">
            <h3 className="alerte-preluate-title">Alerte Preluate de Operatori</h3>
            <AlertelePreluateChart operatori={infoJudet.operatori} alertePreluate={infoJudet.alertePreluate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistici;
