import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import './index.css';

function App() {
  return (
    <div className="App bg-[#101010] text-white font-montserrat">
      <Intro/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
