// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { PanelVertical } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Panel vertical/Con video',
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
    <div className="panel-wrapper">
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        video={{
          src: 'panel/larreta.mp4',
          alt: 'descripción alternativa'
        }}
        buttons={BUTTONS_ARR}
      />
    </div>
  );
};
HighLightPanel.story = { name: 'Con botones' };

export const HighLightPanelButtonLink = (): JSX.Element => {
  return (
    <div className="panel-wrapper">
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        video={{
          src: 'panel/larreta.mp4',
          alt: 'descripción alternativa'
        }}
        link={LINK_BUTTON}
      />
    </div>
  );
};
HighLightPanelButtonLink.story = { name: 'Con botón de descarga' };

export const HighLightPanelLink = (): JSX.Element => {
  return (
    <div className="panel-wrapper">
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        video={{
          src: 'panel/larreta.mp4',
          alt: 'descripción alternativa'
        }}
        link={LINK}
      />
    </div>
  );
};
HighLightPanelLink.story = { name: 'Con enlace de descarga' };
