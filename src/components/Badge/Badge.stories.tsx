// Base
import React from 'react';

// Component
import { Badge } from '.';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Etiqueta',
  decorators: [withA11y],
  component: Badge
};

export const Simple = (): JSX.Element => <Badge text="Etiqueta 1" />;

export const Multiple = (): JSX.Element[] => ['Etiqueta 1', 'Etiqueta 2'].map(text => <Badge text={text} key={text} />);

export const Link = (): JSX.Element => <Badge text="Etiqueta 1" href="#" />;
