// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía',
  decorators: [withA11y]
};

export const Titulos = (): JSX.Element => {
  return (
    <>
      <h1>H1 - Nunito Bold 37px</h1>
      <h2>H2 - Nunito Semibold 28px</h2>
      <h3>H3 - Nunito Semibold 21px</h3>
      <h4>H4 - Nunito Bold 19px</h4>
      <h5>H5 - Nunito Semibold 17px</h5>
      <h6>H6 - Open Sans Bold 16px</h6>
    </>
  );
};

Titulos.story = { name: 'Títulos' };

export const Subtitulo = (): JSX.Element => {
  return <p className="lead">Open Sans Regular 19px</p>;
};

Subtitulo.story = { name: 'Subtítulo' };

export const Parrafo = (): JSX.Element => {
  return (
    <>
      <p>Open Sans Regular 16px</p>
      <small>Open Sans Regular 13px</small>
    </>
  );
};

Parrafo.story = { name: 'Párrafo' };

export const TextoSecundario = (): JSX.Element => {
  return <p className="text-xs">Open Sans Regular 11.7px</p>;
};

TextoSecundario.story = {
  name: 'Texto secundario'
};

export const Transformaciones = (): JSX.Element => {
  return (
    <p>
      Nuestro sistema de <strong>estándares</strong> brinda un <em>conjunto de herramientas</em> y componentes
      colaborativos
      <br />y <small>accesibles</small> que define procesos para que los equipos internos y externos puedan trabajar
      <br />
      alineadamente. De esta forma, ayudamos a crear <mark>servicios</mark> consistent<sup>es</sup> para mejorar
      <br /> la experiencia digit<sub>al</sub> de vecinos y vecina<kbd>s</kbd>.
    </p>
  );
};

export const Citas = (): JSX.Element => {
  return (
    <div className="bloquote-wrapper">
      <blockquote>
        <p>
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </p>
      </blockquote>
      <br />
      <blockquote>
        <p>
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </p>
        <small>Nombre del autor de la cita</small>
      </blockquote>
    </div>
  );
};

export const Lista = (): JSX.Element => {
  return (
    <ul>
      <li>Esto es el texto de una lista</li>
      <li>Esto es el texto de una lista</li>
      <li>Esto es el texto de una lista</li>
    </ul>
  );
};

export const ListaOrdenada = (): JSX.Element => {
  return (
    <ol>
      <li>Esto es el texto de una lista ordenada</li>
      <li>Esto es el texto de una lista ordenada</li>
      <li>Esto es el texto de una lista ordenada</li>
    </ol>
  );
};

ListaOrdenada.story = {
  name: 'Lista ordenada'
};
