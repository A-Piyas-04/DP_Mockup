import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Bus, MoreVertical } from 'lucide-react';
import { drivers, vehicles } from '../../data/mockData';
import Toast from '../../components/Toast';

const DriverList = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Drivers</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage driver assignments</p>
            </header>

            {/* Driver List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {drivers.map(driver => {
                    const assignedVehicle = vehicles.find(v => v.id === driver.vehicleId);

                    return (
                        <div key={driver.id} className="card" onClick={() => navigate(`/drivers/${driver.id}`)} style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{driver.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Phone size={12} /> {driver.phone}
                                        </div>
                                    </div>
                                </div>
                                <button style={{ background: 'none', border: 'none', padding: '4px' }}>
                                    <MoreVertical size={20} color="var(--text-secondary)" />
                                </button>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                                <span className={`status-badge status-${driver.status === 'Assigned' ? 'active' : 'pending'}`}>
                                    {driver.status}
                                </span>

                                {assignedVehicle ? (
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Bus size={14} /> {assignedVehicle.plate}
                                    </div>
                                ) : (
                                    <button className="btn btn-outline" style={{ width: 'auto', padding: '6px 16px', fontSize: '0.85rem' }} onClick={(e) => { e.stopPropagation(); setShowToast(true); }}>
                                        Assign Vehicle
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {showToast && <Toast message="Driver assignment updated!" type="success" onClose={() => setShowToast(false)} />}
        </div>
    );
};

export default DriverList;
