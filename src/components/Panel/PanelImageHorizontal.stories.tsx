// Addons
import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { PanelHorizontal } from '.';

export default {
  title: 'Componentes|Panel/Panel destacado grande horizontal/Con Imagen',
  decorators: [withA11y]
};

const TITLE = 'Encabezado';
const DESCRIPTION =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nostrum quo animi dignissimos omnis dicta quia placeat, nesciunt quasi hic autem iure eum necessitatibus ea expedita quas. Rem, aspernatur repudiandae.';
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
