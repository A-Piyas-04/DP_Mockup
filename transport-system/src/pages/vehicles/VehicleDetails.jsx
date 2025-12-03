import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Edit2 } from 'lucide-react';
import { vehicles, drivers, trips } from '../../data/mockData';

const VehicleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const vehicle = vehicles.find(v => v.id === parseInt(id)) || vehicles[0];
    const driver = drivers.find(d => d.id === vehicle.driverId);

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: '4px' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className="page-title" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Vehicle Details</h1>
            </div>

            {/* Header Card */}
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{vehicle.plate}</div>
                        <div style={{ color: 'var(--text-secondary)' }}>{vehicle.type}</div>
                    </div>
                    <span className={`status-badge status-${vehicle.status === 'Active' ? 'active' : 'cancelled'}`}>
                        {vehicle.status}
                    </span>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Capacity</div>
                        <div style={{ fontWeight: '600' }}>{vehicle.seats} Seats</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Route</div>
                        <div style={{ fontWeight: '600' }}>Route A</div>
                    </div>
                </div>
            </div>

            {/* Driver Section */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Assigned Driver</h3>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {driver ? (
                    <>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '50%',
                            backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <User size={24} color="var(--text-secondary)" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '600' }}>{driver.name}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{driver.phone}</div>
                        </div>
                        <button className="btn btn-outline" style={{ width: 'auto', padding: '8px' }}>
                            <Edit2 size={16} />
                        </button>
                    </>
                ) : (
                    <div style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>No driver assigned</div>
                )}
            </div>

            {/* Seat Map Preview */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Seat Configuration</h3>
            <div className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', maxWidth: '200px' }}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} style={{
                            width: '32px', height: '32px',
                            border: '2px solid #e5e7eb', borderRadius: '4px',
                            backgroundColor: i < 2 ? '#dcfce7' : 'white' // Mock occupied
                        }}></div>
                    ))}
                </div>
            </div>

            {/* Trip History */}
            <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Recent Trips</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {trips.map(trip => (
                    <div key={trip.id} className="card" style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={16} color="var(--text-secondary)" />
                                <span>Route {trip.routeId}</span>
                            </div>
                            <span style={{ color: 'var(--text-secondary)' }}>{trip.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="sticky-spacer"></div>
            <div className="sticky-bottom">
                <button className="btn btn-primary">Edit Vehicle</button>
            </div>
        </div>
    );
};

export default VehicleDetails;
