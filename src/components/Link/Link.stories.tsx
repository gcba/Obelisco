// Base
import React from 'react';
import './Link.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Enlace',
  decorators: [withA11y]
};

export const Predeterminado = (): JSX.Element => {
  return (
    <p>
      Nuestro sistema de{' '}
      <a className="" href="#" target="_blank" rel="noreferrer">
        enlace en párrafo
      </a>{' '}
      brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
      equipos internos y externos puedan trabajar alineadamente.
    </p>
  );
};

export const Externo = (): JSX.Element => {
  return (
    <div>
      <p>
        Nuestro sistema de{' '}
        <a className="external" href="#" target="_blank" rel="noreferrer">
          enlace externo
        </a>{' '}
        brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
        equipos internos y externos puedan trabajar alineadamente.
      </p>
    </div>
  );
};

export const Descarga = (): JSX.Element => {
  return (
    <div>
      <p>
        Nuestro sistema de{' '}
        <a className="download" href="#" target="_blank" rel="noreferrer">
          enlace de descarga
        </a>{' '}
        brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
        equipos internos y externos puedan trabajar alineadamente.
      </p>
      <p>
        De esta forma, ayudamos a crear servicios consistentes para mejorar la experiencia digital de vecinos y vecinas.
      </p>
      <a className="btn btn-secondary btn-sm download-link" href="#" target="_blank" rel="noreferrer">
        Descargar
      </a>
    </div>
  );
};

export const Acceso = (): JSX.Element => {
  return (
    <div>
      <p>
        Nuestro sistema de{' '}
        <a className="access" href="#" target="_blank" rel="noreferrer">
          enlace de acceso
        </a>{' '}
        brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
        equipos internos y externos puedan trabajar alineadamente.
      </p>
    </div>
  );
};
