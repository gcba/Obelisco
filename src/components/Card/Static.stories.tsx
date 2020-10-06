// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Tarjeta/Estáticas + contenido accionable',
  decorators: [withA11y]
};


export const EstaticAction = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Jefatura de Gobierno</h5>
          <h6 className="card-subtitle mb-2">Ejes principales</h6>
          <a href="#" className="card-link-btn">Jefe de Gobierno</a>
          <a href="#" className="card-link-btn">Vicejefatura</a>
          <a href="#" className="card-link-btn">Compromisos</a>
          <a href="#" className="card-link-btn">BA Elige</a>
          <hr className="line"></hr>
          <h6 className="card-subtitle mb-2">Horacio Rodriguez Larreta</h6>
          <span className="text-muted">Jefe de Gobierno</span>
        </div>
      </div>
    </div>
  );
};
EstaticAction.story = { name: 'Estáticas + contenido accionable'};