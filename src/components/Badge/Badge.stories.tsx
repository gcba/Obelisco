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
export const TestBadge = (): JSX.Element => (
  <>
    <div>
      <span className="badge badge-primary">badge-primary</span>
      <span className="badge badge-secondary">badge-secondary</span>
      <span className="badge badge-danger">badge-danger</span>
      <span className="badge badge-success">badge-success</span>
      <span className="badge badge-info">badge-info</span>
    </div>
    <br />
    <div>
      <p>Nuevos badges</p>
      <span className="badge badge-primary">badge-primary</span>
      <span className="badge badge-secondary">badge-secondary</span>
      <br />
      <br />
      <span className="badge">badge</span>
      <span className="badge badge-danger">badge-danger</span>
      <span className="badge badge-success">badge-success</span>
      <span className="badge badge-info">badge-info</span>
      <span className="badge badge-warning">badge-warning</span>
    </div>
  </>
);

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
    <Badge text="Etiqueta 1" className="badge-secondary" />
    <Badge text="Etiqueta 2" className="badge-danger" />
    <Badge text="Etiqueta 3" className="badge-success" />
    <Badge text="Etiqueta 4" className="badge-info" />
    <Badge text="Etiqueta 5" className="badge-primary" />
  </>
);

export const Link = (): JSX.Element => (
  <>
    <Badge text="Etiqueta 1" href="#" className="badge-secondary" />
    <Badge text="Etiqueta 2" href="#" className="hover badge-secondary" />
    <Badge text="Etiqueta 3" href="#" className="focus hover badge-secondary" />
    <Badge text="Etiqueta 4" href="#" className="focus badge-secondary" />
  </>
);
