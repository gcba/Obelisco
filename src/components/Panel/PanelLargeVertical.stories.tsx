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
  title: 'Componentes|Panel/Grande/Vertical',
  decorators: [withA11y]
};

/* Con Imagen | Video y 2 botones */
export const VerticalPanelButtons = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        buttons={BUTTONS_ARR}
      />
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} buttons={BUTTONS_ARR} />
    </div>
  );
};
VerticalPanelButtons.story = { name: 'Con dos botones' };

/* Con Imagen | Video y 1 boton */
export const VerticalPanelButton = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        buttons={BUTTON_ARR}
      />
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} buttons={BUTTON_ARR} />
    </div>
  );
};
VerticalPanelButton.story = { name: 'Con un botón' };

/* Con Imagen | Video y enlace */
export const VerticalPanelLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} picture={PICTURE} link={LINK} />
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK} />
    </div>
  );
};
VerticalPanelLink.story = { name: 'Con enlace' };

/* Con Imagen | Video y enlace de descarga */
export const VerticalPanelLinkDownload = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        link={LINK_DOWNLOAD}
      />
      <LargePanel direction={'vertical'} title={TITLE} description={DESCRIPTION} video={VIDEO} link={LINK_DOWNLOAD} />
    </div>
  );
};
VerticalPanelLinkDownload.story = { name: 'Con enlace de descarga' };

/* Con Imagen | Video y boton de descarga */
export const VerticalPanelLinkButtonDownload = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        link={LINK_DOWNLOAD_BUTTON}
      />
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        video={VIDEO}
        link={LINK_DOWNLOAD_BUTTON_ICON}
      />
    </div>
  );
};
VerticalPanelLinkButtonDownload.story = { name: 'Con botón de descarga' };

/* Con fondo bris y blanco*/
export const VerticalPanelBackground = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-vertical">
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        buttons={BUTTONS_ARR}
        bgColor="light"
      />
      <LargePanel
        direction={'vertical'}
        title={TITLE}
        description={DESCRIPTION}
        picture={PICTURE}
        buttons={BUTTONS_ARR}
        bgColor="white"
      />
    </div>
  );
};
VerticalPanelBackground.story = { name: 'Con fondo' };
