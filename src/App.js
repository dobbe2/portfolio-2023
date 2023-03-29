// import logo from './logo.svg';
import './index.css';
import Header from "./components/ui/Header.jsx";
import Hero from "./components/ui/Hero.jsx";
import About from "./components/ui/About.jsx";
import Experience from './components/ui/Experience';
import Creations from './components/ui/Creations';
import EasterEgg from './components/ui/EasterEgg';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Creations />
      <EasterEgg />
    </div>
  );
}

export default App;
