import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Toast from '../components/Toast';

const NotificationCenter = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const notifications = [
        { id: 1, type: 'success', title: 'Payment Confirmed', message: 'Your payment of ৳50 for Route A was successful.', time: '2 mins ago' },
        { id: 2, type: 'info', title: 'Trip Started', message: 'Driver Mike has started the trip for Route A.', time: '15 mins ago' },
        { id: 3, type: 'warning', title: 'Seat Reserved', message: 'Your seat A1 is reserved for tomorrow.', time: '1 hour ago' },
        { id: 4, type: 'info', title: 'System Update', message: 'Maintenance scheduled for tonight at 12 AM.', time: 'Yesterday' },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'success': return <CheckCircle size={20} color="#166534" />;
            case 'warning': return <AlertTriangle size={20} color="#9a3412" />;
            case 'info': default: return <Info size={20} color="#1e40af" />;
        }
    };

    const getBgColor = (type) => {
        switch (type) {
            case 'success': return '#dcfce7';
            case 'warning': return '#ffedd5';
            case 'info': default: return '#dbeafe';
        }
    };

    const handleClearAll = () => {
        setShowToast(true);
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Notifications</h1>
                </div>
                <button onClick={handleClearAll} style={{ background: 'none', border: 'none', fontSize: '0.85rem', color: 'var(--primary-color)', cursor: 'pointer' }}>
                    Clear All
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {notifications.map(notif => (
                    <div key={notif.id} className="card" style={{ display: 'flex', gap: '12px', padding: '16px' }}>
                        <div style={{
                            minWidth: '36px', height: '36px', borderRadius: '50%',
                            backgroundColor: getBgColor(notif.type),
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {getIcon(notif.type)}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{notif.title}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{notif.time}</div>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                {notif.message}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showToast && <Toast message="All notifications cleared!" type="success" onClose={() => setShowToast(false)} />}
        </div>
    );
};

export default NotificationCenter;
