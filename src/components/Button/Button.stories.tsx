// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { buttonTypes, sizes } from '../utils';
import { Button } from '.';

// Config
export default {
  title: 'Componentes|Botón',
  component: Button,
  decorators: [withA11y]
};

export const Colores = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type}>
          {type}
        </Button>
      ))}
      <a className="btn btn-primary" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

export const ConFoco = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type} className="focus">
          {type}
        </Button>
      ))}
      <a className="btn btn-primary focus" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

ConFoco.story = {
  name: 'Con foco'
};

export const Activos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type} className="active">
          {type}
        </Button>
      ))}
      <a className="btn btn-primary active" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

export const Tamanos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizes.map((size) => (
        <Button key={size} type="secondary" size={size}>
          {size}
        </Button>
      ))}
      <a className="btn btn-secondary" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};
Tamanos.story = { name: 'Tamaños' };

export const Deshabilitados = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizes.map((size) => (
        <Button key={size} type="secondary" disabled={true} size={size}>
          {size}
        </Button>
      ))}
    </div>
  );
};

export const Expandible = (): JSX.Element => {
  return (
    <div className="btn-block-wrapper">
      <Button type="secondary" block={true}>
        Expandible
      </Button>
    </div>
  );
};

export const ConBordes = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type} outline={true}>
          {type}
        </Button>
      ))}
      <a className="btn btn-outline-primary" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

ConBordes.story = {
  name: 'Con bordes'
};

export const ConIconos = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper">
        {sizes.map((size) => (
          <Button key={size} type="primary" size={size} icon="bxs-car">
            Botón
          </Button>
        ))}
        {sizes.map((size) => (
          <Button key={size} type="primary" outline={true} size={size} icon="bxs-car">
            Botón
          </Button>
        ))}
      </div>
    </>
  );
};

ConIconos.story = {
  name: 'Con íconos'
};
