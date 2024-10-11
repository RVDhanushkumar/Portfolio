import './App.css';
import Header from './components/header.js';
import FirstPage from './components/first_page.js';
import Works from './components/works.js';
import AboutMe from './components/aboutMe.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstPage />
      <Works />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
