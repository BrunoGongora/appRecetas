import axios from "axios";
import { useEffect, useState } from "react"
import DetallesPlato from "./DetallesPlato";
import ReactDOM from 'react-dom';

const Recetas = () => {

    const [receta, setReceta] = useState([]);
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




    useEffect(()=>{
        const getReceta = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
            let resultado = await axios.get(url);
            setReceta(resultado.data.meals);
        }
        getReceta();
    }, [])
  return (
    <div>
        <div className="recetas_container">
            {
                receta.map((recetaNombre, index) => {
                    return(
                        <div className="box_receta" key={index}>
                            <img src={recetaNombre.strMealThumb} alt="" />
                            <div className="hearth">
                                <button className="nombre_plato" onClick={() => handleClick(recetaNombre.idMeal)}>
                                    <h5>{recetaNombre.strMeal}</h5>
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

export default Recetas