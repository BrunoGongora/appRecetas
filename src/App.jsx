
import './App.css'
import Header from '../componentes/Header';
import Banner from '../componentes/Banner';
import Categorias from '../componentes/Categorias';
import Buscador from '../componentes/Buscador';
import Platos from '../componentes/Platos';


function App() {



  return (
    <>
      <div className='main_section'>
        <div className='seccion_derecha'>
          <Header />
          <Banner />
          <Buscador />
          <Platos />
        </div>
        <div className='seccion_izquierda'>
          <Categorias />
        </div>
      </div>
      
    </>
  )
}

export default App
