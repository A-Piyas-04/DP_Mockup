import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Star, Bus, MapPin } from 'lucide-react';
import { drivers, vehicles, routes } from '../../data/mockData';

const DriverProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const driver = drivers.find(d => d.id === parseInt(id)) || drivers[0];
    const assignedVehicle = vehicles.find(v => v.id === driver.vehicleId);
    const assignedRoute = routes[0]; // Mock route assignment

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Driver Profile</h1>
            </div>

            {/* Profile Header */}
            <div className="card" style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    backgroundColor: '#e5e7eb', margin: '0 auto 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <User size={40} color="var(--text-secondary)" />
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{driver.name}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Phone size={14} /> {driver.phone}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Mail size={14} /> driver@iut.edu</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginTop: '12px', color: '#f59e0b', fontWeight: 'bold' }}>
                    <Star size={16} fill="#f59e0b" /> 4.8 Rating
                </div>
            </div>

            {/* Assigned Vehicle */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Current Assignment</h3>
            {assignedVehicle ? (
                <div className="card">
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '8px',
                            backgroundColor: '#dcfce7', color: '#166534',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Bus size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{assignedVehicle.plate}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{assignedVehicle.type}</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                        <MapPin size={20} color="var(--text-secondary)" />
                        <div>
                            <div style={{ fontWeight: '500' }}>{assignedRoute.name}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{assignedRoute.start} - {assignedRoute.end}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card" style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>No vehicle assigned currently.</p>
                    <button className="btn btn-primary" style={{ marginTop: '16px' }}>Assign Vehicle</button>
                </div>
            )}

            {/* Performance Stats (Optional) */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Performance</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="card" style={{ textAlign: 'center', padding: '16px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>98%</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>On-Time</div>
                </div>
                <div className="card" style={{ textAlign: 'center', padding: '16px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>142</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Trips Completed</div>
                </div>
            </div>
        </div>
    );
};

// Helper component for User icon since it's used inside
const User = ({ size, color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export default DriverProfile;
