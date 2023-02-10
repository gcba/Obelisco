// Base
import React from 'react';
import './List.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Listas',
  decorators: [withA11y]
};

export const ListaInformativa = (): JSX.Element => {
  return (
    <>
      {/* Destacado y descripcion */}
      <div className="lists-wrapper">
        <ul className="list-informative">
          <li className="list-text-icon">
            <span className="material-icons-round list-icon">check</span>
            <h5>Esta es la información destacada de la lista</h5>
          </li>
          <li className="list-text">Esta es la información de una línea de la lista</li>
        </ul>
      </div>
      {/* Destacado y enlace */}
      <div className="lists-wrapper">
        <ul className="list-informative">
          <li className="list-text-icon">
            <span className="material-icons-round list-icon">check</span>
            <span>
              Esta es la información de una línea{' '}
              <a className="" href="#" target="_blank" rel="noreferrer">
                con enlace
              </a>
            </span>
          </li>
        </ul>
      </div>
      {/* Bullet y descripcion */}
      <div className="lists-wrapper">
        <ul className="list-informative">
          <li className="list-text-icon">
            <span className="material-icons-round list-icon-bullet">circle</span>
            <span>Tener DNI vigente con Domicilio en Ciudad Autónoma de Buenos Aires</span>
          </li>
        </ul>
      </div>
    </>
  );
};
