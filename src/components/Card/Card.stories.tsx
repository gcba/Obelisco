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

export const Ícono = (): JSX.Element => {
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
