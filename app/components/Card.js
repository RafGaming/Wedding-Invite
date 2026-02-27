export default function Card() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "450px",
        background: "#ffffffea",
        borderRadius: "12px",
        border: "2px solid #d4af37",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        margin: "0 auto"
      }}
    >
      <h1 className="gold-text" style={{ fontSize: "36px", marginBottom: "10px" }}>
        You Are Invited
      </h1>
      <p style={{ fontSize: "20px", lineHeight: "1.4" }}>
        To the wedding celebration of
      </p>

      <h2 className="gold-text" style={{ marginTop: "15px", fontSize: "30px" }}>
        Jethro Dionisio
      </h2>
      <h2 style={{ fontSize: "22px" }}>&</h2>
      <h2 className="gold-text" style={{ fontSize: "30px" }}>
        Francisca Domingo‑Dionisio
      </h2>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Date: <span className="gold-text">TBA</span>
      </p>
    </div>
  );
}
