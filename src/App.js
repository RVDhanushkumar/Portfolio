import './App.css';
import Header from './components/header.js';
import FirstPage from './components/first_page.js';
import Works from './components/works.js';
import AboutMe from './components/aboutMe.js';
import Skills from './components/Skills.js';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="firstPage">
        <FirstPage />
      </Element>
      <Element name="works">
        <Works />
      </Element>
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
    </div>
  );
}

export default App;
