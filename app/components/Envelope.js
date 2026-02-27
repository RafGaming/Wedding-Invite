  {!open && (
    <div
      className="royal-envelope float-up"
      onClick={() => setOpen(true)}
    >
      <div className="envelope-back"></div>
      <div className="envelope-front">
        <span className="gold-text royal-open-text">Open Invitation</span>
      </div>
      <div className="envelope-flap"></div>
      <div className="envelope-glow"></div>
    </div>
  )}

  {open && (
    <div className="fade-in-soft" style={{ marginTop: "40px" }}>
      <Card />
    </div>
  )}

</div>
