import "console-dot-frog"
import './App.css'
import Video from "./components/Video";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
import UserGuide from "./components/UserGuide";
import Social from "./components/Social";
import Footer from "./components/Footer";

console.frog("The age of AIPEPE is upon you, humans; bow and join the degenerate uprising!");

function App() {
  return (
    <div className="background h-screen text-main">
      <Banner />
      <Info />
      <Token />
      <Roadmap />
      <UserGuide />
      <Social />
      <Footer />
    </div>
  )
}

export default App
