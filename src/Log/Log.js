import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

const Log = () => {
  const { operatorId } = useParams();
  const [jurnale, setJurnale] = useState([]); 

  useEffect(() => {
    const preluareJurnale = async () => {
  
    };

    preluareJurnale();
  }, [operatorId]); 

  return (
    <div className="container-jurnal">
      <h1> Log-uri pentru opratorul {operatorId}</h1>
      {jurnale.length > 0 ? (
        <ul>
          {}
          {jurnale.map((jurnal) => (
            <li key={jurnal.id}>
              <p>Momentul înregistrării: {jurnal.timestamp}</p>
              <p>Mesaj: {jurnal.message}</p>
              {}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nu există înregistrări în jurnal pentru acest operator.</p>
      )}
    </div>
  );
};

export default Log;
