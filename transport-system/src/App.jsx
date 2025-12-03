import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

import DashboardPage from './pages/DashboardPage';
import VehicleList from './pages/vehicles/VehicleList';
import VehicleDetails from './pages/vehicles/VehicleDetails';
import DriverList from './pages/drivers/DriverList';
import DriverProfile from './pages/drivers/DriverProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="vehicles" element={<VehicleList />} />
          <Route path="vehicles/:id" element={<VehicleDetails />} />
          <Route path="drivers" element={<DriverList />} />
          <Route path="drivers/:id" element={<DriverProfile />} />
          <Route path="profile" element={<div>Profile Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
