import "./App.css";
import { Button } from "./components/ui/button";
import { AnimatedPinDemo } from "./components/AnimatedPin";
import Home from "./components/ChatBot";
import Navbar from "./components/Navbar";
import { BackgroundBeamsDemo } from "./components/Heading";

function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-4xl">Welcome to The Indian Museum</h1>
      {/* <BackgroundBeamsDemo /> */}
      <Home />
      {/* <Button>Hello</Button>
      <AnimatedPinDemo></AnimatedPinDemo> */}
    </>
  );
}

export default App;
