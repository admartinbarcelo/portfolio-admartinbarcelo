import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Work from "./components/Portfolio/Work";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import FollowMouse from "./components/mouse/FollowMouse";
import Switch from "./components/switch/Switch";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Work />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
        <FollowMouse />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
