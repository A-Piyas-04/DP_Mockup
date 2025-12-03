import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MonthlyReport = () => {
    const navigate = useNavigate();

    const data = [
        { name: 'W1', revenue: 4000 },
        { name: 'W2', revenue: 3000 },
        { name: 'W3', revenue: 2000 },
        { name: 'W4', revenue: 2780 },
    ];

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Monthly Report</h1>
            </div>

            {/* Revenue Chart */}
            <div className="card" style={{ height: '300px', marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Revenue Overview (Oct)</h3>
                <ResponsiveContainer width="100%" height="85%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `৳${value}`} />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="var(--primary-color)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Summary Stats */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Month Summary</h3>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #f3f4f6' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Total Revenue</span>
                    <span style={{ fontWeight: 'bold' }}>৳ 12,500</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #f3f4f6' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Total Trips</span>
                    <span style={{ fontWeight: 'bold' }}>124</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Avg. Occupancy</span>
                    <span style={{ fontWeight: 'bold', color: '#166534' }}>88%</span>
                </div>
            </div>

            <div className="sticky-spacer"></div>
            <div className="sticky-bottom">
                <button className="btn btn-primary">
                    <Download size={18} /> Export PDF Report
                </button>
            </div>
        </div>
    );
};

export default MonthlyReport;
