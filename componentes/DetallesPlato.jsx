import Recetas from "./Recetas"


const DetallesPlato = ({detallesReceta}) => {
  return (
    <div >
        <div style={{ padding: '2rem 5rem' }} className="detalles_contenedor_elementos">
            <img style={{ width: '100%', height: '30rem', objectFit: 'cover' }} src={detallesReceta?.strMealThumb} alt="" />
            <p style={{ fontSize: '2rem', color: 'gray'}}>{Math.floor(Math.random() * (60 - 1 + 1)) + 1} Minutos de Preparación</p>
            <div>
                <h4 style={{ fontSize: '2.5rem', color: 'orangered'}}>{detallesReceta?.strMeal}</h4>
                <p>{Math.floor(Math.random() * (32 - 1 + 1)) + 1} Vistas</p>
            </div>
            <h4 style={{fontSize: '1.2rem'}}>Instrucciones de Preparacion</h4>
            <p style={{color: 'orange', fontSize: '1.1rem'}}>{detallesReceta?.strInstructions}</p> <br />
            
            <h4 style={{fontSize: '1.2rem'}}>Ingredientes</h4>
            <ul style={{color: 'orange', fontSize: '1.1rem'}}>
                <li>{detallesReceta?.strIngredient1}</li>
                <li>{detallesReceta?.strIngredient2}</li>
                <li>{detallesReceta?.strIngredient3}</li>
                <li>{detallesReceta?.strIngredient4}</li>
                <li>{detallesReceta?.strIngredient5}</li>
            </ul>

        </div>

    </div>
  )
}

export default DetallesPlato