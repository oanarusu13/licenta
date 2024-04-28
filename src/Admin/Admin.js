import React, { useState } from 'react';
import './Admin.css'; // Import stiluri specifice paginii de admin
import Navbar from '../Navbar/Navbar'; // Componenta Navbar
import StatisticCard from '../StatisticCard/StatisticCard'; // Carduri pentru statistici
import TrafficSourcesChart from '../TrafficSourcesChart/TrafficSourcesChart'; // Graficul surselor de trafic
import Pagination from '@mui/material/Pagination'; // Componenta de paginare de la Material-UI
import Stack from '@mui/material/Stack'; // Componenta Stack de la Material-UI pentru layout
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Componenta pentru icoane
import { faUserPlus, faEye } from '@fortawesome/free-solid-svg-icons'; // Icoane specifice
import AddUser from '../AddUser/AddUser'; // Adaptează calea conform structurii proiectului tău
import { useNavigate } from 'react-router-dom';
import { TbUsers } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbUrgent } from "react-icons/tb";
import MapComponent from '../MapComponent/MapComponent'; 
import { FaUsers, FaUserShield, FaBell , FaMapMarkedAlt } from 'react-icons/fa';

const AdminPage = () => {
  // Stări pentru secțiunea activă, statistici, termen de căutare, pagina curentă și vizibilitatea meniului dropdown
  const [activeSection, setActiveSection] = useState('dashboard');
  const [statistics, setStatistics] = useState({ users: 120, operators: 30, alerts: 45 });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  // Generarea unui set de date fictive pentru operatori
  const operatorsPerPage = 10;
  const operators = useState(generateOperators())[0];
  const indexOfLastOperator = currentPage * operatorsPerPage;
  const indexOfFirstOperator = indexOfLastOperator - operatorsPerPage;
  const currentOperators = operators.slice(indexOfFirstOperator, indexOfLastOperator);
  const judetNume = 'Vrancea';

  // Funcția pentru generarea operatorilor
  function generateOperators() {
    let operators = [];
    for (let i = 1; i <= 76; i++) {
      operators.push({
        id: i,
        name: `Operator ${i}`,
        surname: `Surname ${i}`,
        email: `operator${i}@email.com`,
        alerts: Math.floor(Math.random() * 10),
        phone: `07${Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}`
      });
    }
    return operators;
  }

  // Handler pentru schimbarea paginii
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const teamsData = [
    { 
        latitude: 44.4268, 
        longitude: 26.1025, 
        name: 'Echipa București', 
        description: 'Accident cu 2 masini',
        image: 'https://cdn.g4media.ro/wp-content/uploads/2024/04/accident-centura-bucuresti-2.jpg' // Replace with the actual URL
    },
    { 
        latitude: 45.7489, 
        longitude: 21.2087, 
        name: 'Echipa Timișoara', 
        description: 'Acidentt periculos',
        image: 'https://cdn.g4media.ro/wp-content/uploads/2024/04/accident-centura-bucuresti-2.jpg' // Replace with the actual URL
    }
];

  
  
  // Handler pentru adăugarea unui nou utilizator
  const handleAddUser = () => {
    setActiveButton('addUser'); // Evidențiază butonul ca fiind activ
    setIsDropdownVisible(false); // Opțional, ascunde dropdown-ul dacă este deschis
    navigate('/admin/add-user'); 
  };
  
  // Handler pentru vizualizarea utilizatorilor
  const handleViewUsers = () => {
    setActiveButton('viewUsers');
    setActiveSection('viewUsers');
    setIsDropdownVisible(false);
  };
  //ptr harta
  const handleViewMap = () => {
    setActiveButton('viewMap');
    setActiveSection('viewMap');
    setIsDropdownVisible(false);
  };
  // Functii pentru a afisa si ascunde meniul dropdown
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const hideDropdown = () => {
    setIsDropdownVisible(false);
  };
  

  // Componenta JSX
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-body">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="app-name">SaveSignal</div>
          
          {/* Butonul Statistici */}
          <button
            className={`sidebar-item ${activeSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveSection('dashboard')}
          >
           <IoIosStats /> Statistici 
          </button>
          
          {/* Dropdown pentru gestionare operatori */}
          <div
            className="sidebar-item-container"
            onMouseEnter={toggleDropdown}
            onMouseLeave={hideDropdown}
          >
            <button className="sidebar-item"><LiaUsersCogSolid /> Gestionare Operatori</button>
            
            {/* Meniul Dropdown */}
            {isDropdownVisible && (
              <div className="dropdown-menu">
                {/* Butonul Adăugare User */}
                <button className={`admin-dropdown-button ${activeButton === 'addUser' ? 'active' : ''}`} onClick={handleAddUser}>
          <FontAwesomeIcon icon={faUserPlus} /> Adăugare Operator
          </button>


                {/* Butonul Vizualizare User */}
                <button
                  className={`admin-dropdown-button ${activeButton === 'viewUsers' ? 'active' : ''}`}
                  onClick={handleViewUsers}
                >
                  <FontAwesomeIcon icon={faEye} /> Vizualizare Operator
                </button>
              </div>
            )}
          </div>
          <button
            className={`sidebar-item ${activeSection === 'viewMap' ? 'active' : ''}`}
            onClick={handleViewMap}
          >
            <FaMapMarkedAlt /> Harta 
          </button>
        </div>
        {activeSection === 'viewMap' && (
  <MapComponent teams={teamsData} /> /* Eliminați orice container în plus dacă nu este necesar */
)}


        <div className="content">
          {/* Secțiunea Dashboard/Statistici */}
          {activeSection === 'dashboard' && (
            <>
              <h1>Alerte pentru {judetNume}</h1>
              <div className="dashboard-content">
  <StatisticCard
    title="Utilizatori"
    value={statistics.users}
    icon={<FaUsers size={40} color="blue" />}
  />
  <StatisticCard
    title="Operatori"
    value={statistics.operators}
    icon={<FaUserShield size={40} color="green" />}
  />
  <StatisticCard
    title="Alerte"
    value={statistics.alerts}
    icon={<FaBell size={40} color="red" />}
  />
</div>

              <TrafficSourcesChart />
            </>
          )}
          

          {/* Secțiunea Adăugare Utilizator Nou */}
          {activeSection === 'addUser' && (
            <div>
            </div>
          )}

          {activeSection === 'viewUsers' && (
            <div className="gestionare-operatori">
              <h3>Vizualizare Operatori</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                console.log(e.target.value); 
               setSearchTerm(e.target.value);
                }}
  placeholder="Introduceți numele operatorului"
/>

              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th><FaUser /> Nume</th>
                    <th><FaUser /> Prenume</th>
                    <th><MdEmail /> Email</th>
                    <th><MdOutlinePhoneAndroid /> Telefon</th>
                    <th><TbUrgent /> Alerte</th>
                  </tr>
                </thead>
                <tbody>
  {currentOperators
    .filter(operator =>
      operator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      operator.surname.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(operator => (
      <tr key={operator.id}>
        <td>{operator.id}</td>
        <td>{operator.name}</td>
        <td>{operator.surname}</td>
        <td>{operator.email}</td>
        <td>{operator.phone}</td>
        <td>{operator.alerts}</td>
      </tr>
    ))}
</tbody>

              </table>
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(operators.length / operatorsPerPage)}
                  page={currentPage}
                  onChange={handleChange}
                />
              </Stack>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
