// Base
import React from 'react';
import './Template.stories.scss';

// Config
export default {
  title: 'Plantillas|Plantilla',
  parameters: { options: { showPanel: false } }
};

export const Informacion = (): JSX.Element => (
  <>
    <h1>Plantillas GCBA</h1>
    <p className="lead">
      Las plantillas se crean en Obelisco como sus propios marcos extendidos, con sus componentes y complementos,
      documentación y herramientas de construcción. <br />
      Ir a la{' '}
      <a className="access" target="_blank" href="https://gcba.github.io/obelisco-demo/index.html" rel="noreferrer">
        web
      </a>
    </p>
  </>
);

Informacion.story = {
  name: 'Información'
};
