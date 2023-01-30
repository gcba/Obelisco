// Base
import React from 'react';
import './Template.stories.scss';

// Config
export default {
  title: 'Plantilla|info'
};

export const info = (): JSX.Element => (
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