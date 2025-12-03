import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Download, Settings } from 'lucide-react';
import { routes, users } from '../../data/mockData';

const RouteDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const route = routes.find(r => r.id === parseInt(id)) || routes[0];

    // Mock passengers for this route
    const passengers = users.filter(u => u.role === 'subscriber' || u.role === 'user');

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>{route.name} Details</h1>
            </div>

            {/* Overview Card */}
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Route Capacity</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{route.seats} Seats</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Occupancy</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>85%</div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div style={{ height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px' }}>
                    <div style={{ width: '85%', height: '100%', backgroundColor: '#166534' }}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#166534' }}></div>
                        Subscribers (25)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                        Daily Tokens (9)
                    </div>
                </div>
            </div>

            {/* Passenger List */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Passenger List</h3>
                <button style={{ background: 'none', border: 'none', color: 'var(--primary-color)' }}>
                    <Download size={20} />
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {passengers.map((p, i) => (
                    <div key={i} className="card" style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '50%',
                                backgroundColor: p.role === 'subscriber' ? '#dbeafe' : '#fef3c7',
                                color: p.role === 'subscriber' ? '#1e40af' : '#92400e',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.8rem', fontWeight: 'bold'
                            }}>
                                {p.name.charAt(0)}
                            </div>
                            <div>
                                <div style={{ fontWeight: '500' }}>{p.name}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                    {p.role === 'subscriber' ? `Seat ${p.seat}` : 'Daily Token'}
                                </div>
                            </div>
                        </div>
                        {p.role === 'subscriber' && (
                            <span className="status-badge status-active">Sub</span>
                        )}
                    </div>
                ))}
            </div>

            <div className="sticky-spacer"></div>
            <div className="sticky-bottom">
                <button className="btn btn-primary">
                    <Settings size={18} /> Manage Seats
                </button>
            </div>
        </div>
    );
};

export default RouteDetails;
