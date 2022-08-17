// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

export default {
  title: 'Componentes|Galería/Lista',
  decorators: [withA11y]
};

export const Grilla1 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-1-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};

export const Grilla2 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-2-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};

export const Grilla3 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-3-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};

export const Grilla4 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-4-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};

export const Grilla5 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-5-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/5.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};

export const Grilla6 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-6-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/5.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};

export const Grilla7 = (): JSX.Element => {
  return (
    <div className="gallery-grid-container">
      <div className="gallery-grid grid-with-7-images">
        <div className="gallery-grid-item author">
          <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/5.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
        <div className="gallery-grid-item author">
          <img src="gallery/4.jpg" alt="Texto alternativo de la imagen" />
          <p>Fotos GCBA</p>
        </div>
      </div>
    </div>
  );
};
