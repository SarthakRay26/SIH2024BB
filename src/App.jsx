import "./App.css";
import { Button } from "./components/ui/button";
import { AnimatedPinDemo } from "./components/AnimatedPin";
import Home from "./components/ChatBot";
import Navbar from "./components/Navbar";
import { BackgroundBeamsDemo } from "./components/Heading";
import NavbarF from "./components/NavFloat";
import MuseumSection from "./components/Museum Section";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery.jsx";
import History from "./components/History.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  return (
    <div>
      <NavbarF />
      <MuseumSection />
      <Events />
      <Gallery />
      <History />
      <Footer />
      {/* <Navbar /> */}
      {/* <h1 className="text-4xl">Welcome to The Indian Museum</h1> */}
      {/* <BackgroundBeamsDemo /> */}
      {/* <Home /> */}
      {/* <Button>Hello</Button> */}
      {/* <AnimatedPinDemo></AnimatedPinDemo> */}
    </div>
  );
}

export default App;
