// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Card } from '.';

// Config
export default {
  title: 'Componentes|Tarjetas/Listas',
  component: Card,
  decorators: [withA11y]
};
const title = 'Título de tarjeta';
const descriptionSm = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
const description = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
const descriptionLg =
  'Rerum officiis ullam, dolore quisquam nisi eveniet ratione possimus, fugit iure saepe praesentium aliquam est facilis quibusdam nobis velit dolorum vel nesciunt.';

export const CuatroColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck">
        <Card title={title} description={descriptionSm} href="#" />
        <Card title={title} description={description} href="#" />
        <Card title={title} description={descriptionLg} href="#" />
        <Card title={title} description={descriptionSm} href="#" />
        <Card title={title} description={description} href="#" />
        <Card title={title} description={descriptionLg} href="#" />
        <Card title={title} description={descriptionSm} href="#" />
      </div>
    </div>
  );
};

export const TresColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck max-cards-3">
        <Card title={title} description={descriptionSm} href="#" />
        <Card title={title} description={description} href="#" />
        <Card title={title} description={descriptionLg} href="#" />
        <Card title={title} description={descriptionSm} href="#" />
        <Card title={title} description={description} href="#" />
      </div>
    </div>
  );
};

export const DosColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck max-cards-2">
        <Card title={title} description={descriptionSm} href="#" />
        <Card title={title} description={description} href="#" />
        <Card title={title} description={descriptionLg} href="#" />
      </div>
    </div>
  );
};

export const UnaColumna = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck max-cards-1">
        <Card title={title} description={descriptionSm} href="#" />
        <Card title={title} description={description} href="#" />
        <Card title={title} description={descriptionLg} href="#" />
      </div>
    </div>
  );
};
