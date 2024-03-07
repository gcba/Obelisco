// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Migas de pan',
  decorators: [withA11y]
};

export const Breadcrumb = (): JSX.Element => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Inicio</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Página intermedia con mucho mucho texto</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Intermedia</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Página anterior</a>
      </li>
    </ol>
  </nav>
);

Breadcrumb.story = {
  name: 'Migas de pan'
};
