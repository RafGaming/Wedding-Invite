import React, { useState, useEffect } from 'react';
import './WeddingComponent.css'; // Assume a separate CSS file for styling

const WeddingComponent = () => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [loveCount, setLoveCount] = useState(0);
    const [rsvpName, setRsvpName] = useState('');
    const [rsvpCount, setRsvpCount] = useState(1);

    const weddingDate = new Date('2026-06-01T00:00:00Z'); // Set the wedding date here

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = weddingDate - now;
            setTimeRemaining({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleRsvpSubmit = (e) => {
        e.preventDefault();
        console.log(`RSVP from: ${rsvpName}, Number of Guests: ${rsvpCount}`);
        // Logic to handle RSVP submission
    };

    return (
        <div className="wedding-invite">
            <h1>Your Wedding Invitation</h1>
            <div className="countdown">
                <h2>Countdown to the Wedding:</h2>
                <p>{timeRemaining.days} Days {timeRemaining.hours} Hours {timeRemaining.minutes} Minutes {timeRemaining.seconds} Seconds</p>
            </div>
            <div className="tabs">
                <ul>
                    <li>About</li>
                    <li>RSVP</li>
                    <li>Gallery</li>
                </ul>
                <div className="tab-content">
                    <div className="about-tab">Details about the wedding...</div>
                    <div className="rsvp-tab">
                        <form onSubmit={handleRsvpSubmit}>
                            <input type="text" value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} placeholder="Your Name" required />
                            <input type="number" value={rsvpCount} onChange={(e) => setRsvpCount(e.target.value)} min="1" max="10" required />
                            <button type="submit">RSVP</button>
                        </form>
                    </div>
                    <div className="gallery-tab">Gallery of moments...</div>
                </div>
            </div>
            <div className="love-counter">
                <p>Love Count: {loveCount}</p>
                <button onClick={() => setLoveCount(loveCount + 1)}>Send Love ❤️</button>
            </div>
        </div>
    );
};

export default WeddingComponent;