// Base
import React from 'react';
import './ProcessSteps.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Pasos de trámite',
  decorators: [withA11y]
};

export const Pasos = (): JSX.Element => (
  <ul className="list-steps">
    <li className="list-steps-item">
      <h5>Esta es la información destacada de la lista</h5>
      <p>Esta es la descripción informativa de una lista</p>
    </li>
    <li className="list-steps-item">
      <h5>Esta es la información destacada de la lista</h5>
      <p>Esta es la descripción informativa de una lista</p>
    </li>
    <li className="list-steps-item">
      <h5>Esta es la información destacada de la lista</h5>
      <p>Esta es la descripción informativa de una lista</p>
    </li>
  </ul>
);
