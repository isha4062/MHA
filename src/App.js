import "./App.css";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Character } from "./components/char";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />}/>
        <Route path="/characters" element = {<Character />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
