"use client";
import { useEffect, useRef } from "react";

const WISHES = [
  {
    name: "Maria & Carlos",
    message:
      "Wishing you a lifetime of love, laughter, and endless happiness. May every day be as beautiful as this one!",
    initials: "MC",
  },
  {
    name: "Aunt Sofia",
    message:
      "Francisca, you have always been our ray of sunshine. Jethro, take good care of her! Congratulations to you both.",
    initials: "AS",
  },
  {
    name: "The Reyes Family",
    message:
      "May your love grow stronger with each passing year. So excited to be part of this beautiful celebration!",
    initials: "RF",
  },
  {
    name: "Marco & Elena",
    message:
      "Two wonderful people, one incredible love story. Cheers to forever! We love you both so much.",
    initials: "ME",
  },
];

export default function GuestBook() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return (
    <section className="guestbook-section scroll-reveal">
      <div className="guestbook-inner">
        <span className="section-label gold-text">Guest Book</span>
        <h2 className="guestbook-heading">Wishes &amp; Blessings</h2>
        <div className="guestbook-grid">
          {WISHES.map((w, i) => (
            <div key={i} className="guestbook-card" ref={addRef}>
              <div className="guestbook-avatar">
                <span>{w.initials}</span>
              </div>
              <p className="guestbook-message">&ldquo;{w.message}&rdquo;</p>
              <span className="guestbook-name mauve-text">{w.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
