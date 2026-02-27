import React, { useState, useEffect } from 'react';

const WeddingInvite = () => {
  const [countdown, setCountdown] = useState(0);
  const [tab, setTab] = useState('info');
  const [rsvp, setRsvp] = useState({ name: '', attending: false });
  const [loveCounter, setLoveCounter] = useState(0);

  useEffect(() => {
    // Countdown Timer - Set to the wedding date
    const weddingDate = new Date('2026-05-01T00:00:00Z').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      setCountdown(distance);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const handleRsvpChange = (e) => {
    const { name, value } = e.target;
    setRsvp((prev) => ({ ...prev, [name]: value }));
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    alert(`RSVP submitted for ${rsvp.name}`);
  };

  const toggleTab = (selectedTab) => {
    setTab(selectedTab);
  };

  const handleLove = () => {
    setLoveCounter(loveCounter + 1);
    // Insert confetti effect logic here
  };

  const formatCountdown = (countdown) => {
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className='wedding-invite'>
      <h1>You're Invited to Our Wedding!</h1>
      <div className='countdown'>
        <h2>Countdown to Wedding:</h2>
        <p>{formatCountdown(countdown)}</p>
      </div>
      <div className='tabs'>
        <button onClick={() => toggleTab('info')}>Event Info</button>
        <button onClick={() => toggleTab('rsvp')}>RSVP</button>
      </div>
      {tab === 'info' && <div className='info'>Event details go here...</div>}
      {tab === 'rsvp' && (
        <form onSubmit={handleRsvpSubmit}>
          <input type='text' name='name' placeholder='Your Name' onChange={handleRsvpChange} />
          <label>
            <input type='checkbox' name='attending' onChange={(e) => setRsvp({ ...rsvp, attending: e.target.checked })} /> Attending
          </label>
          <button type='submit'>Submit RSVP</button>
        </form>
      )}
      <div className='love-counter'>
        <button onClick={handleLove}>💖 Love this!</button>
        <p>💕 {loveCounter} loves!</p>
      </div>
      {/* Insert confetti effect element here */}
      {/* Add romantic animations using CSS or libraries like Framer Motion */}
    </div>
  );
};

export default WeddingInvite;