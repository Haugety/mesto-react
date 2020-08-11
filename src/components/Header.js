import React from "react";
import Logo from '../images/mesto-logo.svg';

function Header() {
  return (

    <header className="header">
      <img src={Logo} alt="Логотип проекта «Место Россия»" className="header__logo" />
    </header>

  );
}

export default Header;
