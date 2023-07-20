// Base
import React from 'react';
import './Panel.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SmallPanel } from '.';
import { TITLE, DESCRIPTION, SMALL_PICTURE, SMALL_PICTURE_XS } from './Panel.constants';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Chico/Horizontal',
  decorators: [withA11y]
};

export const SmallPanelHorizontalColors = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small-horizontal">
      {/* Mediana */}
      <SmallPanel direction="horizontal" title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE} />
      {/* Chica */}
      <SmallPanel direction="horizontal" title={TITLE} description={DESCRIPTION} picture={SMALL_PICTURE_XS} />
    </div>
  );
};

SmallPanelHorizontalColors.story = { name: 'Sin accionable' };

/* export const SmallPanelHorizontalVariants = (): JSX.Element => {
  return (
    <div className="container">
      <div className="panel-deck max-cards-2">
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono1.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Plataformas digitales</h4>
            <p className="card-text-panel">Mantenemos las plataformas y damos soporte a las áreas de gobierno.</p>
          </div>
        </div>
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono3.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Experiencia Digital</h4>
            <p className="card-text-panel">
              Diseñamos estrategias y productos digitales para mejorar la experiencia de los vecinos.
            </p>
          </div>
        </div>
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono2.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Sistema de atención integral</h4>
            <p className="card-text-panel">Asistencia ante emergencias y desastres.</p>
          </div>
        </div>
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono4.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Trámites en línea</h4>
            <p className="card-text-panel">Gestioná trámites y solicitudes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SmallPanelHorizontalVariants.story = { name: 'Variantes' }; */
