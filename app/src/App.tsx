import './App.css';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Methodology from './sections/Methodology';
import Impact from './sections/Impact';
import Investors from './sections/Investors';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Methodology />
        <Impact />
        <Investors />
        <Contact />
      </main>
    </div>
  );
}

export default App;
