import Envelope from "./components/Envelope"; 
import Sparkles from "./components/Sparkles"; 
import Petals from "./components/Petals"; 
import CursorTrail from "./components/CursorTrail";

export default function Home() { return ( <main style={{ minHeight: "300vh", paddingTop: "80px" }}>

  {/* cinematic triple parallax background */}
  <div className="parallax-bg">
    <div className="bg-layer layer1"></div>
    <div className="bg-layer layer2"></div>
  </div>
  {/* drifting sparkles */}
  <Sparkles />
  {/* falling gold petals */}
  <Petals />
  {/* cursor gold dust trail */}
  <CursorTrail />
  {/* floating envelope */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "160px",
      marginBottom: "200px",
      position: "relative",
      zIndex: 10
    }}
  >
    <Envelope />
  </div>
</main>
); 
}
