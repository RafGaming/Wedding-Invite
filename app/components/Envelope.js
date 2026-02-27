"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      {!open && (
        <div
          className="envelope"
          onClick={() => setOpen(true)}
          style={{
            cursor: "pointer",
            width: "260px",
            height: "180px",
            margin: "0 auto",
            border: "3px solid #d4af37",
            borderRadius: "12px",
            background: "#fff7e1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <span className="gold-text" style={{ fontSize: "20px" }}>
            Open Invitation
          </span>
        </div>
      )}

      {open && (
        <div className="fade-in">
          <Card />
        </div>
      )}
    </div>
  );
}
