import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Lock, Moon, LogOut, ChevronRight } from 'lucide-react';
import Toast from '../components/Toast';

const ProfileSettings = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handlePersonalInfo = () => {
        setToastMessage('Personal info page coming soon!');
        setShowToast(true);
    };

    const handleChangePassword = () => {
        setToastMessage('Change password coming soon!');
        setShowToast(true);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setToastMessage(darkMode ? 'Light mode enabled' : 'Dark mode enabled');
        setShowToast(true);
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Profile & Settings</h1>
            </div>

            {/* User Info */}
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <User size={32} />
                </div>
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{user.name || 'Guest User'}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{user.email || 'guest@example.com'}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{user.role || 'User'}</div>
                </div>
            </div>

            {/* Settings List */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Account</h3>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div onClick={handlePersonalInfo} style={{ display: 'flex', alignItems: 'center', padding: '16px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer' }}>
                    <User size={20} color="var(--text-secondary)" style={{ marginRight: '12px' }} />
                    <span style={{ flex: 1 }}>Personal Information</span>
                    <ChevronRight size={16} color="#d1d5db" />
                </div>
                <div onClick={handleChangePassword} style={{ display: 'flex', alignItems: 'center', padding: '16px', cursor: 'pointer' }}>
                    <Lock size={20} color="var(--text-secondary)" style={{ marginRight: '12px' }} />
                    <span style={{ flex: 1 }}>Change Password</span>
                    <ChevronRight size={16} color="#d1d5db" />
                </div>
            </div>

            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem', marginTop: '24px' }}>Preferences</h3>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div onClick={toggleDarkMode} style={{ display: 'flex', alignItems: 'center', padding: '16px', cursor: 'pointer' }}>
                    <Moon size={20} color="var(--text-secondary)" style={{ marginRight: '12px' }} />
                    <span style={{ flex: 1 }}>Dark Mode</span>
                    <div style={{ width: '40px', height: '20px', backgroundColor: darkMode ? 'var(--primary-color)' : '#e5e7eb', borderRadius: '10px', position: 'relative', transition: 'background-color 0.3s' }}>
                        <div style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: darkMode ? '22px' : '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.2)', transition: 'left 0.3s' }}></div>
                    </div>
                </div>
            </div>

            <button
                className="btn"
                onClick={handleLogout}
                style={{
                    marginTop: '32px',
                    backgroundColor: '#fee2e2',
                    color: '#991b1b',
                    justifyContent: 'center'
                }}
            >
                <LogOut size={20} /> Logout
            </button>

            {showToast && <Toast message={toastMessage} type="info" onClose={() => setShowToast(false)} />}
        </div>
    );
};

export default ProfileSettings;
