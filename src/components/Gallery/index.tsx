import classNames from 'classnames';
import React from 'react';

export interface GridProps {
  total?: number;
  interactive?: boolean;
}

export interface GalleryProps {
  total?: number;
  show?: boolean;
}

function createImageObject(number: number) {
  return {
    url: `gallery/${number}.jpg`,
    alt: 'Texto alternativo de la imagen',
    author: 'Autor de la imagen.',
    title: 'Título de la imagen',
    description:
      'Descripción o epígrafe de la imagen. \nRecomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.'
  };
}

export const images = [
  createImageObject(1),
  createImageObject(2),
  createImageObject(3),
  createImageObject(4),
  createImageObject(5),
  createImageObject(3),
  createImageObject(4)
];

export const GridImage: React.FC<GridProps> = (props: React.PropsWithChildren<GridProps>) => {
  const { total = images.length, interactive = false } = props;

  return (
    <>
      <div className={`gallery-grid gallery-max-${total}`}>
        {images.slice(0, total).map(({ url, alt }, index) =>
          interactive ? (
            <a key={index} href={url} className="gallery-grid-item" data-toggle="modal" data-target="#modalGallery">
              <img src={url} alt={alt} />
            </a>
          ) : (
            <div key={index} className="gallery-grid-item">
              <img src={url} alt={alt} />
            </div>
          )
        )}
      </div>
    </>
  );
};

export const GalleryContainer: React.FC<GalleryProps> = (props: React.PropsWithChildren<GalleryProps>) => {
  const { total = images.length, show = false } = props;

  const modalClass = classNames('modal', 'modal-carousel', { 'd-block': show });

  return (
    <div className={modalClass} data-backdrop="static" tabIndex={-1} role="dialog" id="modalGallery">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <a href="#" className="modal-carousel-close" data-dismiss="modal">
            Cerrar ventana
          </a>
          <div id="modalGalleryControls" className="carousel" data-ride="carousel" data-interval="false">
            <div className="carousel-inner">
              {images.slice(0, total).map(({ url, alt, author, title, description }, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={url} className="d-block w-100" alt={alt} />
                  <div className="carousel-caption">
                    <div className="row mb-4">
                      <div className="col">
                        <span className="text-xs">{author}</span>
                      </div>
                      <div className="col text-right">
                        <span className="text-xs">
                          Imagen {index + 1}/{total}
                        </span>
                      </div>
                    </div>
                    <h5 className="h2">
                      {title} {index + 1}.
                    </h5>
                    {description && (
                      <p>
                        {description.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {index === 0 ? `${line} ` : line}
                            {index === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              ))}
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
  );
};
