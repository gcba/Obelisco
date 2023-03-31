// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccesoDescripcionComponent, AccesosBordeComponent, AccesoIconoComponent, AccessTypes } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const AccesosConBorde = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccesosBordeComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccesosConBorde.story = {
  name: 'Accesos con borde'
};

export const AccesoConDescripcion = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccesoDescripcionComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccesoConDescripcion.story = {
  name: 'Accesos con descripción'
};

export const AccesosConIcono = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccesoIconoComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccesosConIcono.story = {
  name: 'Accesos con ícono'
};

export const AccesosTamanos = (): JSX.Element => (
  <div className="list-group-container-sizes">
    <div className="list-group">
      <a href="#" className="list-group-item">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso chico</span>
      </a>
    </div>
  </div>
);

AccesosTamanos.story = {
  name: 'Tamaños de accesos'
};
