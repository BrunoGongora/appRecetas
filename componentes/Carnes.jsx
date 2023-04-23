import axios from "axios";
import { useEffect, useState } from "react";
import DetallesPlato from "./DetallesPlato";
import ReactDOM from 'react-dom';


const Carnes = () => {

    const [carne, setCarne] = useState([])

    const [recetaId, setRecetaId] = useState([])

    const handleClick = async (id) => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        try {
          let resultado = await axios.get(url);
          const recetaSeleccionada = resultado.data.meals[0];
          const nuevaVentana = window.open();
          ReactDOM.render(<DetallesPlato detallesReceta={recetaSeleccionada} />, nuevaVentana.document.body);
          setRecetaId(recetaSeleccionada);
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        const getCarne = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
            const resultado = await axios.get(url);
            setCarne(resultado.data.meals)
        }
        getCarne();
    }, [])

  return (
    <div>
        <div className="recetas_container">
                {
                    carne.map((carnePlato, index) => {
                        return(
                            <div className="box_receta" key={index}>
                                <img src={carnePlato.strMealThumb} alt="" />
                                <div className="hearth">
                                <button className="nombre_plato" onClick={() => handleClick(carnePlato.idMeal)}>
                                    <h5>{carnePlato.strMeal}</h5>
                                </button>
                                    <img src="../src/assets/like.png" alt="" />
                                </div>
                                <div className="calificacion_Receta">
                                    <img src="../src/assets/estrellas.jpg" alt="" />
                                    <p>20 Vistas</p>
                                </div>
                                <div className="hastag">
                                    <p>Comida</p>
                                    <p>Receta</p>
                                </div>
                                <div>
                                    <p>Tiempo de Preparacion: 20 Minutos</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {recetaId && <DetallesPlato recetaDetalles={recetaId} /> }
    </div>
  )
}

export default Carnes