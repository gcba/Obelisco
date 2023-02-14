// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Migas de pan',
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

UnNivel.story = {
  name: 'Un nivel'
};

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

DosNiveles.story = {
  name: 'Dos niveles'
};

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

TresNiveles.story = {
  name: 'Tres niveles'
};

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

CuatroNiveles.story = {
  name: 'Cuatro niveles'
};

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
