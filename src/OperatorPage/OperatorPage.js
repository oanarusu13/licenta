import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './OperatorPage.css';
import { FaExclamationCircle, FaUser, FaMapMarkerAlt, FaEnvelope, FaImage, FaHandPaper } from 'react-icons/fa'; // Importă iconurile necesare
const OperatorPage = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchedAlerts = [
        { id: 1, type: 'Incendiu', user: 'Ion Popescu', location: 'București, Sector 3', message: 'Fum vizibil în apropierea blocului 34.', imageUrl: 'https://example.com/img/incendiu1.jpg' },
        { id: 2, type: 'Medical', user: 'Ana Ionescu', location: 'Cluj-Napoca, Centru', message: 'Persoană căzută la pământ în Piața Unirii.', imageUrl: 'https://example.com/img/medical1.jpg' },
        { id: 3, type: 'Accident Auto', user: 'Mihai Vasile', location: 'Timișoara, Calea Aradului', message: 'Coliziune între două vehicule la intersecție.', imageUrl: 'https://example.com/img/accident1.jpg' },
        { id: 4, type: 'Inundație', user: 'Loredana Dănescu', location: 'Constanța, Faleză Nord', message: 'Nivelul apei crescut, risc de inundație.', imageUrl: 'https://example.com/img/inundatie1.jpg' },
        { id: 5, type: 'Alunecare de Teren', user: 'Dan Mureșan', location: 'Sinaia, Calea Codrului', message: 'Porțiune de drum afectată de alunecări de teren.', imageUrl: 'https://example.com/img/alunecare1.jpg' },
        { id: 6, type: 'Incendiu de Vegetație', user: 'Elena Neagu', location: 'Brașov, Poiana Brașov', message: 'Incendiu de vegetație aproape de zona rezidențială.', imageUrl: 'https://example.com/img/incendiu2.jpg' },
        { id: 7, type: 'Avertizare Meteo', user: 'Bogdan Istrate', location: 'Iași, Bucium', message: 'Cod galben de furtuni în zona Bucium.', imageUrl: 'https://example.com/img/meteo1.jpg' },
        { id: 8, type: 'Pierdere Documente', user: 'Cristina Pop', location: 'București, Sector 6', message: 'Portofel cu acte pierdut în Parcul Crângași.', imageUrl: 'https://example.com/img/documente1.jpg' },
        { id: 9, type: 'Animale Pierdute', user: 'Andrei Luca', location: 'Ploiești, Vest', message: 'Câine rătăcit văzut în zona de vest a orașului.', imageUrl: 'https://example.com/img/animal1.jpg' },
        { id: 10, type: 'Defecțiune Urbană', user: 'Ioana Marinescu', location: 'Craiova, Centru', message: 'Fântână arteziană defectă în centrul orașului.', imageUrl: 'https://example.com/img/defectiune1.jpg' },
        { id: 11, type: 'Poluare', user: 'George Dima', location: 'Galați, Faleză', message: 'Deșeuri industriale observate pe malul apei.', imageUrl: 'https://example.com/img/poluare1.jpg' },
        { id: 12, type: 'Zgomot Excesiv', user: 'Diana Stoica', location: 'Oradea, Rogerius', message: 'Petrecere zgomotoasă deranjând vecinătatea.', imageUrl: 'https://example.com/img/zgomot1.jpg' },
        { id: 13, type: 'Vandalism', user: 'Alexandru Moise', location: 'Arad, Micalaca', message: 'Graffiti neautorizat pe zidurile școlii.', imageUrl: 'https://example.com/img/vandalism1.jpg' },
        { id: 14, type: 'Obstrucționare Drum Public', user: 'Miruna Enache', location: 'Sibiu, Hipodrom', message: 'Copac căzut blocând accesul pe strada principală.', imageUrl: 'https://example.com/img/obstructie1.jpg' },
        { id: 15, type: 'Furt', user: 'Cătălin Preda', location: 'Târgu Mureș, Centru', message: 'Bicicletă furată din fața magazinului.', imageUrl: 'https://example.com/img/furt1.jpg' },
        { id: 16, type: 'Amenințare Securitate', user: 'Raluca Ioniță', location: 'Baia Mare, Republicii', message: 'Comportament suspect observat în parc.', imageUrl: 'https://example.com/img/amenintare1.jpg' },
        { id: 17, type: 'Stricăciuni Infrastructură', user: 'Florin Dumitrescu', location: 'Drobeta-Turnu Severin, Dunării', message: 'Pod deteriorat, necesită reparații urgente.', imageUrl: 'https://example.com/img/infrastructura1.jpg' },
        { id: 18, type: 'Problemă Sanitară', user: 'Monica Anghel', location: 'Piatra Neamț, Dărmănești', message: 'Focar de infecție în zona pieței.', imageUrl: 'https://example.com/img/sanitar1.jpg' },
        { id: 19, type: 'Deranj Public', user: 'Adrian Voicu', location: 'Satu Mare, Micro 17', message: 'Grupuri zgomotoase perturbând liniștea publică noaptea.', imageUrl: 'https://example.com/img/deranj1.jpg' },
        { id: 20, type: 'Invazie dăunători', user: 'Simona Halep', location: 'Alba Iulia, Cetate', message: 'Observată infestare cu gândaci în blocul A34.',imageUrl: 'https://example.com/img/deranj1.jpg' }
      ];      

    setTimeout(() => {
      setAlerts(fetchedAlerts);
    }, 1000);
  }, []);

  const handleTakeOver = (alertId) => {
    // Afișează un mesaj în consolă sau realizează acțiuni suplimentare necesare
    console.log(`Alerta cu ID-ul ${alertId} a fost preluată.`);
  
    // Actualizează starea `alerts` pentru a exclude alerta preluată
    setAlerts(currentAlerts => currentAlerts.filter(alert => alert.id !== alertId));
  };
  
    return (
      <div className="homepage-dashboard">
        <Navbar />
        <table className="alerts-table">
          <thead>
            <tr>
            <th><FaExclamationCircle /> Tip Alertă</th> {/* Adaugă iconul pentru tipul de alertă */}
            <th><FaUser /> Utilizator</th> {/* Adaugă iconul pentru utilizator */}
            <th><FaMapMarkerAlt /> Locație</th> {/* Adaugă iconul pentru locație */}
            <th><FaEnvelope /> Mesaj</th> {/* Adaugă iconul pentru mesaj */}
            <th><FaImage /> Imagine</th> {/* Adaugă iconul pentru imagine */}
            <th><FaHandPaper /> Acțiuni</th> {/* Adaugă iconul pentru acțiuni */}
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.type}</td>
                <td>{alert.user}</td>
                <td>{alert.location}</td>
                <td>{alert.message}</td>
                <td>{alert.imageUrl ? <img src={alert.imageUrl} alt="Alertă" /> : 'N/A'}</td>
                <td>
                  <button onClick={() => handleTakeOver(alert.id)}>Preluare</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default OperatorPage;
