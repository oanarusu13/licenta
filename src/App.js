import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './Admin/Admin';
import OperatorPage from './OperatorPage/OperatorPage';
import Login from './LoginPage/Login';
import Statistici from './Statistici/Statistici';
import EditProfile from './EditProfile/EditProfile';
import Log from './Log/Log';
import AddUserPage from './AddUser/AddUser'; // Pagina pentru adăugare utilizator

function App() {
  const userRole = 'admin';

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/operator" element={<OperatorPage />} />
        <Route path="/statistici" element={<Statistici userRole={userRole} />} />
        <Route path="/update" element={<EditProfile />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/log/:id" element={<Log />} />
        <Route path="/admin/add-user" element={<AddUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
