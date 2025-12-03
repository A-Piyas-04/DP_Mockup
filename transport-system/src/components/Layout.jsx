import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Settings, Bell } from 'lucide-react';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthPage = location.pathname === '/login';

    if (isAuthPage) {
        return <Outlet />;
    }

    return (
        <div className="container">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                    IUT Transport
                </div>
                <div onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}>
                    <Bell size={24} color="var(--text-secondary)" />
                </div>
            </header>

            <main style={{ minHeight: 'calc(100vh - 140px)' }}>
                <Outlet />
            </main>

            {/* Bottom Navigation for Mobile */}
            <nav style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'var(--white)',
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '12px',
                maxWidth: '480px',
                margin: '0 auto',
                zIndex: 100
            }}>
                <NavIcon icon={<Home size={24} />} label="Home" active={location.pathname === '/dashboard'} onClick={() => navigate('/dashboard')} />
                <NavIcon icon={<User size={24} />} label="Profile" active={location.pathname === '/profile'} onClick={() => navigate('/profile')} />
                <NavIcon icon={<Settings size={24} />} label="Settings" active={location.pathname === '/settings'} onClick={() => navigate('/settings')} />
            </nav>
            <div style={{ height: '70px' }}></div>
        </div>
    );
};

const NavIcon = ({ icon, label, active, onClick }) => (
    <div
        onClick={onClick}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: active ? 'var(--primary-color)' : 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '0.75rem',
            gap: '4px'
        }}
    >
        {icon}
        <span>{label}</span>
    </div>
);

export default Layout;
