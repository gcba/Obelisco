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
            <div className="gallery-grid-container">
              <GridImage total={3} interactive={true}></GridImage>
            </div>
          </div>
        </div>
        <div className="modal modal-carousel" data-backdrop="static" tabIndex={-1} role="dialog" id="modalGallery">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <a className="modal-carousel-close" data-dismiss="modal">
                Cerrar ventana
              </a>
              <div id="modalGalleryControls" className="carousel" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="gallery/1.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                    <div className="carousel-caption">
                      <div className="row mb-4">
                        <div className="col">
                          <span className="text-xs">Autor de la imagen.</span>
                        </div>
                        <div className="col text-right">
                          <span className="text-xs">Imagen 1/3</span>
                        </div>
                      </div>
                      <h5 className="h2">Título de la imagen 1.</h5>
                      <p>
                        Descripción o epígrafe de la imagen.
                        <br />
                        Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="gallery/2.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                    <div className="carousel-caption">
                      <div className="row mb-4">
                        <div className="col">
                          <span className="text-xs">Autor de la imagen.</span>
                        </div>
                        <div className="col text-right">
                          <span className="text-xs">Imagen 2/3</span>
                        </div>
                      </div>
                      <h5 className="h2">Título de la imagen 2.</h5>
                      <p>
                        Descripción o epígrafe de la imagen.
                        <br />
                        Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="gallery/3.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                    <div className="carousel-caption">
                      <div className="row mb-4">
                        <div className="col">
                          <span className="text-xs">Autor de la imagen.</span>
                        </div>
                        <div className="col text-right">
                          <span className="text-xs">Imagen 3/3</span>
                        </div>
                      </div>
                      <h5 className="h2">Título de la imagen 3.</h5>
                      <p>
                        Descripción o epígrafe de la imagen.
                        <br />
                        Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-target="#modalGalleryControls"
                  data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-target="#modalGalleryControls"
                  data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
