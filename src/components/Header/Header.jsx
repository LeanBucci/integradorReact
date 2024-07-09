import * as s from "./HeaderStyled";

function Header() {
  return (
    <>
      <s.Header>
        <s.Logo>
          <img src="./public/Imagenes/Logo1.jpg" alt="logo" />
        </s.Logo>
        <s.Title>
          <a href="#">
            <span>ROYAL HOTEL</span>
          </a>
        </s.Title>
        <s.NavButtons>
          <a href="#">Iniciar Sesión</a>
          <a href="#">Registrarse</a>
        </s.NavButtons>
      </s.Header>
    </>
  );
}

export default Header;
