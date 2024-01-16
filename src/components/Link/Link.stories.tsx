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
    <>
      <p>
        Nuestro sistema de{' '}
        <a href="#" target="_blank" rel="noreferrer">
          enlace en párrafo
        </a>{' '}
        brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
        equipos internos y externos puedan trabajar alineadamente. Además contamos con la etiqueta small para{' '}
        <small>
          <a href="#" target="_blank" rel="noreferrer">
            enlaces en párrafo
          </a>{' '}
        </small>
        con menor tamaño de fuente
      </p>

      <br />

      <div className="storybook__container__link">
        <p>
          Nuestro sistema de{' '}
          <a href="#" target="_blank" rel="noreferrer" className="link-white">
            enlace en párrafo
          </a>{' '}
          brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
          equipos internos y externos puedan trabajar alineadamente. Además contamos con la etiqueta small para{' '}
          <small>
            <a href="#" target="_blank" rel="noreferrer" className="link-white">
              enlaces en párrafo
            </a>{' '}
          </small>
          con menor tamaño de fuente
        </p>
      </div>
    </>
  );
};

export const Externo = (): JSX.Element => {
  return (
    <>
      <p>
        Nuestro sistema de{' '}
        <a className="external" href="#" target="_blank" rel="noreferrer">
          enlace externo
        </a>{' '}
        brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
        equipos internos y externos puedan trabajar alineadamente.
      </p>

      <br />

      <div className="storybook__container__link">
        <p>
          Nuestro sistema de{' '}
          <a className="external link-white" href="#" target="_blank" rel="noreferrer">
            enlace externo
          </a>{' '}
          brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
          equipos internos y externos puedan trabajar alineadamente.
        </p>
      </div>
    </>
  );
};

export const Descarga = (): JSX.Element => {
  return (
    <>
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

      <br />
      <br />

      <div className="storybook__container__link">
        <p>
          Nuestro sistema de{' '}
          <a className="download link-white" href="#" target="_blank" rel="noreferrer">
            enlace de descarga
          </a>{' '}
          brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
          equipos internos y externos puedan trabajar alineadamente.
        </p>
        <p>
          De esta forma, ayudamos a crear servicios consistentes para mejorar la experiencia digital de vecinos y
          vecinas.
        </p>
      </div>
    </>
  );
};

export const Acceso = (): JSX.Element => {
  return (
    <>
      <p>
        Nuestro sistema de{' '}
        <a className="access" href="#" target="_blank" rel="noreferrer">
          enlace de acceso
        </a>{' '}
        brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
        equipos internos y externos puedan trabajar alineadamente.
      </p>

      <br />

      <div className="storybook__container__link">
        <p>
          Nuestro sistema de{' '}
          <a className="access link-white" href="#" target="_blank" rel="noreferrer">
            enlace de acceso
          </a>{' '}
          brinda un conjunto de herramientas y componentes colaborativos y accesibles que define procesos para que los
          equipos internos y externos puedan trabajar alineadamente.
        </p>
      </div>
    </>
  );
};
