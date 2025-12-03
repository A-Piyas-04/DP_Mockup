import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, CreditCard } from 'lucide-react';
import { routes } from '../../data/mockData';

const TokenBooking = () => {
    const navigate = useNavigate();
    const route = routes[0]; // Mock selected route

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Book Token</h1>
            </div>

            {/* Route Summary */}
            <div className="card" style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Trip Details</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', paddingTop: '4px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></div>
                        <div style={{ width: '2px', height: '30px', backgroundColor: '#e5e7eb' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid var(--primary-color)', backgroundColor: 'white' }}></div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '16px' }}>
                            <div style={{ fontWeight: '500' }}>{route.start}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Pickup Point</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '500' }}>{route.end}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Drop-off Point</div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                    <Clock size={16} />
                    <span>{route.time} • Today</span>
                </div>
            </div>

            {/* Pickup Location */}
            <div className="card" style={{ marginBottom: '16px' }}>
                <div className="input-group" style={{ marginBottom: 0 }}>
                    <label className="input-label">Pickup Location</label>
                    <select className="input-field">
                        <option>Main Gate</option>
                        <option>Bus Stop 1</option>
                        <option>Bus Stop 2</option>
                    </select>
                </div>
            </div>

            {/* Fare Summary */}
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Base Fare</span>
                    <span>৳ 50</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Service Fee</span>
                    <span>৳ 0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem', paddingTop: '12px', borderTop: '1px solid #f3f4f6' }}>
                    <span>Total</span>
                    <span style={{ color: 'var(--primary-color)' }}>৳ 50</span>
                </div>
            </div>

            <div className="sticky-spacer"></div>
            <div className="sticky-bottom">
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/payment')}
                >
                    Proceed to Payment <CreditCard size={18} />
                </button>
            </div>
        </div>
    );
};

export default TokenBooking;
