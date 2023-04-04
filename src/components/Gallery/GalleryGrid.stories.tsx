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

export const SieteImagenes = (): JSX.Element => (
  <>
    <div className="gallery-grid-container">
      <GridImage />
    </div>
  </>
);

SieteImagenes.story = {
  name: 'Siete imágenes'
};

export const SeisImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <GridImage total={6} />
    </div>
  );
};

SeisImagenes.story = {
  name: 'Seis imágenes'
};

export const CincoImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <GridImage total={5} />
    </div>
  );
};

CincoImagenes.story = {
  name: 'Cinco imágenes'
};

export const CuatroImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <GridImage total={4} />
    </div>
  );
};

CuatroImagenes.story = {
  name: 'Cuatro imágenes'
};

export const TresImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <GridImage total={3} />
    </div>
  );
};

TresImagenes.story = {
  name: 'Tres imágenes'
};

export const DosImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <GridImage total={2} />
    </div>
  );
};

DosImagenes.story = {
  name: 'Dos imágenes'
};

export const UnaImagen = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <GridImage total={1} />
    </div>
  );
};

UnaImagen.story = {
  name: 'Una imagen'
};
