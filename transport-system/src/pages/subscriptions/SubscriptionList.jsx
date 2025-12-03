import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, User, MoreVertical } from 'lucide-react';
import { users, routes } from '../../data/mockData';

const SubscriptionList = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Mock subscribers
    const subscribers = users.filter(u => u.role === 'subscriber');

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Subscriptions</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage student subscriptions</p>
            </header>

            {/* Search & Filter */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div className="input-group" style={{ marginBottom: 0, flex: 1 }}>
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
                <button className="btn" style={{ width: 'auto', padding: '0 16px', backgroundColor: 'var(--white)', border: '1px solid #d1d5db' }}>
                    <Filter size={20} />
                </button>
            </div>

            {/* Subscription List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {subscribers.map(sub => {
                    const route = routes.find(r => r.id === sub.routeId);

                    return (
                        <div key={sub.id} className="card" onClick={() => navigate(`/subscriptions/${sub.id}`)} style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#1e40af'
                                    }}>
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{sub.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{sub.email}</div>
                                    </div>
                                </div>
                                <button style={{ background: 'none', border: 'none', padding: '4px' }}>
                                    <MoreVertical size={20} color="var(--text-secondary)" />
                                </button>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                                <div style={{ fontSize: '0.85rem' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Route: </span>
                                    <span style={{ fontWeight: '500' }}>{route ? route.name : 'N/A'}</span>
                                </div>
                                <div style={{ fontSize: '0.85rem' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>Seat: </span>
                                    <span style={{ fontWeight: '500', color: 'var(--primary-color)' }}>{sub.seat || 'N/A'}</span>
                                </div>
                                <span className="status-badge status-active">Active</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SubscriptionList;
