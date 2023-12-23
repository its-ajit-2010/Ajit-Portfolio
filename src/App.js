import About from "../src/components/About/About";
import Expirience from "../src/components/Expirience/Expirience";
import Header from "../src/components/Header/Header";
import Navbar from "../src/components/Navbar/Navbar";
import Services from "../src/components/Services/Services";
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     <About/>
     <Expirience/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
