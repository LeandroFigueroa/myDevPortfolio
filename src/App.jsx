import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contatc from "./components/contact/Contatc";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Works />
        <Portfolio />
        <Contatc />

      </div>

    </div>
  );
}

export default App;
