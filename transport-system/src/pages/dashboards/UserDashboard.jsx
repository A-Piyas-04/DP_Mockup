import React from 'react';
import { Search, Ticket, History } from 'lucide-react';
import { routes } from '../../data/mockData';

const UserDashboard = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Book a Ride</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Find and book daily transport tokens</p>
            </header>

            {/* Search Route */}
            <div className="card" style={{ padding: '20px' }}>
                <div className="input-group">
                    <label className="input-label">Select Route</label>
                    <div style={{ position: 'relative' }}>
                        <select className="input-field" style={{ appearance: 'none' }}>
                            <option>Select a route...</option>
                            {routes.map(r => (
                                <option key={r.id} value={r.id}>{r.name} ({r.start} - {r.end})</option>
                            ))}
                        </select>
                        <Search size={18} style={{ position: 'absolute', right: '12px', top: '14px', color: 'var(--text-secondary)' }} />
                    </div>
                </div>
                <button className="btn btn-primary">
                    Check Availability
                </button>
            </div>

            {/* Quick Actions */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Quick Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px' }}>
                    <div style={{ backgroundColor: '#dcfce7', padding: '8px', borderRadius: '8px', color: '#166534' }}>
                        <Ticket size={24} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>Buy Token</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>For today</div>
                    </div>
                </div>
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px' }}>
                    <div style={{ backgroundColor: '#f3e8ff', padding: '8px', borderRadius: '8px', color: '#6b21a8' }}>
                        <History size={24} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>History</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Past trips</div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Recent Tokens</h3>
            <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.7 }}>
                <div>
                    <div style={{ fontWeight: '600' }}>Route A</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Yesterday, 07:00 AM</div>
                </div>
                <span className="status-badge status-active">Used</span>
            </div>
        </div>
    );
};

export default UserDashboard;
