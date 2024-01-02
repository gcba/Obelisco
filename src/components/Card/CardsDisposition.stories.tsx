// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Tarjetas/Disposición',
  decorators: [withA11y]
};

const title = 'Título de la tarjeta con más de una línea';
const description = 'Descripción de la tarjeta';

export const ThreeColumn = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck max-cards-3 card-column">
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
ThreeColumn.story = { name: 'Tres columnas' };

export const TwoColumn = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck max-cards-2 card-column">
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card card-horizontal">
          <i className="bx bxs-info-circle card-icon-left"></i>
          <div className="card-body">
            <h3 className="card-title">
              <a href="#" className="card-title-link">
                {title}
              </a>{' '}
            </h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
TwoColumn.story = { name: 'Dos columnas' };

export const Scrollable = (): JSX.Element => {
  return (
    <div className="responsive-scroll vertical-cards-container" tabIndex={0}>
      <div className="card">
        <img src="cards/img-top.jpg" className="card-img-top" alt="descripción de imagen" />
        <div className="card-body">
          <div className="card-badges">
            <span className="badge badge-secondary">Etiqueta 1</span>
            <span className="badge badge-secondary">Etiqueta 2</span>
          </div>
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>
          </h3>
          <p className="card-text">{description}</p>
          <div className="card-info">
            <small>Fecha de publicación</small>
          </div>
        </div>
      </div>
      <div className="card">
        <img src="cards/img-top.jpg" className="card-img-top" alt="descripción de imagen" />
        <div className="card-body">
          <div className="card-badges">
            <span className="badge badge-secondary">Etiqueta 1</span>
            <span className="badge badge-secondary">Etiqueta 2</span>
          </div>
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>
          </h3>
          <p className="card-text">{description}</p>
          <div className="card-info">
            <small>Fecha de publicación</small>
          </div>
        </div>
      </div>
      <div className="card">
        <img src="cards/img-top.jpg" className="card-img-top" alt="descripción de imagen" />
        <div className="card-body">
          <div className="card-badges">
            <span className="badge badge-secondary">Etiqueta 1</span>
            <span className="badge badge-secondary">Etiqueta 2</span>
          </div>
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>
          </h3>
          <p className="card-text">{description}</p>
          <div className="card-info">
            <small>Fecha de publicación</small>
          </div>
        </div>
      </div>
    </div>
  );
};
Scrollable.story = { name: 'Desplazable' };
