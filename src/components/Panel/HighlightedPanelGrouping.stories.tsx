// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { TITLE_HIGHLIGHTED, DESCRIPTION_HIGHLIGHTED, PICTURE_HIGHLIGHTED, VIDEO, IFRAME } from './Panel.constants';
import { HighlightedPanel } from '.';
import { Button } from '../Button';

// Configuración general del componente
export default {
  title: 'Componentes|Destacado/Conjunto',
  decorators: [withA11y]
};

export const WithImage = (): JSX.Element => {
  return (
    <div className="storybook__container-highlighted-grouping">
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        type="grouping">
        <Button type="primary" size="large">
          Botón
        </Button>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        type="grouping">
        <a className="btn btn-secondary btn-lg btn-icon" href="#" target="_blank" rel="noreferrer" download>
          <span className="material-icons-round">file_download</span>
          Descargar
        </a>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        type="grouping">
        <a className="external" href="#" target="_blank" rel="noreferrer">
          Enlace externo
        </a>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel
        title={TITLE_HIGHLIGHTED}
        description={DESCRIPTION_HIGHLIGHTED}
        picture={PICTURE_HIGHLIGHTED}
        type="grouping">
        <a href="#" className="list-group-item item-sm">
          <i className="bx bxs-info-circle"></i>
          <div className="access-content">
            <span className="access-title">Acceso</span>
          </div>
        </a>
      </HighlightedPanel>
    </div>
  );
};
WithImage.story = { name: 'Con imagen' };

export const WithVideo = (): JSX.Element => {
  return (
    <div className="storybook__container-highlighted-grouping">
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} video={VIDEO} type="grouping">
        <Button type="primary" size="large">
          Botón
        </Button>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} iframe={IFRAME} type="grouping">
        <Button type="primary" size="large">
          Botón
        </Button>
      </HighlightedPanel>
    </div>
  );
};
WithVideo.story = { name: 'Con video' };

export const WithoutMultimedia = (): JSX.Element => {
  return (
    <div className="storybook__container-highlighted-grouping">
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} type="grouping">
        <Button type="primary" size="large">
          Botón
        </Button>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} type="grouping">
        <a className="btn btn-secondary btn-lg btn-icon" href="#" target="_blank" rel="noreferrer" download>
          <span className="material-icons-round">file_download</span>
          Descargar
        </a>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} type="grouping">
        <a className="external" href="#" target="_blank" rel="noreferrer">
          Enlace externo
        </a>
      </HighlightedPanel>
      <br />
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED} type="grouping">
        <a href="#" className="list-group-item item-sm">
          <i className="bx bxs-info-circle"></i>
          <div className="access-content">
            <span className="access-title">Acceso</span>
          </div>
        </a>
      </HighlightedPanel>
    </div>
  );
};
WithoutMultimedia.story = { name: 'Sin Multimedia' };
