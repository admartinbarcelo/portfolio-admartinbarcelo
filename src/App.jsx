import './App.css'
import Header from './components/header/Header';
import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import Work from './components/Portfolio/Work';
import Home from './components/home/Home';
// import Qualification from './components/qualification/Qualification';
// import ScrollUp from './components/scrollup/ScrollUp';
// import Services from './components/services/Services';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header/>

      <main className="main">
      <Home/>
      <About/>
      <Skills/>
      </main>
    </>
    
  )
}

export default App;
