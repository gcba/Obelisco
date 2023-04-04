// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Gallery, GridImage } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Galería',
  decorators: [withA11y]
};

export const Galeria = (): JSX.Element => {
  return (
    <div>
      <Gallery show={true} total={3} />
    </div>
  );
};

Galeria.story = {
  name: 'Galería'
};

export const Demo = (): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="gallery-grid-container">
            <GridImage total={3} interactive={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
