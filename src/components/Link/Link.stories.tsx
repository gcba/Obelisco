// Base
import React from 'react';
import './Link.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Enlace',
  decorators: [withA11y]
};

export const Default = (): JSX.Element => {
  return (
    <p>
      You never see a frog so modest and{' '}
      <a className="" href="#" target="_blank" rel="noreferrer">
        enlace en párrafo
      </a>{' '}
      as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get
      over more ground at one straddle than any animal of his breed you ever see.
    </p>
  );
};

export const Externo = (): JSX.Element => {
  return (
    <div>
      <p>
        You never see a frog so modest and{' '}
        <a className="external" href="#" target="_blank" rel="noreferrer">
          enlace externo
        </a>{' '}
        as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get
        over more ground at one straddle than any animal of his breed you ever see.
      </p>
    </div>
  );
};

export const Descarga = (): JSX.Element => {
  return (
    <div>
      <p>
        You never see a frog so modest and{' '}
        <a className="download" href="#" target="_blank" rel="noreferrer">
          enlace de descarga
        </a>{' '}
        as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get
        over more ground at one straddle than any animal of his breed you ever see.
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
        You never see a frog so modest and{' '}
        <a className="access" href="#" target="_blank" rel="noreferrer">
          enlace de acceso
        </a>{' '}
        as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get
        over more ground at one straddle than any animal of his breed you ever see.
      </p>
    </div>
  );
};
