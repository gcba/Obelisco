// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { AccessIcon } from './AccessIcon.stories';
import './List-group.stories.scss';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const AccesoConIcono = (): JSX.Element => <AccessIcon />;

AccesoConIcono.story = {
  name: 'Acceso con ícono'
};
