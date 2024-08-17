import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import AppNav from "./components/Navbar";
import OurPastor from "./components/OurPastor";
import Services from "./components/Services";
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
      </main>
    </div>
  );
}

export default App;
