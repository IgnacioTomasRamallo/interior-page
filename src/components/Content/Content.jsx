import React from 'react';
import img1 from '../../img/photo1.png';
import './content.css';
import { Card } from './components/Card';
export const Content = () => {
  return (
    <div className='content-text'>
        <div className='contenedor-texto'>
            <h1>Modern interior</h1>
            <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
            <a href='#'>Read more <span>flecha</span></a>
        </div>
        <div className='container-img'>
            <img src={img1} alt='hotel'/>
        </div>
        <div className='card-container'>
          <Card />
        </div>
    </div>
  )
}
