import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

// Placeholder components for now
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div style={{ padding: '16px' }}>
      <h2>Welcome, {user.name}</h2>
      <p>Role: {user.role}</p>
      <div className="card" style={{ marginTop: '16px' }}>
        <h3>Dashboard Content Coming Soon</h3>
        <p>This is a placeholder for the {user.role} dashboard.</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<div>Profile Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
