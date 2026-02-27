import React, { useEffect, useState } from 'react';
import './App.css'; // Assuming CSS for animations and styles are in App.css

const WeddingInvitation = () => {
  const [countdown, setCountdown] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  const [activeTab, setActiveTab] = useState('details');

  const weddingDate = new Date('2026-06-12T00:00:00Z'); // Set your wedding date here

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = weddingDate - now;
      if (timeRemaining < 0) {
        clearInterval(interval);
        setCountdown(0);
      } else {
        setCountdown(timeRemaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleLove = () => {
    setLoveCount(loveCount + 1);
    // Trigger confetti effect here
    // You can use a library like react-confetti or create your own confetti effect
  };

  return (
    <div style={{
      background: 'linear-gradient(120deg, #f6d1am, #ff7676)',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeIn 1s ease-in',
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#fff' }}>You're Invited!</h1>
      <h2 style={{ color: '#ffea00' }}>To a Fancy Luxury Wedding</h2>

      <div style={{ margin: '20px 0' }}>
        <h3>Countdown to the Wedding</h3>
        <p style={{ fontSize: '2rem', color: '#fff' }}>{Math.floor(countdown / 1000 / 60 / 60)}h : {Math.floor((countdown / 1000 / 60) % 60)}m : {Math.floor((countdown / 1000) % 60)}s</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => handleTabChange('details')}>Details</button>
        <button onClick={() => handleTabChange('rsvp')}>RSVP</button>
        <button onClick={() => handleTabChange('gallery')}>Gallery</button>
      </div>

      {activeTab === 'details' && <div><h3>Wedding Ceremony Details</h3><p>Details about the wedding ceremony...</p></div>}
      {activeTab === 'rsvp' && <div><h3>RSVP Information</h3><p>Information about how to RSVP...</p></div>}
      {activeTab === 'gallery' && <div><h3>Wedding Gallery</h3><p>Gallery of beautiful moments...</p></div>}

      <div style={{ marginTop: '20px' }}>
        <button onClick={toggleLove} style={{ padding: '10px 20px', fontSize: '1rem' }}>❤️ Love This! {loveCount}</button>
      </div>
    </div>
  );
};

export default WeddingInvitation;
