import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, MapPin, AlertCircle } from 'lucide-react';
import { routes } from '../../data/mockData';
import Toast from '../../components/Toast';

const SubscriberDashboard = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const myRoute = routes[0];

    const handleMarkAbsent = () => {
        setToastMessage('Marked absent for today');
        setShowToast(true);
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">My Subscription</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage your daily commute</p>
            </header>

            {/* Subscription Card */}
            <div className="card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Route</div>
                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{myRoute.name}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Seat</div>
                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--primary-color)' }}>A1</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <MapPin size={16} />
                    <span>{myRoute.start} ➝ {myRoute.end}</span>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#166534' }}>Active Subscription</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Valid till Dec 31</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <button className="card" style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px',
                    border: '1px solid #e5e7eb', cursor: 'pointer'
                }} onClick={handleMarkAbsent}>
                    <AlertCircle size={24} color="#ef4444" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Mark Absent</span>
                </button>
                <button className="card" style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px',
                    border: '1px solid #e5e7eb', cursor: 'pointer'
                }} onClick={() => navigate('/booking/token')}>
                    <CreditCard size={24} color="var(--primary-color)" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Book Extra</span>
                </button>
            </div>

            {/* Calendar Preview */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>This Week</h3>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{day}</div>
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '50%',
                                backgroundColor: i === 3 ? 'var(--primary-color)' : '#f3f4f6',
                                color: i === 3 ? 'white' : 'var(--text-primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.9rem', fontWeight: '500'
                            }}>
                                {24 + i}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showToast && <Toast message={toastMessage} type="success" onClose={() => setShowToast(false)} />}
        </div>
    );
};

export default SubscriberDashboard;
