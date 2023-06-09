// Base
import React from 'react';
import './Panel.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SmallPanel } from '.';
import {
  TITLE,
  DESCRIPTION,
  SMALL_PICTURE,
  SMALL_BUTTONS_ARR,
  LINK,
  SMALL_LINK_DOWNLOAD,
  LINK_LIST,
  LINK_DOWNLOAD_LIST,
  LINK_LIST_BUTTONS
} from './Panel.constants';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Chico/Vertical',
  decorators: [withA11y]
};

export const SmallPanelVerticalWithoutAccion = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} />
    </div>
  );
};
SmallPanelVerticalWithoutAccion.story = { name: 'Sin accionable' };

export const SmallPanelVerticalButtons = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} buttons={SMALL_BUTTONS_ARR} />
    </div>
  );
};
SmallPanelVerticalButtons.story = { name: 'Con botones' };

export const SmallPanelVerticalLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} link={LINK} />
    </div>
  );
};
SmallPanelVerticalLink.story = { name: 'Con enlace' };

export const SmallPanelVerticalLinkDownload = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} link={SMALL_LINK_DOWNLOAD} />
    </div>
  );
};
SmallPanelVerticalLinkDownload.story = { name: 'Con enlace de descarga' };

export const SmallPanelVerticalListLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} listLinkPanel={LINK_LIST} />
    </div>
  );
};
SmallPanelVerticalListLink.story = { name: 'Con lista de enlaces' };

export const SmallPanelVerticalListLinkDownload = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} listLinkPanel={LINK_DOWNLOAD_LIST} />
    </div>
  );
};
SmallPanelVerticalListLinkDownload.story = { name: 'Con lista de enlaces de descarga' };

export const SmallPanelVerticalListDownloadButton = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <SmallPanel
        title={TITLE}
        description={DESCRIPTION}
        picture={SMALL_PICTURE}
        listLinkButtonPanel={LINK_LIST_BUTTONS}
      />
    </div>
  );
};
SmallPanelVerticalListDownloadButton.story = { name: 'Con lista de botón de descarga' };

export const SmallPanelVerticalBackground = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      {/* Grisulado */}
      <SmallPanel
        title={TITLE}
        description={DESCRIPTION}
        picture={SMALL_PICTURE}
        buttons={SMALL_BUTTONS_ARR}
        bgColor="light"
      />
      {/* Blanco */}
      <SmallPanel
        title={TITLE}
        description={DESCRIPTION}
        picture={SMALL_PICTURE}
        buttons={SMALL_BUTTONS_ARR}
        bgColor="white"
      />
    </div>
  );
};
SmallPanelVerticalBackground.story = { name: 'Con fondo' };
