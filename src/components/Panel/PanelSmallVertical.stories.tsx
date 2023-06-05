// Base
import React from 'react';
import './Panel.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SmallPanel } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Chico/Vertical',
  decorators: [withA11y]
};

const TITLE = 'Nombre del titular';
const DESCRIPTION =
  'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';
const BUTTONS_ARR = [
  {
    name: 'Acción 1',
    className: 'btn btn-secondary btn-sm card-link'
  },
  {
    name: 'Acción 2',
    className: 'btn btn-link btn-sm card-link'
  }
];
const PICTURE = {
  src: 'cards/paseobajo-wide.png',
  alt: 'descripción alternativa'
};
const LINK = {
  name: 'Enlace',
  url: '#'
};
const LINK_LIST = {
  listTitle: 'H4 - Nombre del titular',
  links: [
    { name: 'Enlace', className: 'download card-link', url: '#' },
    { name: 'Enlace', className: 'download card-link', url: '#' },
    { name: 'Enlace', className: 'download card-link', url: '#' },
    { name: 'Enlace', className: 'download card-link', url: '#' },
    { name: 'Enlace', className: 'download card-link', url: '#' },
    { name: 'Enlace', className: 'download card-link', url: '#' }
  ]
};
const LINK_LIST_BUTTONS = [
  {
    listTitle: 'Nombre del archivo',
    name: 'Descargar',
    className: 'btn btn-secondary btn-sm download-link card-link',
    url: '#'
  },
  {
    listTitle: 'Nombre del archivo',
    name: 'Descargar',
    className: 'btn btn-secondary btn-sm download-link card-link',
    url: '#'
  },
  {
    listTitle: 'Nombre del archivo',
    name: 'Descargar',
    className: 'btn btn-secondary btn-sm download-link card-link',
    url: '#'
  }
];

export const SmallPanelVerticalColors = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      {/* Transparente */}
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} />
      {/* Blanco */}
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} bgColor="white" />
      {/* Grisulado */}
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} bgColor="light" />
    </div>
  );
};

SmallPanelVerticalColors.story = { name: 'Con fondo' };

export const SmallPanelVerticalButtons = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} buttons={BUTTONS_ARR} />
    </div>
  );
};

SmallPanelVerticalButtons.story = { name: 'Con botones' };

export const SmallPanelVerticalLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK} />
    </div>
  );
};

SmallPanelVerticalLink.story = { name: 'Con enlace' };

export const SmallPanelVerticalListLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} listLinkPanel={LINK_LIST} />
    </div>
  );
};

SmallPanelVerticalListLink.story = { name: 'Con lista de enlaces' };

export const SmallPanelVerticalListDownloadButton = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={PICTURE} listLinkButtonPanel={LINK_LIST_BUTTONS} />
    </div>
  );
};

SmallPanelVerticalListDownloadButton.story = { name: 'Con lista de botón de descarga' };
