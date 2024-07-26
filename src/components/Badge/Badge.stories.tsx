// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Badge } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Etiqueta',
  component: Badge,
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => <Badge text="Etiqueta 1" className="badge-secondary" />;

export const Multiple = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" className="badge-secondary" />
    <Badge text="Etiqueta 2" className="badge-secondary" />
    <Badge text="Etiqueta 3" className="badge-secondary" />
  </>
);

Multiple.story = {
  name: 'Múltiple'
};

export const Colores = (): JSX.Element => (
  <>
    <div>
      <Badge text="Etiqueta 1" className="badge-secondary" />
      <Badge text="Etiqueta 2" className="badge-danger" />
      <Badge text="Etiqueta 3" className="badge-success" />
      <Badge text="Etiqueta 4" className="badge-info" />
      <Badge text="Etiqueta 5" className="badge-primary" />
    </div>
    <div className="mt-5">
      <Badge text="Secondary" className="badge-secondary" />
      <Badge text="danger" className="badge-danger" />
      <Badge text="success" className="badge-success" />
      <Badge text="info" className="badge-info" />
      <Badge text="warning" className="badge-warning" />
      <Badge text="primary" className="badge-primary" />
    </div>
  </>
);

export const Link = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" href="#" className="badge-secondary" />
    <Badge text="Etiqueta 2" href="#" className="hover badge-secondary" />
    <Badge text="Etiqueta 4" href="#" className="focus badge-secondary" />
    <Badge text="Etiqueta 3" href="#" className="focus hover badge-secondary" />
    <p className="headline-lg mt-3">Ejemplos de etiquetas link en distintos colores</p>
    <div className="my-4">
      <Badge text="Secondary" href="#" className="badge-secondary" />
      <Badge text="Secondary" href="#" className="hover badge-secondary" />
      <Badge text="Secondary" href="#" className="focus badge-secondary" />
      <Badge text="Secondary" href="#" className="focus hover badge-secondary" />
    </div>
    <div className="mb-4">
      <Badge text="danger" href="#" className="badge-danger" />
      <Badge text="danger" href="#" className="hover badge-danger" />
      <Badge text="danger" href="#" className="focus badge-danger" />
      <Badge text="danger" href="#" className="focus hover badge-danger" />
    </div>
    <div className="mb-4">
      <Badge text="success" href="#" className="badge-success" />
      <Badge text="success" href="#" className="hover badge-success" />
      <Badge text="success" href="#" className="focus badge-success" />
      <Badge text="success" href="#" className="focus hover badge-success" />
    </div>
    <div className="mb-4">
      <Badge text="info" href="#" className="badge-info" />
      <Badge text="info" href="#" className="hover badge-info" />
      <Badge text="info" href="#" className="focus badge-info" />
      <Badge text="info" href="#" className="focus hover badge-info" />
    </div>
    <div className="mb-4">
      <Badge text="warning" href="#" className="badge-warning" />
      <Badge text="warning" href="#" className="hover badge-warning" />
      <Badge text="warning" href="#" className="focus badge-warning" />
      <Badge text="warning" href="#" className="focus hover badge-warning" />
    </div>
    <div className="mb-4">
      <Badge text="primary" href="#" className="badge-primary" />
      <Badge text="primary" href="#" className="hover badge-primary" />
      <Badge text="primary" href="#" className="focus badge-primary" />
      <Badge text="primary" href="#" className="focus hover badge-primary" />
    </div>
  </>
);
