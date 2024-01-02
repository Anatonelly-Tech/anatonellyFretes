import "../styles/components/Header.css";
import IconUserHeader from "../assets/Icons/IconUserHeader.svg";

const Header = ({ titulo, subtitulo, username, role }) => {

  return (
    <header>
      <div className="TituloSubtitulo">
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
      </div>
      <div className="UsernameRoleIcon">
        <img src={IconUserHeader} alt="IconUserHeader" draggable="false" />
        <a href="#" draggable="false">
          <div className="UsernameRole">
            <h2>{username}</h2>
            <h3>{role}</h3>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
