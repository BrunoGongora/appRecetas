import { useEffect, useState } from "react"
import axios from 'axios';

const Categorias = () => {

    const [categoria, setCategoria] = useState([]);

    useEffect(()=>{
        let getCategorias = async () => {
          const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
          let resultado = await axios.get(url);
          setCategoria(resultado.data.categories);
        }
        getCategorias();
      }, [])

  return (
    <div className="categorias_Seccion">
        <h2>Categorias</h2>
        {categoria.length === 0 && <p>Cargando...</p>}
        <div className="lista_categorias">
            {
                categoria.map((nombreCategoria, index) => {
                    return(
                        <div key={index}>
                            <p>{nombreCategoria.strCategory}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Categorias