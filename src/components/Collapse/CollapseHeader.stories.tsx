// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Collapse } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Colapsable/Encabezado',
  decorators: [withA11y]
};

const COLLAPSE_DESCRIPTION =
  'Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar demasiado texto, para generar una lectura óptima.';

export const CollapseIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-title">Título</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOneWhite">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-title">Título</span>
        </Collapse>
      </div>
    </div>
  );
};
CollapseIcon.story = { name: 'Con ícono' };

export const CollapsableLabelDescription = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-label">Volanta</span>
          <span className="collapse-title">Título</span>
          <span className="collapse-subtitle">Descripción</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOneWhite">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-label">Volanta</span>
          <span className="collapse-title">Título</span>
          <span className="collapse-subtitle">Descripción</span>
        </Collapse>
      </div>
    </div>
  );
};
CollapsableLabelDescription.story = { name: 'Con volanta y descripción' };
