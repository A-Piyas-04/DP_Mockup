import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, CreditCard, Calendar, AlertCircle } from 'lucide-react';
import { users, routes } from '../../data/mockData';

const SubscriberProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const subscriber = users.find(u => u.id === parseInt(id)) || users[2]; // Default to student
    const route = routes.find(r => r.id === subscriber.routeId);

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Subscriber Profile</h1>
            </div>

            {/* Profile Header */}
            <div className="card" style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    backgroundColor: '#dbeafe', margin: '0 auto 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#1e40af'
                }}>
                    <User size={40} />
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{subscriber.name}</h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{subscriber.email}</div>
                <div style={{ marginTop: '12px' }}>
                    <span className="status-badge status-active">Active Subscriber</span>
                </div>
            </div>

            {/* Subscription Details */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Subscription Details</h3>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Route</span>
                    <span style={{ fontWeight: '600' }}>{route ? route.name : 'N/A'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Seat Number</span>
                    <span style={{ fontWeight: '600', color: 'var(--primary-color)' }}>{subscriber.seat || 'N/A'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Valid Until</span>
                    <span style={{ fontWeight: '600' }}>Dec 31, 2023</span>
                </div>
                <div style={{ paddingTop: '16px', borderTop: '1px solid #f3f4f6', display: 'flex', gap: '12px' }}>
                    <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem' }}>Change Route</button>
                    <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem', color: '#ef4444', borderColor: '#ef4444' }}>Suspend</button>
                </div>
            </div>

            {/* Payment Summary */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Payment Summary</h3>
            <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ backgroundColor: '#f3e8ff', padding: '8px', borderRadius: '8px', color: '#6b21a8' }}>
                        <CreditCard size={20} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>Last Payment</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Oct 01, 2023</div>
                    </div>
                    <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>৳ 1500</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ backgroundColor: '#fee2e2', padding: '8px', borderRadius: '8px', color: '#991b1b' }}>
                        <AlertCircle size={20} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>Due Amount</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>November</div>
                    </div>
                    <div style={{ marginLeft: 'auto', fontWeight: 'bold', color: '#ef4444' }}>৳ 1500</div>
                </div>
            </div>
        </div>
    );
};

export default SubscriberProfile;
