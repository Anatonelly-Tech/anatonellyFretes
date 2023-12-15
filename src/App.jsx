import { useState } from "react";
import Header from "../src/components/Header.jsx";
import NavbarContainer from "../src/components/NavbarContainer.jsx";
import "../src/styles/App.css";
function App() {
  const [header, setHeader] = useState({
    titulo: "Central do Assinante",
    subtitulo: "Home",
    username: "Jorge Luiz Fana Guedes",
    role: "Admin",
  });

  return (
    <div className="App">
      <NavbarContainer />
      <Header header={header} />
    </div>
  );
}

export default App;
