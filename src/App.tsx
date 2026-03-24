import { portfolioData } from './data/portfolioData';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero data={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Contact data={portfolioData} />
      <Footer />
    </div>
  );
}

export default App;
