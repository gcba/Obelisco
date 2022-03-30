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
const description = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
const footer = 'Fecha de publicación: 10/10/2021';

export const TitleTextLink = (): JSX.Element => {
  return (
    <>
      <div className="horizontal-container">
        <SimpleCard
          title={title}
          description={description}
          picture={{
            src: 'cards/ciudad.jpg',
            alt: 'descripción alternativa'
          }}
          className="card-lg"
          href="#"
        />
      </div>
      <br />
      <br />
      <div className="cards-container">
        <SimpleCard
          title={title}
          description={description}
          href="#"
          picture={{
            icon: 'bx-news'
          }}
        />
        <br />
        <br />
        <SimpleCard
          title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
          href="#"
        />
        <br />
        <br />
        <SimpleCard title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" href="#" />
      </div>
    </>
  );
};
TitleTextLink.story = { name: 'Sin contenedor' };

export const TitleText = (): JSX.Element => {
  return (
    <div className="cards-container">
      <Card
        title={title}
        description={description}
        picture={{
          icon: 'bx-news'
        }}
        href="#"
      />
      <br />
      <Card title={title} description={description} href="#" />
      <br />
      <Card title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" href="#" />
    </div>
  );
};
TitleText.story = { name: 'Con contenedor' };

export const HorizontalCard = (): JSX.Element => {
  return (
    <>
      <div className="horizontal-container">
        <Card
          title={title}
          description={description}
          picture={{
            src: 'cards/paseobajo-wide.png',
            alt: 'descripción alternativa'
          }}
          orientation="horizontal"
          href="#"
        />
        <br />
        <Card
          title={title}
          description={description}
          picture={{
            src: 'cards/paseobajo-wide.png',
            alt: 'descripción alternativa'
          }}
          orientation="horizontal"
          className="card-lg"
          href="#"
        />
      </div>
      <br />
      <div className="cards-container">
        <Card
          title="Lorem ipsum dolor sit amet, consetetur"
          picture={{
            src: 'cards/paseobajo-wide.png',
            alt: 'descripción alternativa'
          }}
          orientation="horizontal"
          href="#"
        />
        <br />

        <Card
          title={title}
          description={description}
          picture={{
            src: 'cards/paseobajo-wide.png',
            alt: 'descripción alternativa'
          }}
          orientation="horizontal"
          href="#"
        />
        <br />
        <Card
          title={title}
          description={description}
          picture={{
            src: 'cards/paseobajo-wide.png',
            alt: 'descripción alternativa'
          }}
          orientation="horizontal"
          className="card-lg"
          href="#"
        />
      </div>
    </>
  );
};
HorizontalCard.story = { name: 'Contenedor con imagen horizontal' };

export const NewsCard = (): JSX.Element => {
  return (
    <div className="cards-container">
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
NewsCard.story = { name: 'Noticia' };

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

export const EventCard = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-event-top">
          <img src="cards/evento-bg.jpg" className="card-event-bg" alt="descripción alternativa" />
          <div className="card-event-img">
            <img src="cards/evento-thumb.jpg" alt="descripción alternativa" />
          </div>
          <p className="card-event-name">Actividades y clases en polideportivos</p>
        </div>
        <div className="card-body">
          <p className="card-headline">18 de Enero al 1 de Febrero</p>
          <h4 className="card-title">Comienza una nueva edición de actividades en polideportivos</h4>
        </div>
      </a>
    </div>
  );
};
EventCard.story = { name: 'Evento' };
