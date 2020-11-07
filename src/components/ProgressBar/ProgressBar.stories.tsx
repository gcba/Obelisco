// Base
import React from 'react';
import './ProgressBar.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes | Barra de progreso',
  decorators: [withA11y]
};

export const Colapsado = (): JSX.Element => (
  <div className="progress-container">
    <ul className="progress flex-column">
      <li className="progress-item progress-completed" aria-expanded="false">
        <p className="progress-title">Estado anterior</p>
        <p className="progress-subtitle d-none">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item progress-active" aria-expanded="true">
        <p className="progress-title">Estado actual</p>
        <p className="progress-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item" aria-expanded="false">
        <p className="progress-title">Próximo estado</p>
        <p className="progress-subtitle d-none">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item" aria-expanded="false">
        <p className="progress-title">Próximo estado</p>
        <p className="progress-subtitle d-none">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item" aria-expanded="false">
        <p className="progress-title">Estado final</p>
        <p className="progress-subtitle d-none">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>
    </ul>

    <a href="*" className="progress-link">Más detalles</a>
  </div>
);

export const ConDetalles = (): JSX.Element => (
  <div className="progress-container">
    <ul className="progress flex-column">
      <li className="progress-item progress-completed" aria-expanded="true">
        <p className="progress-title">Estado anterior</p>
        <p className="progress-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item progress-active" aria-expanded="true">
        <p className="progress-title">Estado actual</p>
        <p className="progress-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item" aria-expanded="true">
        <p className="progress-title">Próximo estado</p>
        <p className="progress-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item" aria-expanded="true">
        <p className="progress-title">Próximo estado</p>
        <p className="progress-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progress-item" aria-expanded="true">
        <p className="progress-title">Estado final</p>
        <p className="progress-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>
    </ul>

    <a href="*" className="progress-link">Menos detalles</a>
  </div>
);
