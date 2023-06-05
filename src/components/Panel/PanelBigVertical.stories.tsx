// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { LargePanel } from '.';

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
const PICTURE = {
  src: 'panel/larreta.jpg',
  alt: 'descripción alternativa'
};
const VIDEO = {
  src: 'panel/larreta.mp4',
  alt: 'descripción alternativa'
};

export const BackgroundHorizontalPanel = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      {/* Transparente */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} picture={PICTURE} />
      {/* Blanco */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} picture={PICTURE} bgColor="white" />
      {/* Grisulado */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} picture={PICTURE} bgColor="light" />
      {/* Transparente */}
    </div>
  );
};
BackgroundHorizontalPanel.story = { name: 'Con fondo' };

export const HighLightPanel = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      {/* Con Imagen y botones */}
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        buttons={BUTTONS_ARR}
      />
      {/* Con video y botones */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} buttons={BUTTONS_ARR} />
    </div>
  );
};
HighLightPanel.story = { name: 'Con botones' };

export const HighLightPanelButtonLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      {/* Con Imagen y boton de descarga */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK_BUTTON} />
      {/* Con video y boton de descarga */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK_BUTTON} />
    </div>
  );
};
HighLightPanelButtonLink.story = { name: 'Con botón de descarga' };

export const HighLightPanelLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      {/* Con Imagen y enlace */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK} />
      {/* Con video y enlace */}
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK} />
    </div>
  );
};
HighLightPanelLink.story = { name: 'Con enlace de descarga' };
