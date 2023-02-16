// Base
import React from 'react';
import './ProcessSteps.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { List } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Pasos de trámite',
  decorators: [withA11y]
};

export const Pasos = (): JSX.Element => (
  <>
    <div className="lists-wrapper">
      <List
        items={[
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          },
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          },
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          }
        ]}
      />
    </div>
    <div className="lists-wrapper">
      <List
        items={[
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          },
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          },
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          }
        ]}
        className="list-steps-success"
      />
    </div>
    <div className="lists-wrapper">
      <List
        items={[
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          },
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          },
          {
            title: 'Esta es la información destacada de la lista',
            description: 'Esta es la descripción informativa de una lista '
          }
        ]}
        className="list-steps-information"
      />
    </div>
  </>
);
