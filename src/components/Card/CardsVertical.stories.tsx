// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { CardComponent } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Tarjetas/Vertical',
  decorators: [withA11y]
};

const title = 'Título de la tarjeta';
const titleExtended =
  'Título de la tarjeta Noticias truncado con texto extendido que supera las tres líneas de longitud.';
const description = 'Descripción de la tarjeta';

export const WithIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <CardComponent title={title} description={description} href="#" icon="bx bxs-info-circle"></CardComponent>
      <br />
      <CardComponent title={title} description={description} href="#" icon="info" hasNoBorder></CardComponent>
    </div>
  );
};
WithIcon.story = { name: 'Con ícono' };

export const WithImage = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <CardComponent
        title={title}
        description={description}
        href="#"
        image={{ src: 'cards/img-top.jpg', alt: 'descripción de imagen' }}></CardComponent>
    </div>
  );
};
WithImage.story = { name: 'Con imagen' };

export const News = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <CardComponent
        title={title}
        description={description}
        href="#"
        image={{ src: 'cards/img-top.jpg', alt: 'descripción de imagen' }}
        tags={[{ text: 'etiqueta 1' }, { text: 'etiqueta 2' }]}>
        <small>Fecha de publicación</small>
      </CardComponent>
      <br />
      <CardComponent
        title={titleExtended}
        description={description}
        href="#"
        image={{ src: 'cards/img-top.jpg', alt: 'descripción de imagen' }}
        tags={[{ text: 'etiqueta 1' }, { text: 'etiqueta 2' }]}
        isTitleTruncate>
        <small>Fecha de publicación</small>
      </CardComponent>
    </div>
  );
};
News.story = { name: 'Noticia' };

export const Event = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
      <CardComponent
        title={title}
        description={description}
        href="#"
        image={{ src: 'cards/img-top.jpg', alt: 'descripción de imagen' }}
        headline="sobrelinea">
        <div className="pt-2">
          <small>
            <span className="material-icons-round">calendar_today</span> Lun 01/1
          </small>
          <small>
            <span className="material-icons-round">watch_later</span> 17 | 18 | 19 hs
          </small>
        </div>
      </CardComponent>
    </div>
  );
};
Event.story = { name: 'Agenda' };
