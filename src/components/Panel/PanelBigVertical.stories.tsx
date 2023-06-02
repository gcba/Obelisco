// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { PanelVertical } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Grande/Vertical',
  decorators: [withA11y]
};

const TITLE = 'Nombre del titular';
const DESCRIPTION =
  'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';
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

export const BackgroundHorizontalPanel = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      {/* Transparente */}
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        picture={{
          src: 'panel/larreta.jpg',
          alt: 'descripción alternativa'
        }}
      />
      {/* Blanco */}
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        picture={{
          src: 'panel/larreta.jpg',
          alt: 'descripción alternativa'
        }}
        bgColor="white"
      />
      {/* Grisulado */}
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        picture={{
          src: 'panel/larreta.jpg',
          alt: 'descripción alternativa'
        }}
        bgColor="light"
      />
    </div>
  );
};
BackgroundHorizontalPanel.story = { name: 'Con fondo' };

export const HighLightPanel = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      {/* Con Imagen y botones */}
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        picture={{
          src: 'panel/larreta.jpg',
          alt: 'descripción alternativa'
        }}
        buttons={BUTTONS_ARR}
      />
      {/* Con Video y botones */}
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
    <div className="storybook__wrapper-vertical">
      {/* Con Imagen y boton de descarga */}
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        picture={{
          src: 'panel/larreta.jpg',
          alt: 'descripción alternativa'
        }}
        link={LINK_BUTTON}
      />
      {/* Con Video y boton de descarga */}
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
    <div className="storybook__wrapper-vertical">
      {/* Con Imagen y enlace */}
      <PanelVertical
        title={TITLE}
        description={DESCRIPTION}
        picture={{
          src: 'panel/larreta.jpg',
          alt: 'descripción alternativa'
        }}
        link={LINK}
      />
      {/* Con Video y enlace */}
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
