import './App.css';
import Header from './components/header.js';
import FirstPage from './components/first_page.js';
import Works from './components/works.js';
import AboutMe from './components/aboutMe.js';
import Skills from './components/Skills.js';
import { Element } from 'react-scroll';
import Extra from './components/Extra.js';
import Contact from './components/contact.js';
import Footer from './components/Footer.js';
import Temp from "./components/Temp.js";

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
      <Element name="Achivements">
        <Extra />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Element name="temp">
        <Temp />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
