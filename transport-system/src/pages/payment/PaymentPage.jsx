import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, CreditCard, Smartphone } from 'lucide-react';

const PaymentPage = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('bkash');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <CheckCircle size={48} />
                </div>
                <h1 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Payment Successful!</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Your token has been booked successfully.</p>
                <div className="card" style={{ width: '100%', marginBottom: '32px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Token ID</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '2px' }}>TK-8392</div>
                </div>
                <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Payment</h1>
            </div>

            <div className="card" style={{ marginBottom: '24px', textAlign: 'center', padding: '32px' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Amount to Pay</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>৳ 50</div>
            </div>

            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Select Method</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                    className="card"
                    onClick={() => setPaymentMethod('bkash')}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer',
                        border: paymentMethod === 'bkash' ? '2px solid var(--primary-color)' : '1px solid #e5e7eb'
                    }}
                >
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#e2136e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <Smartphone size={24} />
                    </div>
                    <div style={{ flex: 1, fontWeight: '500' }}>bKash</div>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {paymentMethod === 'bkash' && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></div>}
                    </div>
                </div>

                <div
                    className="card"
                    onClick={() => setPaymentMethod('card')}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer',
                        border: paymentMethod === 'card' ? '2px solid var(--primary-color)' : '1px solid #e5e7eb'
                    }}
                >
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <CreditCard size={24} />
                    </div>
                    <div style={{ flex: 1, fontWeight: '500' }}>Card / Manual</div>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {paymentMethod === 'card' && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></div>}
                    </div>
                </div>
            </div>

            <div className="sticky-spacer"></div>
            <div className="sticky-bottom">
                <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={isProcessing}
                >
                    {isProcessing ? 'Processing...' : 'Confirm Payment'}
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
