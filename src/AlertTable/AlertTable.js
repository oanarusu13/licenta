import React, { useState } from 'react';

const AlertTable = ({ alert }) => {
  const [alertStatus, setAlertStatus] = useState(alert.status);

  const handleStatusChange = () => {
    const newStatus = alertStatus === 'Preluată' ? 'Nepreluată' : 'Preluată';
    setAlertStatus(newStatus);
    alert('Statusul alertei a fost actualizat la: ' + newStatus);
  };

  return (
    <div className="alert-details">
      <h2>Detalii Alertă</h2>
      <p><strong>Utilizator:</strong> {alert.user.name}</p>
      {alert.photo && <img src={alert.photo} alt="Alertă" />}
      <p><strong>Locație:</strong> Latitudine {alert.location.lat}, Longitudine {alert.location.lng}</p>
      <p><strong>Mesaj:</strong> {alert.message}</p>
      <p><strong>Status:</strong> {alertStatus}</p>
      <button onClick={handleStatusChange}>{alertStatus === 'Preluată' ? 'Marchează ca Nepreluată' : 'Marchează ca Preluată'}</button>
    </div>
  );
};
export default AlertTable;
