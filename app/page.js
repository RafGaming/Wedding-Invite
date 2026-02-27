import Envelope from "./components/Envelope";
import Sparkles from "./components/Sparkles";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main style={{ minHeight: "200vh", paddingTop: "40px" }}>
      
      {/* blended background */}
      <div
        className="bg-blend"
        style={{
          backgroundImage: "url('/bg/groom.jpg'), url('/bg/bride.jpg')"
        }}
      />

      {/* sparkles */}
      <Sparkles />

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
