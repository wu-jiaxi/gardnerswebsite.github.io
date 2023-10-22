import "./App.css";
import Banner from "../src/components/banner/Banner.tsx";
import Video from "./components/video/Video.tsx";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/gallery/Gallery.jsx";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Banner id="bannerTest" />
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
