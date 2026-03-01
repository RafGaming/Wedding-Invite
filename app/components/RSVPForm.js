"use client";
import { useState } from "react";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    wishes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="rsvp-section scroll-reveal">
      <div className="rsvp-inner">
        <span className="section-label gold-text">RSVP</span>
        <h2 className="rsvp-heading">Kindly Respond</h2>
        {submitted ? (
          <div className="rsvp-success">
            <div className="rsvp-success-icon">✉</div>
            <h3 className="rsvp-success-title gold-shimmer">Thank You!</h3>
            <p className="rsvp-success-msg">
              We&rsquo;ve received your RSVP and can&rsquo;t wait to celebrate
              with you.
            </p>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="rsvp-field">
              <label className="rsvp-label" htmlFor="rsvp-name">
                Guest Name
              </label>
              <input
                id="rsvp-name"
                className="rsvp-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="rsvp-field">
              <label className="rsvp-label" htmlFor="rsvp-guests">
                Number of Guests
              </label>
              <select
                id="rsvp-guests"
                className="rsvp-select"
                name="guests"
                value={form.guests}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="rsvp-field">
              <label className="rsvp-label" htmlFor="rsvp-wishes">
                Wishes &amp; Message
              </label>
              <textarea
                id="rsvp-wishes"
                className="rsvp-textarea"
                name="wishes"
                value={form.wishes}
                onChange={handleChange}
                placeholder="Share your wishes for the couple..."
                rows={4}
              />
            </div>

            <button type="submit" className="rsvp-submit">
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
