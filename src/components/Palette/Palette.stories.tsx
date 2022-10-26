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

const paletteInformation = [
  {
    name: 'Grisulado 90',
    level: 'Texto Primario',
    hex: '#38485C'
  },
  {
    name: 'Grisulado 70',
    level: 'Texto Secundario',
    hex: '#505E70'
  },
  {
    name: 'Grisulado 30',
    level: 'Texto deshabilitado',
    hex: '#9EAAB8'
  },
  {
    name: 'Celeste 50',
    level: 'Texto Enlace',
    hex: '#007BC7'
  }
];

export const PaletaDeColores = (): JSX.Element => (
  <div className="palette-container">
    <Palette items={paletteInformation}></Palette>
  </div>
);
