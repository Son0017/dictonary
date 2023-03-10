import FormCom from "./components/Form";
import Navbar from "./components/Navbar";
import SingleWord from "./components/SingleWord";
import { Container } from "./styeled";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
function App() {
  const [font, setFont] = useState("san");
  const [mode, setMode] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const items = localStorage.getItem("mode");
    if (items) {
      setMode(JSON.parse(localStorage.getItem("mode")));
    }
    const font = JSON.parse(localStorage.getItem("fonts"));
    if (font) {
      setFont(font);
    }
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lora", "Inter", "Inconsolata"],
      },
    });
  }, []);

  return (
    <div
      className={font}
      style={
        mode
          ? { background: "#000000", color: "white", height: "100%" }
          : { background: "#ffffff", color: "#2d2d2d", height: "100%" }
      }
    >
      <div
        style={
          mode
            ? { background: "#000000", color: "white" }
            : { background: "#ffffff", color: "#2d2d2d" }
        }
      >
        <Container mode={mode}>
          <Navbar setFont={setFont} font={font} mode={mode} setMode={setMode} />
          <FormCom mode={mode} setUrl={setUrl} />
          <SingleWord url={url} mode={mode} setUrl={setUrl} />
        </Container>
      </div>
    </div>
  );
}

export default App;
