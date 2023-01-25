// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { AccesIcon } from './AccesIcon.stories';
import './List-group.stories.scss';
import { SmallAccessDescription } from './SmallAccessDescription.stories';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const AccesoConIcono = (): JSX.Element => <AccesIcon />;

AccesoConIcono.story = {
  name: 'Acceso con ícono'
};

export const AccesoChicoConDescripcion = (): JSX.Element => <SmallAccessDescription />;

AccesoChicoConDescripcion.story = {
  name: 'Acceso con descripción chico'
};
