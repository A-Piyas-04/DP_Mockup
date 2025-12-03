import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, Bus, MoreVertical } from 'lucide-react';
import { vehicles } from '../../data/mockData';

const VehicleList = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Vehicles</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage fleet and assignments</p>
            </header>

            {/* Search & Filter */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div className="input-group" style={{ marginBottom: 0, flex: 1 }}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Search plate number..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ paddingLeft: '40px' }}
                        />
                        <Search size={20} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
                    </div>
                </div>
                <button className="btn" style={{ width: 'auto', padding: '0 16px', backgroundColor: 'var(--white)', border: '1px solid #d1d5db' }}>
                    <Filter size={20} />
                </button>
            </div>

            {/* Vehicle List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {vehicles.map(vehicle => (
                    <div key={vehicle.id} className="card" onClick={() => navigate(`/vehicles/${vehicle.id}`)} style={{ cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '8px',
                                    backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <Bus size={24} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{vehicle.plate}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{vehicle.type} • {vehicle.seats} Seats</div>
                                </div>
                            </div>
                            <button style={{ background: 'none', border: 'none', padding: '4px' }}>
                                <MoreVertical size={20} color="var(--text-secondary)" />
                            </button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                            <span className={`status-badge status-${vehicle.status === 'Active' ? 'active' : 'cancelled'}`}>
                                {vehicle.status}
                            </span>
                            <button className="btn btn-outline" style={{ width: 'auto', padding: '6px 16px', fontSize: '0.85rem' }} onClick={(e) => { e.stopPropagation(); navigate(`/vehicles/${vehicle.id}/assign`); }}>
                                Assign Driver
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Action Button */}
            <button className="btn btn-primary" style={{
                position: 'fixed', bottom: '90px', right: '24px',
                width: '56px', height: '56px', borderRadius: '50%',
                padding: 0, boxShadow: '0 4px 12px rgba(26, 71, 42, 0.4)',
                zIndex: 20
            }}>
                <Plus size={24} />
            </button>
        </div>
    );
};

export default VehicleList;
