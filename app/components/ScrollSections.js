"use client";
import { useEffect, useRef, useState } from "react";
import Countdown from "./Countdown";
import Timeline from "./Timeline";
import Gallery from "./Gallery";
import RSVPForm from "./RSVPForm";
import GuestBook from "./GuestBook";

export default function ScrollSections() {
  const sectionsRef = useRef([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/api/wedding-details")
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => setDetails(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      {/* ───── THE GROOM ───── */}
      <section
        className="photo-section scroll-reveal"
        ref={addRef}
      >
        <div className="photo-bg">
          {/* Replace with your actual groom photo */}
          <img
            src="/bg/groom.jpg"
            alt="The Groom"
            className="section-photo"
          />
          <div className="photo-blur-overlay"></div>
        </div>
        <div className="photo-text-overlay">
          <span className="section-label gold-text">The Groom</span>
          <h2 className="section-name">Jethro Dionisio</h2>
          <p className="section-quote">
            &ldquo;Every love story is beautiful, but ours is my
            favorite.&rdquo;
          </p>
          <div className="section-divider"></div>
          <p className="section-bio">
            A loving partner, a gentle soul, and the man who makes every day
            brighter. His warmth and kindness light up every room he enters.
          </p>
        </div>
      </section>

      {/* ───── THE BRIDE ───── */}
      <section
        className="photo-section photo-section-alt scroll-reveal"
        ref={addRef}
      >
        <div className="photo-bg">
          {/* Replace with your actual bride photo */}
          <img
            src="/bg/bride.jpg"
            alt="The Bride"
            className="section-photo"
          />
          <div className="photo-blur-overlay"></div>
        </div>
        <div className="photo-text-overlay">
          <span className="section-label gold-text">The Bride</span>
          <h2 className="section-name">
            Francisca Domingo
          </h2>
          <p className="section-quote">
            &ldquo;I choose you. And I&rsquo;ll choose you over and over. Without
            pause, without doubt, in a heartbeat.&rdquo;
          </p>
          <div className="section-divider"></div>
          <p className="section-bio">
            Graceful, radiant, and full of love. Her smile is the light that
            guides this beautiful journey they are about to share forever.
          </p>
        </div>
      </section>

      {/* ───── TIMELINE ───── */}
      <Timeline />

      {/* ───── OUR STORY ───── */}
      <section
        className="photo-section scroll-reveal"
        ref={addRef}
      >
        <div className="photo-bg">
          {/* Replace with your actual couple photo */}
          <img
            src="/bg/couple.jpg"
            alt="Together"
            className="section-photo"
          />
          <div className="photo-blur-overlay"></div>
        </div>
        <div className="photo-text-overlay">
          <span className="section-label gold-text">Our Story</span>
          <h2 className="section-name">Together Forever</h2>
          <p className="section-quote">
            &ldquo;Two souls, one heart, an eternal bond.&rdquo;
          </p>
          <div className="section-divider"></div>
          <p className="section-bio">
            From the moment they met, they knew their story was meant to be
            written in the stars. Now, they invite you to witness the next
            beautiful chapter.
          </p>
        </div>
      </section>

      {/* ───── GALLERY ───── */}
      <Gallery />

      {/* ───── COUNTDOWN & DETAILS ───── */}
      <Countdown />
      <section
        className="details-section scroll-reveal"
        ref={addRef}
      >
        <div className="details-card">
          <h2 className="gold-text details-title">Save the Date</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <h3>Date</h3>
              <p className="mauve-text">{details.wedding_date || "To Be Announced"}</p>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <h3>Venue</h3>
              <p className="mauve-text">{details.venue || "To Be Announced"}</p>
            </div>
            <div className="detail-item">
              <span className="detail-icon">⏰</span>
              <h3>Time</h3>
              <p className="mauve-text">{details.wedding_time || "To Be Announced"}</p>
            </div>
            <div className="detail-item">
              <span className="detail-icon">👗</span>
              <h3>Dress Code</h3>
              <p className="mauve-text">{details.dress_code || "Formal / Semi-Formal"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── RSVP FORM ───── */}
      <RSVPForm />

      {/* ───── GUEST BOOK ───── */}
      <GuestBook />

      {/* ───── FOOTER ───── */}
      <footer className="wedding-footer">
        <p className="mauve-text">With Love,</p>
        <h3 className="gold-shimmer">Jethro &amp; Francisca</h3>
        <p className="footer-note">We can&rsquo;t wait to celebrate with you ♥</p>
      </footer>
    </>
  );
}
