// Base
import React from 'react';
import './Palette.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Palette, PaletteDetailsColor } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes|Paleta de colores',
  component: PaletteDetailsColor,
  decorators: [withA11y]
};

const paletteDetallesCromaticos = [
  {
    hex: '#E6EBF0',
    className: 'grisulado-10'
  },
  {
    hex: '#F54789',
    className: 'magenta'
  },
  {
    hex: '#9B59B6',
    className: 'violeta'
  },
  {
    hex: '009AFD',
    className: 'celeste'
  },
  {
    hex: '#FFDB2E',
    className: 'amarillo'
  },
  {
    hex: '#D1D8E0',
    className: 'grisulado-20'
  },
  {
    hex: '#18B596',
    className: 'cyan'
  },
  {
    hex: '#88BF48',
    className: 'verde'
  },
  {
    hex: '#F39C12',
    className: 'naranja'
  },
  {
    hex: '#E74C3C',
    className: 'rojo'
  }
];

export const DetallesCromaticos = (): JSX.Element => (
  <div className="palette-container">
    <PaletteDetailsColor items={paletteDetallesCromaticos} />
  </div>
);
