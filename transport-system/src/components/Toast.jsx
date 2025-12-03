import React, { useEffect } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const icons = {
        success: <CheckCircle size={20} />,
        error: <XCircle size={20} />,
        info: <Info size={20} />
    };

    const colors = {
        success: { bg: '#dcfce7', border: '#166534', text: '#166534' },
        error: { bg: '#fee2e2', border: '#991b1b', text: '#991b1b' },
        info: { bg: '#dbeafe', border: '#1e40af', text: '#1e40af' }
    };

    const theme = colors[type] || colors.success;

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: theme.bg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
            borderRadius: 'var(--radius)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 1000,
            maxWidth: '90%',
            animation: 'slideDown 0.3s ease-out'
        }}>
            {icons[type]}
            <span style={{ fontWeight: '500' }}>{message}</span>
        </div>
    );
};

export default Toast;
