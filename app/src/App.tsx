import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Methodology from './sections/Methodology';
import Bootcamp from './sections/Bootcamp';
import Impact from './sections/Impact';
import Investors from './sections/Investors';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Methodology />
        <Bootcamp />
        <Impact />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
