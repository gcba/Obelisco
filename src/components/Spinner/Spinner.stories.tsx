// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Spinner',
  decorators: [withA11y]
};

export const SinTexto = (): JSX.Element => (
  <div className="spinner-border text-info" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

export const Texto = (): JSX.Element => (
  <div className="spinner">
    <h3>Estamos creando tu trámite</h3>
    <p className="lead">Por favor esperá unos segundos...</p>
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
