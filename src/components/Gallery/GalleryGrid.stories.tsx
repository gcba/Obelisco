// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Galería/Grillas',
  decorators: [withA11y]
};

export const SieteImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-7">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/5.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

SieteImagenes.story = {
  name: 'Siete imágenes'
};

export const SeisImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-6">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/5.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

SeisImagenes.story = {
  name: 'Seis imágenes'
};

export const CincoImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-5">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/5.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

CincoImagenes.story = {
  name: 'Cinco imágenes'
};

export const CuatroImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-4">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

CuatroImagenes.story = {
  name: 'Cuatro imágenes'
};

export const TresImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-3">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

TresImagenes.story = {
  name: 'Tres imágenes'
};

export const DosImagenes = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-2">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
        <div className="gallery-grid-item">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

DosImagenes.story = {
  name: 'Dos imágenes'
};

export const UnaImagen = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid gallery-max-1">
        <div className="gallery-grid-item">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
        </div>
      </div>
    </div>
  );
};

UnaImagen.story = {
  name: 'Una imagen'
};
