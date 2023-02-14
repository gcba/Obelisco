// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Spinner',
  decorators: [withA11y]
};

export const ConMensaje = (): JSX.Element => (
  <div className="spinner">
    <h3>Estamos creando tu trámite</h3>
    <p className="lead">Por favor esperá unos segundos...</p>
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

ConMensaje.story = {
  name: 'Con mensaje'
};

export const SinMensaje = (): JSX.Element => (
  <div className="spinner-border text-info" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

SinMensaje.story = {
  name: 'Sin mensaje'
};
