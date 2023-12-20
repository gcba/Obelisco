// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { CardComponent } from '.';

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
      <CardComponent
        title={title}
        description={description}
        href="#"
        icon="bx bxs-info-circle"
        isHorizontal></CardComponent>
      <br />
      <CardComponent
        title={title}
        description={description}
        href="#"
        icon="info"
        isHorizontal
        hasNoBorder></CardComponent>
    </div>
  );
};
WithIcon.story = { name: 'Con ícono' };

export const WithImage = (): JSX.Element => {
  return (
    <div className="storybook__container-card-horizontal">
      <CardComponent
        title={title}
        description={description}
        href="#"
        image={{ src: 'cards/img-left.jpg', alt: 'descripción de imagen' }}
        isHorizontal></CardComponent>
      <br />
      <CardComponent
        title={title}
        description={description}
        href="#"
        image={{ src: 'cards/img-left.jpg', alt: 'descripción de imagen' }}
        isHorizontal
        hasNoBorder></CardComponent>
    </div>
  );
};
WithImage.story = { name: 'Con imagen' };

export const OnlyText = (): JSX.Element => {
  return (
    <div className="storybook__container-card-horizontal">
      <CardComponent title={title} description={description} href="#" isHorizontal></CardComponent>
      <br />
      <CardComponent title={title} description={description} href="#" isHorizontal hasNoBorder></CardComponent>
    </div>
  );
};
OnlyText.story = { name: 'Solo texto' };

export const Tematic = (): JSX.Element => {
  return (
    <div className="storybook__container-card-horizontal">
      <CardComponent
        title={title}
        description={description}
        href="#"
        image={{ src: 'cards/home.svg', alt: 'descripción de imagen' }}
        isThemeCard
        hasNoBorder></CardComponent>
    </div>
  );
};
Tematic.story = { name: 'Temática' };
