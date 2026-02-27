"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lux-wrapper">
      {!open && (
        <div
          className="lux-envelope"
          onClick={() => setOpen(true)}
        >
          <div className="lux-flap"></div>
          <div className="lux-body">
            <span className="lux-open gold-text">
              Open Invitation
            </span>
          </div>
        </div>
      )}

      {open && (
        <div className="lux-card-container fade-in-soft">
          <Card />
        </div>
      )}
    </div>
  );
}
