import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, DollarSign, Bus, UserX } from 'lucide-react';

const DailyReport = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Daily Summary</h1>
            </div>

            <div style={{ marginBottom: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: '500' }}>October 27, 2023</h2>
            </div>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div className="card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                        <Users size={16} /> Total Riders
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>142</div>
                </div>
                <div className="card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                        <DollarSign size={16} /> Revenue
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>৳ 4.2k</div>
                </div>
                <div className="card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                        <Bus size={16} /> Avail. Seats
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>45</div>
                </div>
                <div className="card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                        <UserX size={16} /> Absent
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b' }}>12</div>
                </div>
            </div>

            {/* Absent Subscribers List */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Absent Subscribers</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[1, 2, 3].map(i => (
                    <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px' }}>
                        <div>
                            <div style={{ fontWeight: '500' }}>Student {i}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Route A • Seat A{i}</div>
                        </div>
                        <span className="status-badge status-cancelled">Absent</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyReport;
