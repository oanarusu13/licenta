// StatisticCard.js
import React from 'react';
import './StatisticCard.css'; 

const StatisticCard = ({ title, value, icon }) => {
  return (
    <div className="statistic-card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  );
};


export default StatisticCard;
