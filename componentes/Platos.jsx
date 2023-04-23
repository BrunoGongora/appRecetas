import { useState } from "react";
import Recetas from "./Recetas";
import Pescados from "./Pescados";
import Pasta from "./Pasta";
import Carnes from "./Carnes";

const Platos = () => {

    const [categoria, setCategoria] = useState("Todas");

  let contenidoCategoria;

  switch (categoria) {
    case "Todas":
      contenidoCategoria = <Recetas />;
      break;
    case "Pescados":
      contenidoCategoria = <Pescados />;
      break;
    case "Pasta":
      contenidoCategoria = <Pasta />;
      break;
    case "Carnes":
      contenidoCategoria = <Carnes />;
      break;
    default:
      contenidoCategoria = <Recetas />;
      break;
  }

  return (
    <div>
        <div className="botones_recetas">
            <button onClick={() => setCategoria("todas")}>Ver todo (25)</button>
            <button onClick={() => setCategoria("Pescados")}>Pescado (28)</button>
            <button onClick={() => setCategoria("Pasta")}>Pasta (9)</button>
            <button onClick={() => setCategoria("Carnes")}>Carnes (42)</button>
      </div>
      {categoria === 'todas' && <Recetas />}
      {categoria !== 'todas' && contenidoCategoria}
    </div>
  )
}

export default Platos