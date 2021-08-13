import React from "react";

export default function Header() {
  return (
    <header className="space" id="header">
      <nav>
        <ul className="menuInicial">
          <a href="/index.html">
            <li className="liNav">Inicio</li>
          </a>
          <a href="/macetes.html">
            <li className="liNav">macetes</li>
          </a>
          <a href="/aulas.html">
            <li className="liNav">Aulas</li>
          </a>
          <a href="/artigos.html">
            <li className="liNav">Artigos</li>
          </a>
          <a href="/tutoriais.html">
            <li className="liNav">Tutoriais</li>
          </a>
          <a href="/projetos.html">
            <li className="liNav">projetos</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
