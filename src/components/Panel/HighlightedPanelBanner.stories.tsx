// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { TITLE_HIGHLIGHTED, DESCRIPTION_HIGHLIGHTED, PICTURE_HIGHLIGHTED, VIDEO, IFRAME } from './Panel.constants';
import { HighlightedPanel } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Destacado/Banner',
  decorators: [withA11y]
};

export const WithImage = (): JSX.Element => {
  return (
    <>
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} picture={PICTURE_HIGHLIGHTED}>
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
        <a className="btn btn-secondary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} picture={PICTURE_HIGHLIGHTED}>
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} picture={PICTURE_HIGHLIGHTED}>
        <a className="btn btn-secondary btn-lg btn-icon" href="#" target="_blank" download>
          <span className="material-icons-round">file_download</span>
          Descargar
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} picture={PICTURE_HIGHLIGHTED}>
        <a className="external" href="#" target="_blank">
          Enlace externo
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} picture={PICTURE_HIGHLIGHTED}>
        <a href="#" className="list-group-item item-sm">
          <i className="bx bxs-info-circle"></i>
          <div className="access-content">
            <span className="access-title">Acceso</span>
          </div>
        </a>
      </HighlightedPanel>
      <br />
    </>
  );
};
WithImage.story = { name: 'Con imagen' };

export const WithVideo = (): JSX.Element => {
  return (
    <>
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} video={VIDEO}>
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
        <a className="btn btn-secondary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} iframe={IFRAME}>
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
        <a className="btn btn-secondary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
    </>
  );
};
WithVideo.story = { name: 'Con video' };

export const WithoutMultimedia = (): JSX.Element => {
  return (
    <>
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED}>
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
        <a className="btn btn-secondary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED}>
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED}>
        <a className="btn btn-secondary btn-lg btn-icon" href="#" target="_blank" download>
          <span className="material-icons-round">file_download</span>
          Descargar
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED}>
        <a className="external" href="#" target="_blank">
          Enlace externo
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED}>
        <a href="#" className="list-group-item item-sm">
          <i className="bx bxs-info-circle"></i>
          <div className="access-content">
            <span className="access-title">Acceso</span>
          </div>
        </a>
      </HighlightedPanel>
      <br />
    </>
  );
};
WithoutMultimedia.story = { name: 'Sin Multimedia' };

export const WithBackground = (): JSX.Element => {
  return (
    <>
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        bgColor="light">
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
        <a className="btn btn-secondary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        bgColor="light">
        <a className="btn btn-primary btn-lg" href="#">
          Botón
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        bgColor="light">
        <a className="btn btn-secondary btn-lg btn-icon" href="#" target="_blank" download>
          <span className="material-icons-round">file_download</span>
          Descargar
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        bgColor="light">
        <a className="external" href="#" target="_blank">
          Enlace externo
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        bgColor="light">
        <a href="#" className="list-group-item item-sm">
          <i className="bx bxs-info-circle"></i>
          <div className="access-content">
            <span className="access-title">Acceso</span>
          </div>
        </a>
      </HighlightedPanel>
      <br />
    </>
  );
};
WithBackground.story = { name: 'Con fondo' };
