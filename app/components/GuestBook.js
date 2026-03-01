"use client";
import { useEffect, useRef, useState } from "react";

const FADE_DURATION_MS = 600;

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
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });
  const [newId, setNewId] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    async function fetchWishes() {
      try {
        const res = await fetch("/api/guestbook");
        if (res.ok) {
          const data = await res.json();
          setWishes(data);
        }
      } catch (err) {
        console.error("Failed to fetch guestbook:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchWishes();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          message: form.message.trim(),
        }),
      });
      if (res.ok) {
        const saved = await res.json();
        const newWish = { ...saved, initials: getInitials(saved.name) };
        setWishes((prev) => [newWish, ...prev]);
        setNewId(saved.id);
        setForm({ name: "", message: "" });
        setShowForm(false);
        setTimeout(() => setNewId(null), FADE_DURATION_MS);
      } else {
        console.error("Failed to save blessing");
      }
    } catch (err) {
      console.error("Error submitting blessing:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="guestbook-section scroll-reveal">
      <div className="guestbook-inner">
        <span className="section-label gold-text">Guest Book</span>
        <h2 className="guestbook-heading">Wishes &amp; Blessings</h2>
        {!showForm && (
          <button className="guestbook-leave-btn" onClick={() => setShowForm(true)}>
            ✦ Leave a Blessing
          </button>
        )}
        {showForm && (
          <form className="guestbook-form" onSubmit={handleSubmit}>
            <div className="guestbook-form-field">
              <label className="guestbook-form-label" htmlFor="gb-name">Your Name</label>
              <input id="gb-name" className="guestbook-form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required disabled={submitting} />
            </div>
            <div className="guestbook-form-field">
              <label className="guestbook-form-label" htmlFor="gb-message">Your Blessing</label>
              <textarea id="gb-message" className="guestbook-form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Write your blessing or wishes for the couple…" rows={4} required disabled={submitting} />
            </div>
            <div className="guestbook-form-actions">
              <button type="submit" className="guestbook-submit-btn" disabled={submitting}>{submitting ? "Sending…" : "Send Blessing"}</button>
              <button type="button" className="guestbook-cancel-btn" disabled={submitting} onClick={() => { setShowForm(false); setForm({ name: "", message: "" }); }}>Cancel</button>
            </div>
          </form>
        )}
        <div className="guestbook-grid">
          {loading && (<p style={{ textAlign: "center", opacity: 0.6 }}>Loading blessings…</p>)}
          {!loading && wishes.length === 0 && (<p style={{ textAlign: "center", opacity: 0.6 }}>Be the first to leave a blessing! ✨</p>)}
          {wishes.map((w) => (
            <div key={w.id} className={`guestbook-card${w.id === newId ? " guestbook-card--new" : ""}`} ref={addRef}>
              <div className="guestbook-avatar"><span>{w.initials || getInitials(w.name)}</span></div>
              <p className="guestbook-message">&ldquo;{w.message}&rdquo;</p>
              <span className="guestbook-name mauve-text">{w.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}