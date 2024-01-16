// Base
import React from 'react';
import './ListLink.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Listas/Lista de enlaces',
  decorators: [withA11y]
};

export const ListLink = (): JSX.Element => (
  <div className="storybook__container-list-link">
    <div className="list-link">
      <h3 className="list-link-title">Este es el título de una lista de enlaces</h3>
      <a href="#" target="_blank" rel="noreferrer">
        Enlace predeterminado
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        Enlace predeterminado
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        Enlace predeterminado
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        Enlace predeterminado
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        Enlace predeterminado
      </a>
    </div>
  </div>
);
ListLink.story = { name: 'Lista de enlaces' };
