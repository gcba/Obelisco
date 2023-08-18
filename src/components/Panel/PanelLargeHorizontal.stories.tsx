// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { LargePanel } from '.';
import {
  TITLE,
  DESCRIPTION,
  PICTURE,
  VIDEO,
  LINK,
  LINK_DOWNLOAD,
  LINK_DOWNLOAD_BUTTON,
  LINK_DOWNLOAD_BUTTON_ICON,
  BUTTONS_ARR,
  BUTTON_ARR
} from './Panel.constants';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Grande/Horizontal',
  decorators: [withA11y]
};

/* Con Imagen | Video y 2 botones */
export const HorizontalPanelButtons = (): JSX.Element => {
  return (
    <div className="storybook__container-panel-horizontal">
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} buttons={BUTTONS_ARR} />
      <LargePanel title={TITLE} description={DESCRIPTION} video={VIDEO} buttons={BUTTONS_ARR} />
    </div>
  );
};
HorizontalPanelButtons.story = { name: 'Con dos botones' };

/* Con Imagen | Video y 1 boton */
export const HorizontalPanelButton = (): JSX.Element => {
  return (
    <div className="storybook__container-panel-horizontal">
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} buttons={BUTTON_ARR} />
      <LargePanel title={TITLE} description={DESCRIPTION} video={VIDEO} buttons={BUTTON_ARR} />
    </div>
  );
};
HorizontalPanelButton.story = { name: 'Con un botón' };

/* Con Imagen | Video y enlace */
export const HorizontalPanelLink = (): JSX.Element => {
  return (
    <div className="storybook__container-panel-horizontal">
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK} />
      <LargePanel title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK} />
    </div>
  );
};
HorizontalPanelLink.story = { name: 'Con enlace' };

/* Con Imagen | Video y enlace de descarga */
export const HorizontalPanelLinkDownload = (): JSX.Element => {
  return (
    <div className="storybook__container-panel-horizontal">
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK_DOWNLOAD} />
      <LargePanel title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK_DOWNLOAD} />
    </div>
  );
};
HorizontalPanelLinkDownload.story = { name: 'Con enlace de descarga' };

/* Con Imagen | Video y boton de descarga */
export const HorizontalPanelLinkButtonDownload = (): JSX.Element => {
  return (
    <div className="storybook__container-panel-horizontal">
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK_DOWNLOAD_BUTTON} />
      <LargePanel title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK_DOWNLOAD_BUTTON_ICON} />
    </div>
  );
};
HorizontalPanelLinkButtonDownload.story = { name: 'Con botón de descarga' };

/* Con fondo bris y blanco*/
export const HorizontalPanelBackground = (): JSX.Element => {
  return (
    <div className="storybook__container-panel-horizontal">
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} buttons={BUTTONS_ARR} bgColor="light" />
      <LargePanel title={TITLE} description={DESCRIPTION} picture={PICTURE} buttons={BUTTONS_ARR} bgColor="white" />
    </div>
  );
};
HorizontalPanelBackground.story = { name: 'Con fondo' };
