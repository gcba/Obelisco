// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Breadcrumb',
  decorators: [withA11y]
};

export const UnNivel = (): JSX.Element => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Buenos Aires</a>
        </li>
      </ol>
    </nav>
  </div>
);

export const DosNiveles = (): JSX.Element => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Buenos Aires</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Página anterior</a>
        </li>
      </ol>
    </nav>
  </div>
);
export const TresNiveles = (): JSX.Element => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Buenos Aires</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Página intermedia con mucho mucho texto</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Página anterior</a>
        </li>
      </ol>
    </nav>
  </div>
);

export const CuatroNiveles = (): JSX.Element => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Buenos Aires</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Intermedia</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Intermedia</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Página anterior</a>
        </li>
      </ol>
    </nav>
  </div>
);

export const Mobile = (): JSX.Element => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Buenos Aires</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Página anterior</a>
        </li>
      </ol>
    </nav>
  </div>
);
