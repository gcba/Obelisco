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

export const Simple = (): JSX.Element => <Badge text="Etiqueta 1" className="badge-info" />;

export const Multiple = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" className="badge-info" />
    <Badge text="Etiqueta 2" className="badge-info" />
    <Badge text="Etiqueta 3" className="badge-info" />
  </>
);

export const Colores = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" className="bagde-secondary" />
    <Badge text="Etiqueta 2" className="badge-danger" />
    <Badge text="Etiqueta 3" className="badge-success" />
    <Badge text="Etiqueta 4" className="badge-info" />
    <Badge text="Etiqueta 5" className="badge-primary" />
  </>
);

export const Link = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" href="#" className="badge-info" />
    <Badge text="Etiqueta 2" href="#" className="active badge-info" />
    <Badge text="Etiqueta 3" href="#" className="focus active badge-info" />
    <Badge text="Etiqueta 4" href="#" className="focus badge-info" />
  </>
);
