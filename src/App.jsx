import { useState } from 'react'
import Header from './components/Header'
import styled from '@emotion/styled';
import Formulario from './components/formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion : 0,
  });

  const {cotizacion,datos}= resumen;

  const [cargando, guardarCargando] = useState(false)



const Contenedor = styled.div`
 max-width: 600px;
 margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;
  return (

    <Contenedor>
        <Header
          titulo='Cotizador de Seguros'
        />

        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />
              {cargando ?( <Spinner/>) : null}
          {datos ?(<Resumen 
            datos={datos}
          /> ): null}

            
            {!cargando ? 
            (
              <Resultado
                cotizacion={cotizacion}
              />

            ) : null}
  	     
          
          
        </ContenedorFormulario>

    </Contenedor>
    
  )
}

export default App
