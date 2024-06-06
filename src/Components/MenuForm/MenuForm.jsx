import React from 'react';
import './MenuForm.css';
const Menu = () => {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">LOGO</a>
        <nav className="navbar">
          <a href="">Inicio</a>
          <a href="">Grabacion</a>
          <a href="">Consultar Historias</a>
          <a href="">Registrar Paciente</a>

        </nav>
      </header>
    </div>
  );
};

export default Menu;
