import React from 'react';
import Operatori from '../OperatorPage/OperatorPage';
import UrgenteChart from '../UrgenteChart/UrgenteChart';

const Judet = ({ numeJudet, dateJudet }) => {
  return (
    <div>
      <h2>{numeJudet}</h2>
      <Operatori operatori={dateJudet.operatori} />
      <UrgenteChart urgente={dateJudet.urgente} />
    </div>
  );
};

export default Judet;
