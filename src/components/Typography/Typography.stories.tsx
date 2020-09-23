// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Tipografía',
  decorators: [withA11y]
};

const demoText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

export const Títulos = (): JSX.Element => {
  return (
    <>
      <h1>h1 - {demoText}</h1>
      <h2>h2 - {demoText}</h2>
      <h3>h3 - {demoText}</h3>
      <h4>h4 - {demoText}</h4>
      <h5>h5 - {demoText}</h5>
      <h6>h6 - {demoText}</h6>
    </>
  );
};

export const Subtítulo = (): JSX.Element => {
  return <p className="lead">{demoText}</p>;
};

export const Párrafo = (): JSX.Element => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis similique, placeat accusamus porro
      voluptates tempora provident dolorem, eius dolore facilis. Ducimus facilis suscipit quaerat amet consectetur
      nobis, unde numquam?
    </p>
  );
};

export const Transformaciones = (): JSX.Element => {
  return (
    <p>
      Lorem ipsum dolor sit <strong>negrita</strong> consectetur adipisicing
      <em>cursiva</em> elit. Molestias <small>pequeño</small> omnis
      <br />
      similique <mark>remarcado</mark>, place<sup>at</sup> accusamus porro voluptat<sub>es</sub> tempora provident
      dolorem <kbd>p</kbd>.
    </p>
  );
};

export const Citas = (): JSX.Element => {
  return (
    <blockquote className="blockquote">
      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">
        Alguien reconocido en <cite title="Source Title">título de la fuente</cite>
      </footer>
    </blockquote>
  );
};

export const Lista = (): JSX.Element => {
  return (
    <ul>
      <li>{demoText}</li>
      <li>{demoText}</li>
      <li>{demoText}</li>
    </ul>
  );
};

export const ListaOrdenada = (): JSX.Element => {
  return (
    <ol>
      <li>{demoText}</li>
      <li>{demoText}</li>
      <li>{demoText}</li>
    </ol>
  );
};
