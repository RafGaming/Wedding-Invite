"use client";

const PHOTOS = [
  { src: "/bg/groom.jpg", caption: "The Groom", label: "Jethro" },
  { src: "/bg/bride.jpg", caption: "The Bride", label: "Francisca" },
  { src: "/bg/couple.jpg", caption: "Together", label: "Our Story" },
  { src: "/bg/couple.jpg", caption: "Moments", label: "Memories" },
  { src: "/bg/groom.jpg", caption: "The Journey", label: "Adventure" },
];

export default function Gallery() {
  return (
    <section className="gallery-section scroll-reveal">
      <div className="gallery-header">
        <span className="section-label gold-text">Gallery</span>
        <h2 className="gallery-heading">Our Moments</h2>
      </div>
      <div className="gallery-track">
        {PHOTOS.map((p, i) => (
          <div key={i} className="gallery-frame">
            <div className="gallery-img-wrap">
              <img src={p.src} alt={p.caption} className="gallery-img" />
            </div>
            <div className="gallery-caption">
              <span className="gallery-label mauve-text">{p.label}</span>
              <p className="gallery-caption-text">{p.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
