// src/Nav.js
import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-list">
          <li><a href="mainpage2.html" target="_blank" rel="noreferrer">Início</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="availability.html" target="_blank" rel="noreferrer">Junta-te a nós!</a></li>
          <li><a href="#contato">Contatos</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
