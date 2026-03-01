"use client";
import { useState, useEffect } from "react";

export default function Card() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/api/wedding-details")
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => setDetails(data))
      .catch(() => {});
  }, []);

  return (
    <div className="card">
      {/* ornamental corners */}
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>

      {/* decorative top flourish */}
      <div className="card-flourish top-flourish stagger-1">❧</div>

      {/* monogram crest */}
      <div className="card-monogram stagger-1">
        <span className="monogram-letter">J</span>
        <span className="monogram-ampersand">&#x26;</span>
        <span className="monogram-letter">F</span>
      </div>

      <h1 className="royal-card-title gold-text stagger-2">You Are Invited</h1>
      <p className="royal-sub stagger-3">To the wedding celebration of</p>

      <p className="royal-families accent-text stagger-3">Together with their families</p>

      <div className="royal-names stagger-4">
        <span className="royal-name gold-shimmer">Jethro Dionisio</span>
        <span className="royal-and">&amp;</span>
        <span className="royal-name gold-shimmer">
          Francisca Domingo
        </span>
      </div>

      <div className="royal-divider stagger-5"></div>

      <p className="royal-date stagger-6">
        Date: <span className="gold-text">{details.wedding_date || "TBA"}</span>
      </p>
      <p className="royal-venue stagger-6">
        Venue: <span className="gold-text">{details.venue || "To Be Announced"}</span>
      </p>

      <p className="royal-reception gold-text stagger-7">Dinner &amp; Dancing to Follow</p>
      <p className="royal-dress-code stagger-7">Dress Code: <span className="accent-text">{details.dress_code || "Formal / Semi-Formal"}</span></p>

      <p className="royal-rsvp mauve-text stagger-8">Kindly Respond by {details.rsvp_deadline || "[Date]"}</p>

      {/* decorative bottom flourish */}
      <div className="card-flourish bottom-flourish stagger-8">❧</div>
    </div>
  );
}

