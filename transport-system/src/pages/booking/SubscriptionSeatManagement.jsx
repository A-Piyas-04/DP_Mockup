import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, UserCheck, UserX } from 'lucide-react';
import { users, routes } from '../../data/mockData';

const SubscriptionSeatManagement = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Mock subscribers
    const subscribers = users.filter(u => u.role === 'subscriber');

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Manage Seats</h1>
            </div>

            {/* Route Selector & Search */}
            <div className="card" style={{ marginBottom: '16px' }}>
                <div className="input-group">
                    <label className="input-label">Route</label>
                    <select className="input-field">
                        {routes.map(r => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                    </select>
                </div>
                <div className="input-group" style={{ marginBottom: 0 }}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Search subscriber..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ paddingLeft: '40px' }}
                        />
                        <Search size={20} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
                    </div>
                </div>
            </div>

            {/* Subscriber List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {subscribers.map(sub => (
                    <div key={sub.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{sub.name}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Seat: {sub.seat || 'Unassigned'}</div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                className="btn"
                                style={{
                                    width: 'auto', padding: '8px',
                                    backgroundColor: '#fee2e2', color: '#991b1b',
                                    borderRadius: '8px'
                                }}
                                title="Mark Absent"
                            >
                                <UserX size={20} />
                            </button>
                            <button
                                className="btn"
                                style={{
                                    width: 'auto', padding: '8px',
                                    backgroundColor: '#dcfce7', color: '#166534',
                                    borderRadius: '8px'
                                }}
                                title="Assign Seat"
                            >
                                <UserCheck size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionSeatManagement;
