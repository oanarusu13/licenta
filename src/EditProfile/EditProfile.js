import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './EditProfile.css'; 

import { FaUser, FaEnvelope, FaLock, FaFileImage ,FaUserCircle  } from 'react-icons/fa';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfile({
      ...profile,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profil actualizat cu succes! 😊🎉');
  };

  return (
    <div>
    <Navbar />
   
    <div id="editProfilePage">      
    <form onSubmit={handleSubmit}>
      <h1>Editeaza Profil</h1>
      <div className="profile-icon-container">
        <FaUserCircle size={100} />
      </div>

      <div>
        
        <input type="text" name="username" placeholder="johndoe" onChange={handleChange} />
        <FaUser />
      </div>
      <div>
      
        <input type="email" name="email" placeholder="johndoe@gmail.com" onChange={handleChange} />
        <FaEnvelope />
      </div>

    <div>
  <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} />
       <FaLock /> 
    </div>

      <div>
         
          <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} />
          <FaLock />
        </div>
      <div>
       
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
        <FaUser />
      </div>
      <div>
      
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <FaUser />
      </div>
      <div>
      
        <input type="file" name="profilePicture" onChange={handleFileChange} />
        <FaFileImage />
      </div>
      <button type="submit">Editeaza Profil</button>
    </form>
    </div>
    </div>
  );
};

export default EditProfile;