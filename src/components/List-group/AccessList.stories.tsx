// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccessListHorizontal, AccessListVertical } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos/Lista de accesos',
  decorators: [withA11y]
};

export const Horizontal = (): JSX.Element => <AccessListHorizontal />;

export const Vertical = (): JSX.Element => (
  <div className="list-group-container">
    <AccessListVertical />
  </div>
);
