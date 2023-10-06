// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Card } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Tarjetas/Lista desplazable',
  component: Card,
  decorators: [withA11y]
};

const title = 'Título de tarjeta';
const description = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
const footer = 'Fecha de publicación: 10/09/2023';

export const ScrollList = (): JSX.Element => {
  return (
    <div className="responsive-scroll vertical-cards-container" tabIndex={0}>
      <Card
        tags={['Etiqueta 1', 'Etiqueta 2']}
        title={title}
        description={description}
        footer={footer}
        picture={{
          src: 'cards/evento.jpg',
          alt: 'descripción alternativa'
        }}
        href="#"
      />
      <Card
        tags={['Etiqueta 1', 'Etiqueta 2']}
        title={title}
        description={description}
        footer={footer}
        picture={{
          src: 'cards/evento.jpg',
          alt: 'descripción alternativa'
        }}
        href="#"
      />
      <Card
        tags={['Etiqueta 1', 'Etiqueta 2']}
        title={title}
        description={description}
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
ScrollList.story = { name: 'Lista desplazable' };
