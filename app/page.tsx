'use client';

import React, { useEffect, useState } from 'react';

const WeddingInvite = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [loves, setLoves] = useState(0);
    const [activeTab, setActiveTab] = useState('countdown');
    const weddingDate = new Date('2026-06-15T00:00:00Z');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleLoveClick = () => {
        setLoves(loves + 1);
    };

    const handleRSVP = (event) => {
        event.preventDefault();
        alert('Thank you for your RSVP!');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f0f1e 0%, #1a0033 50%, #2d0052 100%)',
            color: '#f5f2ea',
            padding: '40px 20px',
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                color: '#8b4789',
                textAlign: 'center',
                margin: '20px 0',
            }}>You're Cordially Invited</h1>
            <h2 style={{
                fontSize: '3rem',
                background: 'linear-gradient(135deg, #d4af56, #c4872d)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
            }}>Aviana & Liam</h2>
            <p style={{ fontSize: '1.5rem', color: '#8b4789', fontWeight: 'bold', textAlign: 'center' }}>June 14, 2026</p>

            <div style={{
                maxWidth: '800px',
                margin: '40px auto',
                padding: '50px',
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid #d4af56',
                borderRadius: '20px',
                textAlign: 'center',
            }}>
                <h2 style={{ color: '#d4af56' }}>Countdown</h2>
                <p style={{ fontSize: '2rem', color: '#d4af56', margin: '20px 0' }}>
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </p>
            </div>

            <div style={{ textAlign: 'center', margin: '40px 0' }}>
                <button onClick={handleLoveClick} style={{
                    padding: '20px 50px',
                    background: 'linear-gradient(135deg, #ff69b4, #d4af56)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>
                    ❤️ Send Love
                </button>
                <p style={{ fontSize: '1.5rem', color: '#d4af56', marginTop: '20px' }}>
                    Love Received: {loves}
                </p>
            </div>

            <form onSubmit={handleRSVP} style={{
                maxWidth: '600px',
                margin: '40px auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h2 style={{ color: '#d4af56' }}>RSVP</h2>
                <input type="text" placeholder="Your Name" required style={{
                    padding: '15px',
                    border: '2.5px solid #d4af56',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#f5f2ea',
                }} />
                <input type="email" placeholder="Your Email" required style={{
                    padding: '15px',
                    border: '2.5px solid #d4af56',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#f5f2ea',
                }} />
                <button type="submit" style={{
                    padding: '15px',
                    background: 'linear-gradient(135deg, #d4af56, #c4872d)',
                    border: 'none',
                    color: '#0f0f1e',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>Submit RSVP</button>
            </form>

            <footer style={{
                textAlign: 'center',
                padding: '50px 20px',
                color: '#d4af56',
                borderTop: '3px solid #d4af56',
            }}>
                <h3>Aviana & Liam 💍</h3>
                <p>June 14, 2026</p>
            </footer>
        </div>
    );
};

export default WeddingInvite;
