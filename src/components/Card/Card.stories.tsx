// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Card, SimpleCard } from '.';

// Configuración general del componente
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
      <div className="storybook__container-card-horizontal">
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
      <div className="storybook__container-cards">
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
          title="Título de tarjeta"
          description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
          href="#"
        />
        <br />
        <br />
        <SimpleCard title="Título de tarjeta" href="#" />
        <br />
        <br />
        <div className="card card-horizontal unbordered">
          <i className="bx bx-file card-icon-left"></i>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Título de la tarjeta</a>
            </h4>
            <p className="card-text">Descripción de la tarjeta</p>
          </div>
        </div>
        <br />
        <div className="card card-horizontal unbordered">
          <i className="bx bx-file card-icon-left"></i>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Título del acceso</a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

TitleTextLink.story = { name: 'Sin contenedor' };

export const TitleText = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
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
      <Card title="Título de tarjeta" href="#" />
    </div>
  );
};

TitleText.story = { name: 'Con contenedor' };

export const HorizontalCard = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-card-horizontal">
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
      <div className="storybook__container-cards">
        <Card
          title="Título de tarjeta"
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
        <br />
        <a className="card card-horizontal" href="#">
          <i className="bx bx-file card-icon-left"></i>
          <div className="card-body">
            <h4 className="card-title">Título del acceso</h4>
            <p className="card-text">Descripción del acceso</p>
          </div>
        </a>
        <br />
        <a className="card card-horizontal" href="#">
          <i className="bx bx-file card-icon-left"></i>
          <div className="card-body">
            <h4 className="card-title">Título del acceso</h4>
          </div>
        </a>
        <br />
      </div>
    </>
  );
};

HorizontalCard.story = { name: 'Contenedor con imagen o ícono horizontal' };

export const NewsCard = (): JSX.Element => {
  return (
    <div className="storybook__container-cards">
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
  const eventTitle = 'Título de tarjeta';
  const eventSubtitle = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
  const footer = (
    <>
      <i className="bx bx-calendar-event"></i> Vie 21/1
      <br />
      <i className="bx bx-time-five"></i> 17 | 18 | 19 hs
    </>
  );
  return (
    <div className="storybook__container-cards">
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
    <div className="storybook__container-cards">
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
