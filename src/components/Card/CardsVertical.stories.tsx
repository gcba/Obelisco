// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Tarjetas/Vertical',
  decorators: [withA11y]
};

const title = 'Título de la tarjeta';
const description = 'Descripción de la tarjeta';

export const WithIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <div className="card">
        <div className="card-body">
          <i className="bx bxs-info-circle card-icon"></i>
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <br />
      <div className="card card-simple">
        <div className="card-body">
          <i className="bx bx-news card-icon"></i>
          <h3 className="card-title">
            <a href="#">{title}</a>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
WithIcon.story = { name: 'Con ícono' };

export const WithImage = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <div className="card">
        <img src="cards/img-top.jpg" className="card-img-top" alt="descripción de imagen" />
        <div className="card-body">
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
WithImage.story = { name: 'Con imagen' };

export const News = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
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
News.story = { name: 'Noticia' };

export const Event = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <div className="card">
        <img src="cards/evento.jpg" className="card-img-top" alt="descripción alternativa" />
        <div className="card-body">
          <p className="card-headline">SOBRELINEA</p>
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>
          </h3>
          <p className="card-text">{description}</p>
          <div className="card-info-event">
            <small>
              <span className="material-icons-round">calendar_today</span> Lun 01/1
            </small>
            <small>
              <span className="material-icons-round">watch_later</span> 17 | 18 | 19 hs
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
Event.story = { name: 'Agenda' };
