// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Collapse } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Colapsable/Tipos',
  decorators: [withA11y]
};

const COLLAPSE_DESCRIPTION =
  'Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar demasiado texto, para generar una lectura óptima.';

export const CollapseUniqueSelection = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion" id="accordionExample">
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseOne"
          isOnlySelect={true}
          dataParent="#accordionExample">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseTwo"
          isOnlySelect={true}
          dataParent="#accordionExample">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseThree"
          isOnlySelect={true}
          dataParent="#accordionExample">
          Título
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white" id="accordionExampleTwo">
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseFour"
          isOnlySelect={true}
          dataParent="#accordionExampleTwo">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseFive"
          isOnlySelect={true}
          dataParent="#accordionExampleTwo">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseSix"
          isOnlySelect={true}
          dataParent="#accordionExampleTwo">
          Título
        </Collapse>
      </div>
    </div>
  );
};

CollapseUniqueSelection.story = { name: 'Selección única' };

export const CollapseMultipleSelection = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseTwo">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseThree">
          Título
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOneWhite">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseTwoWhite">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseThreeWhite">
          Título
        </Collapse>
      </div>
    </div>
  );
};

CollapseMultipleSelection.story = { name: 'Selección múltiple' };
