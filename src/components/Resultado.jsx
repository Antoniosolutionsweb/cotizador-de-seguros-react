import React from 'react'
import styled from '@emotion/styled';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`;
const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;
const Resultado = ({cotizacion}) => {
  return (
    (cotizacion === 0) ? <Mensaje>Elige una marca, Años y tipo de seguro</Mensaje>
                       :  (
                            <ResultadoCotizacion>

                                <TransitionGroup
                                    component='span'
                                    className='resultado'
                                >
                                    <CSSTransition
                                        classNames='resultado'
                                        key={cotizacion}
                                        timeout={{ enter:500, exit:500 }}
                                    >
                                        <TextoCotizacion>El total a pagar es <span>${cotizacion} </span> </TextoCotizacion>
                                    </CSSTransition>
                                </TransitionGroup>
                                
                            </ResultadoCotizacion>
                          ) 
                        
    )                    
}
Resultado.prototype= {
    cotizacion:PropTypes.number.isRequired
}

export default Resultado
