// Base
import React from 'react';
import './Gallery.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

export default {
  title: 'Componentes|Galería',
  decorators: [withA11y]
};

export const Galeria = (): JSX.Element => {
  return (
    <div>
      <div
        className="modal modal-carousel d-block"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
        id="modalGallery">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <a href="#" className="modal-carousel-close" data-dismiss="modal">
              Cerrar ventana
            </a>

            <div id="modalGalleryControls" className="carousel" data-ride="carousel" data-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="gallery/1.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                  <div className="carousel-caption">
                    <div className="row mb-4">
                      <div className="col">
                        <small>Autor de la imagen.</small>
                      </div>
                      <div className="col text-right">
                        <small>Imagen 1/3</small>
                      </div>
                    </div>
                    <h5 className="h2">Título de la imagen 1.</h5>
                    <p>
                      Descripción o epígrafe de la imagen. Máximo de 2 líneas.
                      <br />
                      Lorem impsum dolor sit amet, consetetir sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="gallery/2.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                  <div className="carousel-caption">
                    <div className="row mb-4">
                      <div className="col">
                        <small>Autor de la imagen.</small>
                      </div>
                      <div className="col text-right">
                        <small>Imagen 2/3</small>
                      </div>
                    </div>
                    <h5 className="h2">Título de la imagen 2.</h5>
                    <p>
                      Descripción o epígrafe de la imagen. Máximo de 2 líneas.
                      <br />
                      Lorem impsum dolor sit amet, consetetir sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="gallery/3.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                  <div className="carousel-caption">
                    <div className="row mb-4">
                      <div className="col">
                        <small>Autor de la imagen.</small>
                      </div>
                      <div className="col text-right">
                        <small>Imagen 3/3</small>
                      </div>
                    </div>
                    <h5 className="h2">Título de la imagen 3.</h5>
                    <p>
                      Descripción o epígrafe de la imagen. Máximo de 2 líneas.
                      <br />
                      Lorem impsum dolor sit amet, consetetir sadipscing elitr, sed diam nonumy eirmod
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
  );
};

Galeria.story = {
  name: 'Galería'
};

export const Interactivo = (): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="gallery-grid-container">
            <div className="gallery-grid gallery-max-3">
              <a href="gallery/1.jpg" className="gallery-grid-item" data-toggle="modal" data-target="#modalGallery">
                <img src="gallery/1.jpg" alt="Texto alternativo de la imagen" />
              </a>
              <a href="gallery/2.jpg" className="gallery-grid-item" data-toggle="modal" data-target="#modalGallery">
                <img src="gallery/2.jpg" alt="Texto alternativo de la imagen" />
              </a>
              <a href="gallery/3.jpg" className="gallery-grid-item" data-toggle="modal" data-target="#modalGallery">
                <img src="gallery/3.jpg" alt="Texto alternativo de la imagen" />
              </a>
            </div>
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
                        <small>Autor de la imagen.</small>
                      </div>
                      <div className="col text-right">
                        <small>Imagen 1/3</small>
                      </div>
                    </div>
                    <h5 className="h2">Título de la imagen 1.</h5>
                    <p>
                      Descripción o epígrafe de la imagen. Máximo de 2 líneas.
                      <br />
                      Lorem impsum dolor sit amet, consetetir sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="gallery/2.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                  <div className="carousel-caption">
                    <div className="row mb-4">
                      <div className="col">
                        <small>Autor de la imagen.</small>
                      </div>
                      <div className="col text-right">
                        <small>Imagen 2/3</small>
                      </div>
                    </div>
                    <h5 className="h2">Título de la imagen 2.</h5>
                    <p>
                      Descripción o epígrafe de la imagen. Máximo de 2 líneas.
                      <br />
                      Lorem impsum dolor sit amet, consetetir sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="gallery/3.jpg" className="d-block w-100" alt="Texto alternativo de la imagen" />
                  <div className="carousel-caption">
                    <div className="row mb-4">
                      <div className="col">
                        <small>Autor de la imagen.</small>
                      </div>
                      <div className="col text-right">
                        <small>Imagen 3/3</small>
                      </div>
                    </div>
                    <h5 className="h2">Título de la imagen 3.</h5>
                    <p>
                      Descripción o epígrafe de la imagen. Máximo de 2 líneas.
                      <br />
                      Lorem impsum dolor sit amet, consetetir sadipscing elitr, sed diam nonumy eirmod
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
  );
};
