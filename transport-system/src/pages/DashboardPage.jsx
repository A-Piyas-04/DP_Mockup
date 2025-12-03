import React from 'react';
import OfficerDashboard from './dashboards/OfficerDashboard';
import DriverDashboard from './dashboards/DriverDashboard';
import SubscriberDashboard from './dashboards/SubscriberDashboard';
import UserDashboard from './dashboards/UserDashboard';

const DashboardPage = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    switch (user.role) {
        case 'officer':
            return <OfficerDashboard />;
        case 'driver':
            return <DriverDashboard />;
        case 'subscriber':
            return <SubscriberDashboard />;
        case 'user':
        default:
            return <UserDashboard />;
    }
};

export default DashboardPage;
