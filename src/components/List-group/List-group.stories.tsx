// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import './List-group.stories.scss';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const Acceso = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item">
        Datos de mi cuenta
      </a>
      <a href="#" className="list-group-item hover">
        Opciones de seguridad
      </a>
      <a href="#" className="list-group-item focus">
        Datos de mi cuenta
      </a>
      <a href="#" className="list-group-item hover focus">
        Opciones de seguridad
      </a>
      <a href="#" className="list-group-item list-group-item-logout">
        Cerrar sesión
      </a>
    </div>
  </div>
);

export const AccesoPequeno = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group list-group-sm">
      <a href="#" className="list-group-item">
        Datos de mi cuenta
      </a>
      <a href="#" className="list-group-item">
        Opciones de seguridad
      </a>
      <a href="#" className="list-group-item list-group-item-logout">
        Cerrar sesión
      </a>
    </div>
  </div>
);
AccesoPequeno.story = { name: 'Acceso Pequeño' };

export const Categorias = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group list-group-sm">
      <h4 className="list-group-title">Seleccioná un trámite</h4>
      <p className="list-group-category">Categoría 1</p>
      <a href="#" className="list-group-item">
        Opción 1
      </a>
      <a href="#" className="list-group-item">
        Opción 2
      </a>
      <a href="#" className="list-group-item">
        Opción 3
      </a>

      <p className="list-group-category">Categoría 2</p>
      <a href="#" className="list-group-item">
        Opción 1
      </a>
      <a href="#" className="list-group-item">
        Opción 2
      </a>
      <a href="#" className="list-group-item">
        Opción 3
      </a>
    </div>
  </div>
);
Categorias.story = { name: 'Categorías' };
