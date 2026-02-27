export default function Card() { return (



  {/* ornamental corners */}
  <div className="corner tl"></div>
  <div className="corner tr"></div>
  <div className="corner bl"></div>
  <div className="corner br"></div>
  <h1 className="royal-card-title gold-text">You Are Invited</h1>
  <p className="royal-sub">To the wedding celebration of</p>
  <div className="royal-names">
    <span className="royal-name gold-shimmer">Jethro Dionisio</span>
    <span className="royal-and">&</span>
    <span className="royal-name gold-shimmer">Francisca Domingo‑Dionisio</span>
  </div>
  <div className="royal-divider"></div>
  <p className="royal-date">
    Date: <span className="gold-text">TBA</span>
  </p>
</div>
); }
