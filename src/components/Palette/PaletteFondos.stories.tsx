// Base
import React from 'react';
import './Palette.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Palette } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes|Paleta de colores',
  component: Palette,
  decorators: [withA11y]
};

const paletteFondos = [
  {
    name: 'Blanco',
    level: 'Fondos Primarios',
    hex: '#FFFFFF',
    className: 'blanco'
  },
  {
    name: 'Grisulado 1',
    level: 'Fondos Secundarios',
    hex: '#F3F6F9',
    className: 'grisulado-10'
  }
];

export const Fondos = (): JSX.Element => (
  <div className="palette-container">
    <Palette items={paletteFondos} />
  </div>
);
