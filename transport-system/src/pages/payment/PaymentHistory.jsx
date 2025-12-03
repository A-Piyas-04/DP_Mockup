import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';

const PaymentHistory = () => {
    const navigate = useNavigate();

    // Mock transactions
    const transactions = [
        { id: 1, date: 'Today, 08:30 AM', amount: 50, status: 'Paid', type: 'Daily Token' },
        { id: 2, date: 'Yesterday, 07:15 AM', amount: 50, status: 'Paid', type: 'Daily Token' },
        { id: 3, date: 'Oct 25, 09:00 AM', amount: 50, status: 'Cancelled', type: 'Daily Token' },
        { id: 4, date: 'Oct 01, 10:00 AM', amount: 1500, status: 'Paid', type: 'Monthly Subscription' },
    ];

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>History</h1>
                </div>
                <button style={{ background: 'none', border: 'none' }}>
                    <Filter size={20} color="var(--text-secondary)" />
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {transactions.map(tx => (
                    <div key={tx.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: '600' }}>{tx.type}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{tx.date}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: 'bold' }}>৳ {tx.amount}</div>
                            <span className={`status-badge status-${tx.status === 'Paid' ? 'active' : 'cancelled'}`} style={{ marginTop: '4px' }}>
                                {tx.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentHistory;
