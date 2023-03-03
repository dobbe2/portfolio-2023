// import logo from './logo.svg';
import './index.css';
import Header from "./components/ui/Header.jsx";
import Hero from "./components/ui/Hero.jsx";
import About from "./components/ui/About.jsx";
import EasterEgg from './components/ui/EasterEgg';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />

      <EasterEgg />
    </div>
  );
}

export default App;
