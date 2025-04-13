import "./App.css";
import Navbar from "./components/Navbar";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Portfolio />
      <Education />
    </>
  );
}

export default App;
