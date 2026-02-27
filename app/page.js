import Envelope from "./components/Envelope";
import Sparkles from "./components/Sparkles";
import Petals from "./components/Petals";
import CursorTrail from "./components/CursorTrail";
import MusicPlayer from "./components/MusicPlayer";
import ScrollSections from "./components/ScrollSections";
import PageFrame from "./components/PageFrame";

export default function Home() {
  return (
    <main>
      <PageFrame />
      {/* cinematic parallax background */}
      <div className="parallax-bg">
        <div className="bg-layer layer1"></div>
        <div className="bg-layer layer2"></div>
      </div>

      {/* ambient effects */}
      <Sparkles />
      <Petals />
      <CursorTrail />
      <MusicPlayer />

      {/* hero section — floating envelope */}
      <section className="hero-section">
        <Envelope />
      </section>

      {/* scrollable bride & groom sections */}
      <ScrollSections />
    </main>
  );
}
