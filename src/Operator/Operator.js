import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Operator.css';
const Operator = () => {
  const [alerts, setAlerts] = useState([]);


  return (
    <div className="operator-dashboard">
      <h1>Alerte Asignate</h1>
      {alerts.map((alert) => (
        <div key={alert.id} className="alert-details">
          <h2>{alert.type} - {alert.user}</h2>
          <p><strong>Locație:</strong> {alert.location}</p>
          <p><strong>Mesaj:</strong> {alert.message}</p>
          {alert.imageUrl && <img src={alert.imageUrl} alt="Alertă" />}
        </div>
      ))}
    </div>
  );
};

export default Operator;
