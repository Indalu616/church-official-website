import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import AppNav from "./components/Navbar";
import OurPastor from "./components/OurPastor";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header>
        <AppNav />
        <Hero />
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
