export default function Card() {
  return (
    <div className="lux-card">
      <h1 className="lux-title gold-text">You Are Invited</h1>
      <p className="lux-sub">To the wedding celebration of</p>

      <div className="lux-names">
        <span className="name gold-text">Jethro Dionisio</span>
        <span className="amp">&</span>
        <span className="name gold-text">Francisca Domingo‑Dionisio</span>
      </div>

      <p className="lux-date">
        Date: <span className="gold-text">TBA</span>
      </p>

      <div className="gold-border-corner tl"></div>
      <div className="gold-border-corner tr"></div>
      <div className="gold-border-corner bl"></div>
      <div className="gold-border-corner br"></div>
    </div>
  );
}
