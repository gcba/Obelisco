// Base
import React from 'react';
import './StatusBar.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes | Barra de estado',
  decorators: [withA11y]
};

export const Colapsado = (): JSX.Element => (
  <div className="progression-container">
    <ul className="progression">
      <li className="progression-item completed" aria-expanded="false">
        <p className="progression-title">Estado anterior</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item active" aria-expanded="true">
        <p className="progression-title">Estado actual</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="false">
        <p className="progression-title">Próximo estado</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="false">
        <p className="progression-title">Próximo estado</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="false">
        <p className="progression-title">Estado final</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>
    </ul>

    <button className="progression-link">Menos detalles</button>
  </div>
);

export const ConDetalles = (): JSX.Element => (
  <div className="progression-container">
    <ul className="progression expanded">
      <li className="progression-item completed" aria-expanded="true">
        <p className="progression-title">Estado anterior</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item active" aria-expanded="true">
        <p className="progression-title">Estado actual</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="true">
        <p className="progression-title">Próximo estado</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="true">
        <p className="progression-title">Próximo estado</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="true">
        <p className="progression-title">Estado final</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>
    </ul>

    <button className="progression-link">Menos detalles</button>
  </div>
);
