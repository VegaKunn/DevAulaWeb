import { useState } from "react";
import "./CompPaginas/estilo.css";
import Header from "./Componetes/HeaderGlobal";
import PagAula from "./CompPaginas/PagAula";

export default function App() {
  return (
    <div className="conteinerGrid">
      <Header />
      <PagAula />
    </div>
  );
}
