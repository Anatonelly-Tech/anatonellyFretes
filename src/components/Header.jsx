import "../styles/components/Header.css";
import IconUserHeader from "../assets/Icons/IconUserHeader.svg";

const Header = () => {
  const [header] =[
    {
      titulo: "Home",
      subtitulo: "Dashboard",
      username: "Jorge Luiz Fana Guedes",
      role: "Admin",
    }
  ];
  
  return (
    <header>
      <div className="TituloSubtitulo">
        <h2>{header.titulo}</h2>
        <h3>{header.subtitulo}</h3>
      </div>
      <div className="UsernameRoleIcon">
        <img src={IconUserHeader} alt="IconUserHeader" draggable="false" />
        <a href="#" draggable="false">
            <div className="UsernameRole">
              <h2>{header.username}</h2>
              <h3>{header.role}</h3>
            </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
