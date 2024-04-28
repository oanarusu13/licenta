import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'; // Asigură-te că ai acest component în proiect
import './AddUser.css'; // Verifică că ai acest fișier CSS în directorul corespunzător
import { MdPlace } from "react-icons/md";
// Importăm iconițele necesare de la 'react-icons'
import { FaUser, FaEnvelope, FaLock, FaFileImage } from 'react-icons/fa';

// Componenta AddUser pentru adăugarea unui nou utilizator
const AddUser = () => {
  // Inițializăm starea pentru datele utilizatorului
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',

  });

  // Gestionăm schimbarea în input-uri
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Gestionăm adăugarea imaginii de profil
  const handleFileChange = (e) => {
    setUser({
      ...user,
      profilePicture: e.target.files[0],
    });
  };

  // Gestionăm trimiterea formularului
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Operator adăugat cu succes! 😊🎉');
  };
  const judete = [
    "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov", "Brăila", "Buzău", 
    "Caraș-Severin", "Călărași", "Cluj", "Constanța", "Covasna", "Dâmbovița", "Dolj", "Galați", "Giurgiu", 
    "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov", "Maramureș", "Mehedinți", "Mureș", 
    "Neamț", "Olt", "Prahova", "Satu Mare", "Sălaj", "Sibiu", "Suceava", "Teleorman", "Timiș", 
    "Tulcea", "Vaslui", "Vâlcea", "Vrancea"
  ];
  return (
    <div>
      <Navbar /> 

      <div id="addUserPage">
        <form onSubmit={handleSubmit}>
          <h1>Adaugă Operator Nou</h1>
          
          <div className="input-group">
            <FaUser />
            <input type="text" name="username" placeholder="Nume utilizator" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <FaEnvelope />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <FaUser />
            <input type="text" name="telefon" placeholder="Telefon" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <FaLock />
            <input type="password" name="password" placeholder="Parolă" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <FaUser />
            <input type="text" name="firstName" placeholder="Prenume" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <FaUser />
            <input type="text" name="lastName" placeholder="Nume" onChange={handleChange} required />
          </div>
          <div className="input-group">
  <MdPlace  /> 
  <select name="judet" id="selectjudet" class="pagina-addUser-select">
  <option value="" class="select-placeholder">Selectează Județul</option>
    {judete.map((judet) => (
      <option key={judet} value={judet}>{judet}</option>
    ))}
  </select>
</div>

          <button id="AdaugaUser" type="submit">Adaugă Utilizator</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
