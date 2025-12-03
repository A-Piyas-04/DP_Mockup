import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Bus, Calendar, DollarSign, Plus, UserPlus, List } from 'lucide-react';
import { trips, vehicles } from '../../data/mockData';

const OfficerDashboard = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Officer Dashboard</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Overview of transport operations</p>
            </header>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <KpiCard icon={<Bus size={20} />} label="Total Vehicles" value={vehicles.length} color="blue" onClick={() => navigate('/vehicles')} />
                <KpiCard icon={<Calendar size={20} />} label="Today's Trips" value={trips.length} color="green" onClick={() => navigate('/routes')} />
                <KpiCard icon={<Users size={20} />} label="Avail. Seats" value="45" color="purple" onClick={() => navigate('/booking')} />
                <KpiCard icon={<DollarSign size={20} />} label="Pending Pay" value="12" color="orange" onClick={() => navigate('/payment')} />
            </div>

            {/* Quick Actions */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Quick Actions</h3>
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '24px' }}>
                <QuickAction icon={<Plus size={20} />} label="Add Vehicle" onClick={() => navigate('/vehicles')} />
                <QuickAction icon={<UserPlus size={20} />} label="Assign Driver" onClick={() => navigate('/drivers')} />
                <QuickAction icon={<List size={20} />} label="View Trips" onClick={() => navigate('/routes')} />
            </div>

            {/* Active Trips */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Active Trips Today</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {trips.map(trip => (
                    <div key={trip.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate(`/routes/${trip.routeId}`)}>
                        <div>
                            <div style={{ fontWeight: '600', marginBottom: '4px' }}>Route {trip.routeId}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                <span className={`status-badge status-${trip.status === 'Scheduled' ? 'active' : 'pending'}`}>
                                    {trip.status}
                                </span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{trip.booked}/40</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Seats Booked</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const KpiCard = ({ icon, label, value, color, onClick }) => {
    const colors = {
        blue: { bg: '#dbeafe', text: '#1e40af' },
        green: { bg: '#dcfce7', text: '#166534' },
        purple: { bg: '#f3e8ff', text: '#6b21a8' },
        orange: { bg: '#ffedd5', text: '#9a3412' },
    };
    const theme = colors[color] || colors.blue;

    return (
        <div className="card" onClick={onClick} style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', cursor: onClick ? 'pointer' : 'default' }}>
            <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                backgroundColor: theme.bg, color: theme.text,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{label}</div>
            </div>
        </div>
    );
};

const QuickAction = ({ icon, label, onClick }) => (
    <button className="card" onClick={onClick} style={{
        minWidth: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '16px',
        border: '1px solid #e5e7eb'
    }}>
        <div style={{ color: 'var(--primary-color)' }}>{icon}</div>
        <div style={{ fontSize: '0.85rem', fontWeight: '500' }}>{label}</div>
    </button>
);

export default OfficerDashboard;
