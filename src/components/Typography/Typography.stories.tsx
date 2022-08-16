// Base
import React from 'react';
import './Typography.stories.scss';

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
    <div className="bloquote-wrapper">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut dolore.
        </p>
      </blockquote>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut dolore.
        </p>
        <small>Autor (no obligatorio)</small>
      </blockquote>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
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
