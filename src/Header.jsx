import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Meu Site</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
