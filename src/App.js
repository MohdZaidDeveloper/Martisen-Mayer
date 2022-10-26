import "./App.css";
import About from "./Components/About/About";
import Brands from "./Components/Brands/Brands";
import Bullshit from "./Components/Bullshit/Bullshit";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Video from "./Components/Video/Video";

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Video/>
   <About/>
   <Brands/>
   <Services/>
   <Bullshit/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
