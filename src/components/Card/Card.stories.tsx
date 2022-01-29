// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Card, SimpleCard } from '.';

// Config
export default {
  title: 'Componentes|Tarjetas/Tipos',
  component: Card,
  decorators: [withA11y]
};

const title = 'Título de tarjeta';
const subTitle = 'Subtítulo de tarjeta';
const description = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
const footer = 'Last updated 3 mins ago';

export const TitleSubtitleText = (): JSX.Element => {
  return (
    <div className="cards-container">
      <Card title={title} subTitle={subTitle} description={description} footer={footer} href="#" />
    </div>
  );
};
TitleSubtitleText.story = { name: 'Contenedor simple' };

export const Tags = (): JSX.Element => {
  return (
    <div className="cards-container">
      <Card title={title} description={description} href="#" tags={['Etiqueta 1', 'Etiqueta 2']} />
    </div>
  );
};
Tags.story = { name: 'Con etiquetas' };

export const Icon = (): JSX.Element => {
  return (
    <div className="cards-container">
      <Card
        title={title}
        description={description}
        picture={{
          icon: 'bx-news',
          color: '#009afd'
        }}
        href="#"
      />
    </div>
  );
};
Icon.story = { name: 'Con ícono' };

export const IconWithBackGround = (): JSX.Element => {
  return (
    <div className="cards-container">
      <div className="cards-container">
        <a className="card" href="#">
          <div className="card-body">
            <i className="bx bx-news card-icon card-icon-with-bg"></i>
            <h3 className="card-title">Título de tarjeta</h3>
            <p className="card-text">
              Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
IconWithBackGround.story = { name: 'Ícono con fondo' };

export const TitleSubtitleLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <Card
        tags={['Etiqueta 1', 'Etiqueta 2']}
        title={title}
        subTitle={subTitle}
        description={description}
        picture={{
          src: 'cards/paseobajo.jpg',
          alt: 'descripción alternativa'
        }}
        href="#"
      />
    </div>
  );
};
TitleSubtitleLink.story = { name: 'Contenedor con imagen' };

export const HorizontalCard = (): JSX.Element => {
  return (
    <div className="horizontal-container">
      <Card
        title={title}
        description={description}
        picture={{
          src: 'cards/paseobajo-wide.png',
          alt: 'descripción alternativa',
          width: 168
        }}
        orientation="horizontal"
        href="#"
      />
    </div>
  );
};
HorizontalCard.story = { name: 'Contenedor con imagen horizontal' };

export const TitleTextLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <SimpleCard title={title} description={description} href="#" />
    </div>
  );
};
TitleTextLink.story = { name: 'Sin contenedor' };

export const TitleIconTextLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <SimpleCard
        title={title}
        description={description}
        href="#"
        picture={{
          icon: 'bx-news',
          color: '#26874a'
        }}
      />
    </div>
  );
};
TitleIconTextLink.story = { name: 'Sin contenedor con ícono' };

export const SimpleEventCard = (): JSX.Element => {
  const eventTitle = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed';
  const eventSubtitle = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
  const footer = (
    <>
      <i className="bx bx-calendar-event"></i> Vie 21/1
      <br />
      <i className="bx bx-time-five"></i> 17 | 18 | 19 hs
    </>
  );
  return (
    <div className="cards-container">
      <Card
        title={eventTitle}
        description={eventSubtitle}
        footer={footer}
        picture={{
          src: 'cards/evento.jpg',
          alt: 'descripción alternativa'
        }}
        href="#"
      />
    </div>
  );
};
SimpleEventCard.story = { name: 'Evento simple' };
