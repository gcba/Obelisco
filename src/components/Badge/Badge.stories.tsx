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

export const Multiple = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" />
    <Badge text="Etiqueta 2" />
    <Badge text="Etiqueta 3" />
  </>
);

export const Link = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" href="#" />
    <Badge text="Etiqueta 2" href="#" className="active" />
    <Badge text="Etiqueta 3" href="#" className="focus active" />
    <Badge text="Etiqueta 4" href="#" className="focus" />
  </>
);
