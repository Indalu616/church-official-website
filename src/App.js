import { useEffect } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import AppNav from "./components/Navbar";
import OurPastor from "./components/OurPastor";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import AOS from "aos";
import Schedule from "./components/Schedule";

function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="App">
      <header>
        <AppNav />
        <Hero />
        <Schedule />
      </header>
      <main>
        <Welcome />
        <Services />
        <OurPastor />
        <Gallery />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
