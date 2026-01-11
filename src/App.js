import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InterestingFacts from './components/InterestingFacts';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <InterestingFacts/>
    </div>
  );
}

export default App;
