import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const TrafficSourcesChart = () => {
  const data = {
    labels: ['Accidente rutiere', 'Probleme cardiace', 'Accidente domestice', 'Intoxicații', 'Alte urgențe'],
    datasets: [{
      label: 'Tipuri de Urgențe Medicale',
      data: [25, 30, 15, 10, 20], 
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      hoverOffset: 4
    }]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: 'Website Traffic Sources'
    }
  };

  return (
    <div style={{ width: '100%', height: '600px' }}> {/* Ajustează aici înălțimea graficului */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default TrafficSourcesChart;
