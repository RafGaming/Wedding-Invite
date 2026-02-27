import Envelope from "./components/Envelope";
import Sparkles from "./components/Sparkles";
import MusicPlayer from "./components/MusicPlayer";
import Petals from "./components/Petals";

export default function Home() {
  return (
    <main style={{ minHeight: "200vh", paddingTop: "40px" }}>

      {/* cinematic parallax background */}
      <div className="parallax-bg">
        <div className="bg-layer layer1"></div>
        <div className="bg-layer layer2"></div>
      </div>

      {/* sparkles */}
      <Sparkles />

      {/* falling petals */}
      <Petals />

      {/* ambient music */}
      <MusicPlayer />

      {/* centered content */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}>
        <Envelope />
      </div>

    </main>
  );
}
