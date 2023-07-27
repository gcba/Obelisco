// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { GridImage } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Galería/Grillas',
  decorators: [withA11y]
};

// Función para crear los componentes
const createGridComponent = (name: string, total: number) => {
  const Component = () => (
    <div className="storybook__container-grid">
      <GridImage total={total} />
    </div>
  );

  Component.story = {
    name
  };

  return Component;
};

// Creación de los componentes utilizando la función
export const SieteImagenes = createGridComponent('Siete imágenes', 7);
export const SeisImagenes = createGridComponent('Seis imágenes', 6);
export const CincoImagenes = createGridComponent('Cinco imágenes', 5);
export const CuatroImagenes = createGridComponent('Cuatro imágenes', 4);
export const TresImagenes = createGridComponent('Tres imágenes', 3);
export const DosImagenes = createGridComponent('Dos imágenes', 2);
export const UnaImagen = createGridComponent('Una imagen', 1);
