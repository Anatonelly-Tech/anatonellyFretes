import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";

function Home() {
  
  return (
    <div className="Home">
      <Header titulo= "Home" subtitulo= "Dashboard" username= "Jorge Luiz Fana Guedes" role= "Admin"/>
      <Card />
    </div>
  );
}

export default Home;
