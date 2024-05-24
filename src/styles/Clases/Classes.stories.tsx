// Base
import React from 'react';
import './Classes.stories.scss';
// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Estilos|Clases',
  decorators: [withA11y]
};

export const SizesAndSpacing = (): JSX.Element => {
  return (
    <div className="storybook__container-grid">
      <div className="container"></div>
    </div>
  );
};

SizesAndSpacing.story = { name: 'Tamaños y Espaciados' };

export const Columns = (): JSX.Element => {
  return (
    <div className="storybook__container-grid">
      <div className="container"></div>
    </div>
  );
};

Columns.story = { name: 'Columnas' };

export const AlignAndOrder = (): JSX.Element => {
  return (
    <div className="storybook__container-grid">
      <div className="container"></div>
    </div>
  );
};

AlignAndOrder.story = { name: 'Align y Order' };

export const Border = (): JSX.Element => {
  return (
    <div className="storybook__container-grid">
      <div className="container"></div>
    </div>
  );
};

Border.story = { name: 'Bordes' };
