// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Blockquote, UnorderedList, ListItem, OrderedList } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía',
  decorators: [withA11y]
};

export const Headings = (): JSX.Element => {
  return (
    <>
      <Typography as="h1">Encabezado h1 - Nunito, 40px, IL 48px</Typography>
      <Typography as="h2">Encabezado h2 - Nunito, 36px, IL 44px</Typography>
      <Typography as="h3">Encabezado h3 - Nunito, 32px, IL 44px</Typography>
      <Typography as="h4">Encabezado h4 - Nunito, 28px, IL 36px</Typography>
      <Typography as="h5">Encabezado h5 - Nunito, 24px, IL 32px</Typography>
      <Typography as="h6">Encabezado h6 - Nunito, 20px, IL 28px</Typography>
    </>
  );
};

Headings.story = {
  name: 'Títulos'
};

export const Subtitle = (): JSX.Element => {
  return (
    <>
      <Typography as="p" className="text-xl">
        Subtítulo con clase text-xl
      </Typography>
      <Typography as="p" className="lead">
        Subtítulo con clase lead
      </Typography>
    </>
  );
};

Subtitle.story = {
  name: 'Subtítulo'
};
export const Tag = (): JSX.Element => {
  return (
    <>
      <Typography as="p" className="headline-lg">
        Titular L - Nunito, 20px, IL 24px
      </Typography>
      <Typography as="p" className="headline-md">
        Titular M - Nunito, 18px, IL 24px
      </Typography>
      <Typography as="p" className="headline-sm">
        Titular S - Nunito, 16px, IL 20px
      </Typography>
    </>
  );
};

Tag.story = {
  name: 'Titulares'
};

export const Text = (): JSX.Element => {
  return (
    <>
      <Typography as="p" className="text-xl">
        Cuerpo XL - Open Sans, 20px, IL 28px
      </Typography>
      <Typography as="p" className="text-lg">
        Cuerpo L - Open Sans, 18px, IL 28px
      </Typography>
      <Typography as="p">Cuerpo M - Open Sans, 16px, IL 24px</Typography>
      <Typography as="p" className="text-sm">
        Cuerpo S - Open Sans, 14px, IL 20px
      </Typography>
      <Typography as="p" className="text-xs">
        Cuerpo XS - Open Sans, 12px, IL 16px
      </Typography>
    </>
  );
};

Text.story = {
  name: 'Cuerpos'
};

export const OtherStyles = (): JSX.Element => {
  return (
    <>
      <p className="font-weight-regular">Texto con font-weight regular</p>
      <p className="font-weight-semibold">Texto con font-weight semibold</p>
      <p className="font-weight-bold">Texto con font-weight bold</p>
      <p className="font-italic">Texto en itálica</p>
      <p className="underline-1">Texto subrayado con grosor de 1px</p>
      <p className="underline-2">Texto subrayado con grosor de 2px</p>
    </>
  );
};
OtherStyles.story = {
  name: 'Otros estilos'
};

export const Quote = (): JSX.Element => {
  return (
    <div className="storybook__container-bloquote">
      <Blockquote>
        <Typography as="p">
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </Typography>
      </Blockquote>
      <br />
      <Blockquote>
        <Typography as="p">
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </Typography>
        <Typography as="small">Nombre del autor de la cita</Typography>
      </Blockquote>
    </div>
  );
};
Quote.story = {
  name: 'Citas'
};

export const List = (): JSX.Element => {
  return (
    <>
      <UnorderedList>
        <ListItem>Esto es el texto de una lista</ListItem>
        <ListItem>Esto es el texto de una lista</ListItem>
        <ListItem>Esto es el texto de una lista</ListItem>
      </UnorderedList>
    </>
  );
};
List.story = {
  name: 'Listas'
};

export const OrderList = (): JSX.Element => {
  return (
    <>
      <OrderedList>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
      </OrderedList>
    </>
  );
};

OrderList.story = {
  name: 'Lista ordenada'
};

export const Transformations = (): JSX.Element => {
  return (
    <>
      <Typography as="p">
        Nuestro sistema de <Typography as="strong">estándares</Typography> brinda un{' '}
        <Typography as="em">conjunto de herramientas</Typography> y componentes colaborativos
        <br />y <Typography as="small">accesibles</Typography> que define procesos para que los equipos internos y
        externos puedan trabajar
        <br />
        alineadamente. De esta forma, ayudamos a crear <Typography as="mark">servicios</Typography> consistent
        <Typography as="sup">es</Typography> para mejorar
        <br /> la experiencia digit<Typography as="sub">al</Typography> de vecinos y vecina
        <Typography as="kbd">s</Typography>.
      </Typography>
    </>
  );
};
Transformations.story = {
  name: 'Transformaciones'
};
