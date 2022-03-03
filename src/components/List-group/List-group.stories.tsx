// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import './List-group.stories.scss';
import { BigAccess } from './BigAccess.stories';
import { ModeOfUseAccess } from './ModeOfUseAccess.stories';
import { SmallAccess } from './SmallAcces.stories';
import { ModeOfUseTypeTwo } from './ModeOfUseAccessTwo.stories';
import { AccessMobile } from './AccessMobile.stories';
import { SmallAccessDescription } from './SmallAccessDescription.stories';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const Accesos = (): JSX.Element => (
  <div>
    <BigAccess />
  </div>
);

export const AccesoConIcono = (): JSX.Element => {
  return (
    <div>
      <ModeOfUseAccess />
    </div>
  );
};

export const AccesoChico = (): JSX.Element => {
  return (
    <div>
      <SmallAccess />
    </div>
  );
};

export const AccesoChicoConDescripcion = (): JSX.Element => {
  return (
    <div>
      <SmallAccessDescription />
    </div>
  );
};

export const ModoDeUso2 = (): JSX.Element => {
  return (
    <div>
      <ModeOfUseTypeTwo />
    </div>
  );
};

export const Mobile = (): JSX.Element => {
  return (
    <div>
      <AccessMobile />
    </div>
  );
};
