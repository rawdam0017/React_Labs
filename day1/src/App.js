// import logo from './logo.svg';
// import './App.css';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
       <Hero />
    <AboutMe/>
    <Skills/>
    {/* <Portfolio/> */}
    <Footer/>
    </div>
  );
}

export default App;
