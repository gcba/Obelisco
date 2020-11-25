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

/* 
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

Tamanos.story = { name: 'Tamaños' };*/

export const Columnas = (): JSX.Element => {
  return (
    <div className="grid-wraper">
      <div className="container text-center">
        <div className="row">
          <div className="col-1">
            <div>1</div>
          </div>
          <div className="col-1">
            <div>2</div>
          </div>
          <div className="col-1">
            <div>3</div>
          </div>
          <div className="col-1">
            <div>4</div>
          </div>
          <div className="col-1">
            <div>5</div>
          </div>
          <div className="col-1">
            <div>6</div>
          </div>
          <div className="col-1">
            <div>7</div>
          </div>
          <div className="col-1">
            <div>8</div>
          </div>
          <div className="col-1">
            <div>9</div>
          </div>
          <div className="col-1">
            <div>10</div>
          </div>
          <div className="col-1">
            <div>11</div>
          </div>
          <div className="col-1">
            <div>12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Divisiones = (): JSX.Element => {
  return (
    <div className="grid-wraper">
      <div className="container text-center">
        <div className="row mb-2">
          <div className="col-2">
            <div>col-2</div>
          </div>
          <div className="col-6">
            <div>col-6</div>
          </div>
          <div className="col-4">
            <div>col-4</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-5">
            <div>col-5</div>
          </div>
          <div className="col-7">
            <div>col-7</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <div>col-4</div>
          </div>
          <div className="col-8">
            <div>col-8</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-9">
            <div>col-9</div>
          </div>
          <div className="col-3">
            <div>col-3</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1">
            <div>col-1</div>
          </div>
          <div className="col-10">
            <div>col-10</div>
          </div>
          <div className="col-1">
            <div>col-1</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-11">
            <div>col-11</div>
          </div>
          <div className="col-1">
            <div>col-1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlineacionHorizontal = (): JSX.Element => {
  return (
    <div className="grid-wraper">
      <div className="container">
        <div className="row justify-content-start mb-2">
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
        </div>
        <div className="row justify-content-center mb-2">
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
        </div>
        <div className="row justify-content-end mb-2">
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
        </div>
        <div className="row justify-content-around mb-2">
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
        </div>
        <div className="row justify-content-between mb-2">
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
          <div className="col-4">
            <div>Una de dos columnas</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AlineacionHorizontal.story = { name: 'Alineación Horizontal' };

export const OrdenarClases = (): JSX.Element => {
  return (
    <div className="grid-wraper">
      <div className="container">
        <div className="row mb-2">
          <div className="col-4">
            <div>Primero, pero desordenado</div>
          </div>
          <div className="col-4 order-12">
            <div>Tercero, pero primero</div>
          </div>
          <div className="col-4 order-1">
            <div>Segundo, pero último</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4 order-last">
            <div>Tercero, pero primero</div>
          </div>
          <div className="col-4">
            <div>Segundo, pero desordenado</div>
          </div>
          <div className="col-4 order-first">
            <div>Primero pero ultimo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Desplazamientos = (): JSX.Element => {
  return (
    <div className="grid-wraper">
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-4">
            <div>.col-md-4</div>
          </div>
          <div className="col-md-4 offset-md-4">
            <div>.col-md-4 .offset-md-4</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-3 offset-md-3">
            <div>.col-md-3 .offset-md-3</div>
          </div>
          <div className="col-md-3 offset-md-3">
            <div>.col-md-3 .offset-md-3</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6 offset-md-3">
            <div>.col-md-6 .offset-md-3</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-5 col-md-6">
            <div>.col-sm-5 .col-md-6</div>
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <div>.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <div>.col-sm-6 .col-md-5 .col-lg-6</div>
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <div>.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
          </div>
        </div>
      </div>
    </div>
  );
};
