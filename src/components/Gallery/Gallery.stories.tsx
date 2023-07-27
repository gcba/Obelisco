// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { GalleryContainer, GridImage } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Galería',
  decorators: [withA11y]
};

export const Gallery = (): JSX.Element => {
  return (
    <>
      <GalleryContainer show={true} total={3} />
    </>
  );
};

Gallery.story = {
  name: 'Galería'
};

export const Demo = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div className="storybook__container-grid">
              <GridImage total={3} interactive={true}></GridImage>
            </div>
          </div>
        </div>
        <GalleryContainer total={3} />
      </div>
    </>
  );
};
