// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

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
