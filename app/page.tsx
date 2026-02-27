import React from 'react';
import './styles.css'; // Assuming styles are in a separate file

const WeddingInvitation = () => {
    return (
        <div className="invitation-container">
            <header className="invitation-header">
                <h1 className="invitation-title">You're Invited to Our Wedding!</h1>
            </header>
            <section className="countdown">
                <h2>Countdown to the Big Day</h2>
                <div className="countdown-timer">
                    {/* Countdown Timer Logic */}
                </div>
            </section>
            <section className="love-story">
                <h2>Our Love Story</h2>
                <p>It all began...</p>
            </section>
            <section className="vows">
                <h2>Our Vows</h2>
                <p>We promise to...</p>
            </section>
            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-gallery">
                    {/* Gallery Images */}
                </div>
            </section>
            <section className="music">
                <h2>Our Favorite Songs</h2>
                <audio controls>
                    <source src="your-music-file.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </section>
            <section className="rsvp">
                <h2>RSVP</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    );
};

export default WeddingInvitation;