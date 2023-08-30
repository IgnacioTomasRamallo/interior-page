import React from 'react';
import './card.css';
import img2 from '../../../img/photo2.png';

export const Card = () => {
  return (
    <div className='contenedor-card'>
        {/* 
            img h3 p

            h2
        
        */}
        <div className='contenedor-titulos'>
            <div>
                <img src={img2} className='imagen-card'/>
            </div>
            <div>
                <h3 className='card-titulo'>Aliza Webber</h3>
                <p className='card-parrafo'>Interior designer</p>
            </div>
        </div>
        <h2 className='card-relleno'>Designed in 2020 by Aliza Webber</h2>
    </div>
  )
}
