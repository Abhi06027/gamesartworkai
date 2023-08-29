import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Howitworks, AboutUs, ArtworkGallery, SignupForm } from "./Pages";
import { Header, Hero, Footer, Hidenavbarfooter } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-gradient-to-r from-[#10112a] via-[#1b0d22] to-[#0c1e3c] min-h-screen">
        <Hidenavbarfooter>
          <Header />
        </Hidenavbarfooter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Howitworks />} />
          <Route path="/artwork-gallery" element={<ArtworkGallery />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/Sign-in" element={<SignupForm />} />
        </Routes>

        <Hidenavbarfooter>
          <Footer />
        </Hidenavbarfooter>
      </main>
    </BrowserRouter>
  );
}

export default App;
