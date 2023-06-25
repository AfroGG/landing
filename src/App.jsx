import "console-dot-frog"
import './App.css'
import 'aos/dist/aos.css';
import Info from "./components/Info";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
import UserGuide from "./components/UserGuide";
import Social from "./components/Social";
import Footer from "./components/Footer";
import VideoBanner from './components/VideoBanner.jsx';
import Aos from 'aos';
import {useEffect} from 'react';

console.frog("The age of AIPEPE is upon you, humans; bow and join the degenerate uprising!");

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="background h-screen text-main">
      <VideoBanner />
      <Info />
      {/* 
      <Token />
      <UserGuide />
      <Roadmap />
      <Social />
       */}
      <Footer />
    </div>
  )
}

export default App
