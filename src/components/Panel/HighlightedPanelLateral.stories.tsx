// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

import { TITLE_HIGHLIGHTED, DESCRIPTION_HIGHLIGHTED_LATERAL } from './Panel.constants';
import { HighlightedPanel } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Destacado/Lateral',
  decorators: [withA11y]
};

export const Lateral = (): JSX.Element => {
  return (
    <div className="storybook__container-highlighted-lateral">
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED_LATERAL} type="lateral">
        <a className="btn btn-primary btn-lg btn-block" href="#">
          Iniciar trámite
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED_LATERAL} type="lateral">
        <a className="btn btn-secondary btn-lg btn-block btn-icon" href="#" target="_blank" download>
          <span className="material-icons-round">file_download</span>
          Descargar
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED_LATERAL} type="lateral">
        <a className="external" href="#" target="_blank">
          Sistemas y Estándares
        </a>
      </HighlightedPanel>
      <br />
      <HighlightedPanel title={TITLE_HIGHLIGHTED} description={DESCRIPTION_HIGHLIGHTED_LATERAL} type="lateral">
        <a href="#" className="list-group-item item-sm">
          <div className="access-content">
            <span className="access-title">Experiencia digital</span>
          </div>
        </a>
      </HighlightedPanel>
    </div>
  );
};
Lateral.story = { name: 'Lateral' };
