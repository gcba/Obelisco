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

const paletteTextos = [
  {
    name: 'Grisulado 90',
    level: 'Texto Primario',
    hex: '#38485C',
    className: 'grisulado-900'
  },
  {
    name: 'Grisulado 70',
    level: 'Texto Secundario',
    hex: '#505E70',
    className: 'grisulado-700'
  },
  {
    name: 'Grisulado 30',
    level: 'Texto deshabilitado',
    hex: '#9EAAB8',
    className: 'grisulado-300'
  },
  {
    name: 'Celeste 50',
    level: 'Texto Enlace',
    hex: '#007BC7',
    className: 'celeste-50'
  }
];

export const Textos = (): JSX.Element => (
  <div className="palette-container">
    <Palette items={paletteTextos} />
  </div>
);
