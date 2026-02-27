import React, { useEffect, useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles

const WeddingInvite = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [loves, setLoves] = useState(0);
    const weddingDate = new Date('2026-06-15T00:00:00Z'); // Set the wedding date

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
        const formData = new FormData(event.target);
        console.log('RSVP submitted:', Object.fromEntries(formData));
        // Handle RSVP submission (e.g., send to server)
    };

    return (
        <div className="invite-container">
            <div className="3d-envelope-header">💌</div>
            <h1>We Are Getting Married!</h1>
            <div className="countdown">
                <p>Time until wedding:</p>
                <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
            </div>
            <div className="love-counter">
                <button onClick={handleLoveClick}>❤️ {loves} Loves</button>
            </div>
            <div className="tabs">
                <button>Wedding</button>
                <button>Guests</button>
                <button>Gallery</button>
                <button>RSVP</button>
            </div>
            <div className="floating-hearts">
                {/* Implement animation for floating hearts here */}
            </div>
            <form onSubmit={handleRSVP} className="rsvp-form">
                <h2>RSVP</h2>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default WeddingInvite;