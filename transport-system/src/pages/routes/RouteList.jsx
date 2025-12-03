import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import { routes } from '../../data/mockData';

const RouteList = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingBottom: '80px' }}>
            <header className="page-header">
                <h1 className="page-title">Routes</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Official transport schedules</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {routes.map(route => (
                    <div key={route.id} className="card" onClick={() => navigate(`/routes/${route.id}`)} style={{ cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{route.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                <Clock size={14} /> {route.time}
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></div>
                                <div style={{ width: '2px', height: '20px', backgroundColor: '#e5e7eb' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid var(--primary-color)', backgroundColor: 'white' }}></div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '500' }}>{route.start}</div>
                                <div style={{ height: '16px' }}></div>
                                <div style={{ fontWeight: '500' }}>{route.end}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <Users size={16} />
                                <span>{route.seats} Seats</span>
                            </div>
                            <button className="btn btn-outline" style={{ width: 'auto', padding: '6px 12px', fontSize: '0.85rem', border: 'none', color: 'var(--primary-color)' }}>
                                View Details <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RouteList;
