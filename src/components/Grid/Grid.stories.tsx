// Base
import React from 'react';
import './Grid.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Grilla',
  decorators: [withA11y]
};

export const Tamanos = (): JSX.Element => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <strong>Extra Pequeño</strong>
        </div>
        <div className="col-2">
          <strong>Pequeño</strong><br></br>
          <small>≥576px</small>
        </div>
        <div className="col-2">
          <strong>Medio</strong><br></br>
          <small>≥768px</small>
        </div>
        <div className="col-2">
          <strong>Grande</strong><br></br>
          <small>≥992px</small>
        </div>
        <div className="col-2">
          <strong>Extra Grande</strong><br></br>
          <small>≥1200px</small>
        </div>
      </div>
      <div className="row">
        <div className="col">Ancho máximo del contenedor</div>
        <div className="col">Ninguno (automático)</div>
        <div className="col">540 px</div>
        <div className="col">720px</div>
        <div className="col">960 px</div>
        <div className="col">1140 px</div>
      </div>
      <div className="row">
        <div className="col">Prefijo de clase	</div>
        <div className="col">.col-</div>
        <div className="col">.col-sm-</div>
        <div className="col">.col-md-</div>
        <div className="col">.col-lg-</div>
        <div className="col">.col-xl-</div>
      </div>
    </div>
  );
};
Tamanos.story = { name: 'Tamaños' };

export const Columnas = (): JSX.Element => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div>
        <div className="col">5</div>
        <div className="col">6</div>
        <div className="col">7</div>
        <div className="col">8</div>
        <div className="col">9</div>
        <div className="col">10</div>
        <div className="col">11</div>
        <div className="col">12</div>
      </div>
    </div>
  );
};

export const Divisiones = (): JSX.Element => {
  return (
    <div className="container-grid text-center">
      <div className="row mb-2">
        <div className="col-4">col-4</div>
        <div className="col-8">col-8</div>
      </div>
      <div className="row mb-2">
        <div className="col-8">col-8</div>
        <div className="col-4">col-4</div>
      </div>
      <div className="row mb-2">
        <div className="col-4">col-4</div>
        <div className="col-4">col-4</div>
        <div className="col-4">col-4</div>
      </div>
    </div>
  );
};