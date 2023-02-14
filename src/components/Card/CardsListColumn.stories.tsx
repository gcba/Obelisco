// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Card } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Tarjetas/Lista ancho por tarjeta',
  component: Card,
  decorators: [withA11y]
};

const title = 'Título de tarjeta';
const descriptionSm = 'Recomendamos en este espacio no utilizar más de 3 líneas.';
const description = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
const descriptionLg =
  'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima. En este caso agregamos líneas de texto extras y mostrar el comportamiento de la card.';

export const CuatroColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card-deck card-column">
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
      <div className="card-deck max-cards-3 card-column">
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
      <div className="card-deck max-cards-2 card-column">
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
      <div className="card-deck max-cards-1 card-column">
        <Card title={title} description={descriptionSm} href="#" />
      </div>
    </div>
  );
};
