export default function Card() {
  return (
    <div className="card">
      {/* ornamental corners */}
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>

      {/* decorative top flourish */}
      <div className="card-flourish top-flourish">❧</div>

      <h1 className="royal-card-title gold-text">You Are Invited</h1>
      <p className="royal-sub">To the wedding celebration of</p>

      <div className="royal-names">
        <span className="royal-name gold-shimmer">Jethro Dionisio</span>
        <span className="royal-and">&amp;</span>
        <span className="royal-name gold-shimmer">
          Francisca Domingo&#x2011;Dionisio
        </span>
      </div>

      <p className="royal-families">Together with their families</p>

      <div className="royal-divider"></div>

      <p className="royal-date">
        Date: <span className="mauve-text">TBA</span>
      </p>
      <p className="royal-venue">
        Venue: <span className="mauve-text">To Be Announced</span>
      </p>

      <p className="royal-reception">Reception to follow</p>

      <p className="royal-rsvp">Kindly RSVP</p>

      {/* decorative bottom flourish */}
      <div className="card-flourish bottom-flourish">❧</div>
    </div>
  );
}
