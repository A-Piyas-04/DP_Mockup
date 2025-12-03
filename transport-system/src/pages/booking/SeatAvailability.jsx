import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Ticket } from 'lucide-react';
import { routes } from '../../data/mockData';

const SeatAvailability = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('2023-10-27');
    const [selectedSeat, setSelectedSeat] = useState(null);

    // Mock seat status: 0=Available, 1=Reserved, 2=Full
    const seats = Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        status: i < 20 ? 2 : i < 30 ? 1 : 0,
        label: `S${i + 1}`
    }));

    const handleSeatClick = (seat) => {
        if (seat.status === 0) {
            setSelectedSeat(seat.id === selectedSeat ? null : seat.id);
        }
    };

    return (
        <div style={{ paddingBottom: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Select Seat</h1>
            </div>

            {/* Date Selector */}
            <div className="card" style={{ marginBottom: '16px' }}>
                <div className="input-group" style={{ marginBottom: 0 }}>
                    <label className="input-label">Date</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="date"
                            className="input-field"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        <Calendar size={20} style={{ position: 'absolute', right: '12px', top: '12px', color: 'var(--text-secondary)', pointerEvents: 'none' }} />
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#dcfce7', border: '1px solid #166534' }}></div>
                    <span>Available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#fef3c7', border: '1px solid #92400e' }}></div>
                    <span>Reserved</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#fee2e2', border: '1px solid #991b1b' }}></div>
                    <span>Full</span>
                </div>
            </div>

            {/* Seat Map */}
            <div className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '12px',
                    maxWidth: '240px'
                }}>
                    {seats.map(seat => {
                        let bgColor = '#dcfce7'; // Available
                        let borderColor = '#166534';
                        let cursor = 'pointer';

                        if (seat.status === 2) { // Full
                            bgColor = '#fee2e2';
                            borderColor = '#991b1b';
                            cursor = 'not-allowed';
                        } else if (seat.status === 1) { // Reserved
                            bgColor = '#fef3c7';
                            borderColor = '#92400e';
                            cursor = 'not-allowed';
                        }

                        if (selectedSeat === seat.id) {
                            bgColor = 'var(--primary-color)';
                            borderColor = 'var(--primary-color)';
                        }

                        return (
                            <div
                                key={seat.id}
                                onClick={() => handleSeatClick(seat)}
                                style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '8px',
                                    backgroundColor: bgColor,
                                    border: `1px solid ${borderColor}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.8rem', fontWeight: 'bold',
                                    color: selectedSeat === seat.id ? 'white' : 'var(--text-primary)',
                                    cursor: cursor,
                                    transition: 'all 0.2s'
                                }}
                            >
                                {seat.label}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Action */}
            <div className="sticky-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Total Fare</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>৳ 50</div>
                </div>
                <button
                    className="btn btn-primary"
                    style={{ width: 'auto', padding: '12px 32px' }}
                    disabled={!selectedSeat}
                    onClick={() => navigate('/payment')}
                >
                    Book Token <Ticket size={18} />
                </button>
            </div>
        </div>
    );
};

export default SeatAvailability;
