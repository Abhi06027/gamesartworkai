import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Howitworks,
  AboutUs,
  ArtworkGallery,
  SignupForm,
  Create,
} from "./Pages";
import { Hero, Hidenavbarfooter } from "./Components";
import Movies from "./Pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-gradient-to-r from-[#10112a] via-[#1b0d22] to-[#0c1e3c] min-h-screen">
        <Hidenavbarfooter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/" element={<Howitworks />} />
            <Route path="/artwork-gallery" element={<ArtworkGallery />} />
            <Route path="/" element={<AboutUs />} />
            <Route path="/Sign-in" element={<SignupForm />} />
            <Route path="/create" element={<Create />} />
            <Route path="/news" element={<Movies />} />
          </Routes>
        </Hidenavbarfooter>
      </main>
    </BrowserRouter>
  );
}

export default App;
