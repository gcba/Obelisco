// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Tarjetas/Horizontal',
  decorators: [withA11y]
};

const title = 'Título de la tarjeta con más de una línea';
const description = 'Descripción de la tarjeta';

export const WithIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-card-horizontal">
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
      <br />
      <div className="card card-horizontal unbordered">
        <span className="material-icons-round card-icon-left">info</span>
        <div className="card-body">
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
    <div className="storybook__container-card-horizontal">
      <div className="card card-horizontal">
        <img src="cards/img-left.jpg" className="card-img-left" alt="descripción de imagen" />
        <div className="card-body">
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>{' '}
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <br />
      <div className="card card-horizontal unbordered">
        <img src="cards/img-left.jpg" className="card-img-left" alt="descripción de imagen" />
        <div className="card-body">
          <h3 className="card-title">
            <a href="#">{title}</a>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
WithImage.story = { name: 'Con imagen' };

export const OnlyText = (): JSX.Element => {
  return (
    <div className="storybook__container-card-horizontal">
      <div className="card card-horizontal">
        <div className="card-body">
          <h3 className="card-title">
            <a href="#" className="card-title-link">
              {title}
            </a>{' '}
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <br />
      <div className="card card-horizontal unbordered">
        <div className="card-body">
          <h3 className="card-title">
            <a href="#">{title}</a>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
OnlyText.story = { name: 'Solo texto' };

export const Tematic = (): JSX.Element => {
  return (
    <div className="storybook__container-card-horizontal">
      <div className="card card-simple card-horizontal card-lg">
        <img src="cards/home.svg" className="card-img-left" alt=" " />
        <div className="card-body">
          <h3 className="card-title">
            <a href="#">Título de la tarjeta con más de una línea</a>
          </h3>
          <p className="card-text">Descripción de la tarjeta. </p>
        </div>
      </div>
    </div>
  );
};
Tematic.story = { name: 'Temática' };
