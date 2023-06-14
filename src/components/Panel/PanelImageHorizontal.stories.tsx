// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { PanelHorizontal } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Panel horizontal/Con imagen',
  decorators: [withA11y]
};

const TITLE = 'Encabezado';
const DESCRIPTION = 'Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.';
const BUTTONS_ARR = [
  {
    name: 'Botón',
    className: 'btn btn-lg btn-primary card-link'
  },
  {
    name: 'Botón',
    className: 'btn btn-lg btn-secondary card-link'
  }
];
const LINK_BUTTON = {
  name: 'Descargar',
  className: 'btn btn-secondary btn-lg download-link'
};
const LINK = {
  name: 'Descargar',
  className: 'download'
};

export const HighLightPanel = (): JSX.Element => {
  return (
    <PanelHorizontal
      title={TITLE}
      description={DESCRIPTION}
      picture={{
        src: 'panel/larreta.jpg',
        alt: 'descripción alternativa'
      }}
      buttons={BUTTONS_ARR}
    />
  );
};
HighLightPanel.story = { name: 'Con botones' };

export const HighLightPanelButtonLink = (): JSX.Element => {
  return (
    <PanelHorizontal
      title={TITLE}
      description={DESCRIPTION}
      picture={{
        src: 'panel/larreta.jpg',
        alt: 'descripción alternativa'
      }}
      link={LINK_BUTTON}
    />
  );
};
HighLightPanelButtonLink.story = { name: 'Con botón de descarga' };

export const HighLightPanelLink = (): JSX.Element => {
  return (
    <PanelHorizontal
      title={TITLE}
      description={DESCRIPTION}
      picture={{
        src: 'panel/larreta.jpg',
        alt: 'descripción alternativa'
      }}
      link={LINK}
    />
  );
};
HighLightPanelLink.story = { name: 'Con enlace de descarga' };

export const HighLightPanelIframe = (): JSX.Element => {
  return (
    <PanelHorizontal
      title={TITLE}
      description={DESCRIPTION}
      iframe={{
        src: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13132.260674265006!2d-58.38310044999999!3d-34.6277934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1685540879981!5m2!1ses-419!2sar',
        width: '526',
        height: '296',
        style: { border: '0' },
        loading: 'lazy',
        referrerPolicy: 'no-referrer-when-downgrade'
      }}
      buttons={BUTTONS_ARR}
    />
  );
};
HighLightPanelIframe.story = { name: 'Con iframe' };
