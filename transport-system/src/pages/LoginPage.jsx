import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/mockData';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple mock login logic
        const user = users.find(u => u.email === email);

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard');
        } else {
            setError('Invalid credentials. Try: officer@iut.edu, driver@iut.edu, student@iut.edu');
        }
    };

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '50%',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                }}>
                    IUT
                </div>
                <h1 className="page-title">IUT Transport</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Official Transport Management System</p>
            </div>

            <form onSubmit={handleLogin} className="card" style={{ padding: '32px 24px' }}>
                <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Login</h2>

                {error && (
                    <div style={{
                        backgroundColor: '#fee2e2',
                        color: '#991b1b',
                        padding: '12px',
                        borderRadius: 'var(--radius)',
                        marginBottom: '16px',
                        fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                <div className="input-group">
                    <label className="input-label">Email Address</label>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="input-label">Password</label>
                    <input
                        type="password"
                        className="input-field"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>
                    Login
                </button>

                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <a href="#" style={{ color: 'var(--primary-color)', fontSize: '0.9rem' }}>Forgot Password?</a>
                </div>
            </form>

            <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <p>Demo Credentials:</p>
                <p>officer@iut.edu | driver@iut.edu</p>
                <p>student@iut.edu | guest@gmail.com</p>
            </div>
        </div>
    );
};

export default LoginPage;
