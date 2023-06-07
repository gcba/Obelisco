// Base
import React from 'react';
import './Panel.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SmallMapPanel, SmallPanel } from '.';

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

const TITLE_MAP = 'Dirección';
const TITLE_MAP_DESCRIP = 'Ubicación';
const DESCRIPTION_MAP = 'Dirección: Av. Monroe 3555';
const BUTTONS_MAP_ARR = [
  {
    name: 'Cómo llego',
    className: 'btn btn-primary btn-lg btn-block'
  }
];
const BUTTONS_MAP_DESCRIPTION_ARR = [
  {
    name: 'Cómo llego',
    className: 'btn btn-primary btn-lg'
  }
];
const PICTURE_MAP = {
  src: 'panel/mapa.jpg',
  alt: 'Mapa'
};
const PICTURE_MAP_DESCRIP = {
  src: 'panel/mapa-hospital.jpg',
  alt: 'Mapa'
};

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

export const Maps = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <SmallMapPanel title={TITLE_MAP} picture={PICTURE_MAP} buttons={BUTTONS_MAP_ARR} />
      <SmallMapPanel title={TITLE_MAP} picture={PICTURE_MAP} buttons={BUTTONS_MAP_ARR} bgColor="light" />
      <SmallMapPanel
        title={TITLE_MAP_DESCRIP}
        description={DESCRIPTION_MAP}
        picture={PICTURE_MAP_DESCRIP}
        buttons={BUTTONS_MAP_DESCRIPTION_ARR}
      />
      <SmallMapPanel
        title={TITLE_MAP_DESCRIP}
        description={DESCRIPTION_MAP}
        picture={PICTURE_MAP_DESCRIP}
        buttons={BUTTONS_MAP_DESCRIPTION_ARR}
        bgColor="light"
      />
    </div>
  );
};

Maps.story = { name: 'Con mapa' };

export const Process = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <div className="card card-simple panel-sm-process">
        <div className="card-body">
          <h3 className="card-title">Título H3</h3>
          <div className="panel-footer">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Iniciar trámite
            </button>
          </div>
        </div>
      </div>
      <div className="card card-simple panel-sm-process bg-light">
        <div className="card-body">
          <h3 className="card-title">Título H3</h3>
          <div className="panel-footer">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Iniciar trámite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Process.story = { name: 'Trámites' };
