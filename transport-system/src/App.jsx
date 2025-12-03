import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

import DashboardPage from './pages/DashboardPage';
import VehicleList from './pages/vehicles/VehicleList';
import VehicleDetails from './pages/vehicles/VehicleDetails';
import DriverList from './pages/drivers/DriverList';
import DriverProfile from './pages/drivers/DriverProfile';
import RouteList from './pages/routes/RouteList';
import RouteDetails from './pages/routes/RouteDetails';
import SeatAvailability from './pages/booking/SeatAvailability';
import SubscriptionSeatManagement from './pages/booking/SubscriptionSeatManagement';
import TokenBooking from './pages/payment/TokenBooking';
import PaymentPage from './pages/payment/PaymentPage';
import PaymentHistory from './pages/payment/PaymentHistory';
import SubscriptionList from './pages/subscriptions/SubscriptionList';
import SubscriberProfile from './pages/subscriptions/SubscriberProfile';
import DailyReport from './pages/reports/DailyReport';
import MonthlyReport from './pages/reports/MonthlyReport';
import NotificationCenter from './pages/NotificationCenter';
import ProfileSettings from './pages/ProfileSettings';

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
          <Route path="routes" element={<RouteList />} />
          <Route path="routes/:id" element={<RouteDetails />} />
          <Route path="booking" element={<SeatAvailability />} />
          <Route path="booking/token" element={<TokenBooking />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="history" element={<PaymentHistory />} />
          <Route path="manage-seats" element={<SubscriptionSeatManagement />} />
          <Route path="subscriptions" element={<SubscriptionList />} />
          <Route path="subscriptions/:id" element={<SubscriberProfile />} />
          <Route path="reports/daily" element={<DailyReport />} />
          <Route path="reports/monthly" element={<MonthlyReport />} />
          <Route path="notifications" element={<NotificationCenter />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
