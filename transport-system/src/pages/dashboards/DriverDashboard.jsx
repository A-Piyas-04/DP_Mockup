import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { vehicles, routes } from '../../data/mockData';
import Toast from '../../components/Toast';

const DriverDashboard = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    // Mock data for the driver
    const myVehicle = vehicles[0];
    const myRoute = routes[0];

    const handleStartTrip = () => {
        setShowToast(true);
        setTimeout(() => {
            navigate(`/routes/${myRoute.id}`);
        }, 1500);
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Driver Dashboard</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Welcome back, Driver Mike</p>
            </header>

            {/* Assigned Vehicle */}
            <div className="card" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Assigned Vehicle</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{myVehicle.plate}</div>
                    </div>
                    <Bus size={32} style={{ opacity: 0.8 }} />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                        {myVehicle.type}
                    </div>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>
                        {myVehicle.seats} Seats
                    </div>
                </div>
            </div>

            {/* Today's Trip */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Today's Trip</h3>
            <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        backgroundColor: '#dbeafe', color: '#1e40af',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <MapPin size={20} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>{myRoute.name}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{myRoute.start} ➝ {myRoute.end}</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        backgroundColor: '#fef3c7', color: '#92400e',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Clock size={20} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>Pickup Time</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{myRoute.time}</div>
                    </div>
                </div>

                <button className="btn btn-primary" style={{ marginBottom: '12px' }} onClick={handleStartTrip}>
                    Start Trip
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/subscriptions')}>
                    View Passenger List
                </button>
            </div>

            {/* Incident Report */}
            <button className="btn" style={{ backgroundColor: '#fee2e2', color: '#991b1b', marginTop: '12px' }} onClick={() => navigate('/reports/daily')}>
                <AlertTriangle size={20} />
                Report Incident
            </button>

            {showToast && <Toast message="Trip started successfully!" type="success" onClose={() => setShowToast(false)} />}
        </div>
    );
};

export default DriverDashboard;
