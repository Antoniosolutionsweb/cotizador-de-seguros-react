import React from 'react'
import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers/cotizador';
import PropTypes from 'prop-types'


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca,year,plan}= datos;
  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>

        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Año del auto: {year}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        
      </ul>
    </ContenedorResumen>
  )
}
Resumen.prototype = {
  datos: PropTypes.object.isRequired
}

export default Resumen
