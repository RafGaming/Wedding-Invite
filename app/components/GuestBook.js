"use client";
import { useEffect, useRef, useState } from "react";

const FADE_DURATION_MS = 600;

const INITIAL_WISHES = [
  {
    id: 1,
    name: "Maria & Carlos",
    message:
      "Wishing you a lifetime of love, laughter, and endless happiness. May every day be as beautiful as this one!",
    initials: "MC",
  },
  {
    id: 2,
    name: "Aunt Sofia",
    message:
      "Francisca, you have always been our ray of sunshine. Jethro, take good care of her! Congratulations to you both.",
    initials: "AS",
  },
  {
    id: 3,
    name: "The Reyes Family",
    message:
      "May your love grow stronger with each passing year. So excited to be part of this beautiful celebration!",
    initials: "RF",
  },
  {
    id: 4,
    name: "Marco & Elena",
    message:
      "Two wonderful people, one incredible love story. Cheers to forever! We love you both so much.",
    initials: "ME",
  },
];

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function GuestBook() {
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });
  const [newId, setNewId] = useState(null);
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
  }, [wishes]);

  const addRef = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newWish = {
      id,
      name: form.name.trim(),
      message: form.message.trim(),
      initials: getInitials(form.name),
    };
    setWishes((prev) => [newWish, ...prev]);
    setNewId(id);
    setForm({ name: "", message: "" });
    setShowForm(false);
    setTimeout(() => setNewId(null), FADE_DURATION_MS);
  };

  return (
    <section className="guestbook-section scroll-reveal">
      <div className="guestbook-inner">
        <span className="section-label gold-text">Guest Book</span>
        <h2 className="guestbook-heading">Wishes &amp; Blessings</h2>

        {!showForm && (
          <button
            className="guestbook-leave-btn"
            onClick={() => setShowForm(true)}
          >
            ✦ Leave a Blessing
          </button>
        )}

        {showForm && (
          <form className="guestbook-form" onSubmit={handleSubmit}>
            <div className="guestbook-form-field">
              <label className="guestbook-form-label" htmlFor="gb-name">
                Your Name
              </label>
              <input
                id="gb-name"
                className="guestbook-form-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="guestbook-form-field">
              <label className="guestbook-form-label" htmlFor="gb-message">
                Your Blessing
              </label>
              <textarea
                id="gb-message"
                className="guestbook-form-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your blessing or wishes for the couple…"
                rows={4}
                required
              />
            </div>
            <div className="guestbook-form-actions">
              <button type="submit" className="guestbook-submit-btn">
                Send Blessing
              </button>
              <button
                type="button"
                className="guestbook-cancel-btn"
                onClick={() => {
                  setShowForm(false);
                  setForm({ name: "", message: "" });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="guestbook-grid">
          {wishes.map((w) => (
            <div
              key={w.id}
              className={`guestbook-card${w.id === newId ? " guestbook-card--new" : ""}`}
              ref={addRef}
            >
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
