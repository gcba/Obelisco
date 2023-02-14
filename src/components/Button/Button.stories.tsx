// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { buttonTypes, sizes, sizesButton } from '../utils';
import { Button } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Botones',
  component: Button,
  decorators: [withA11y]
};

export const Colores = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-primary" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

export const ConFoco = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type} className="focus">
          {item.name}
        </Button>
      ))}
      <a className="btn btn-primary focus" href="#" target="_blank">
        Enlace
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
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type} className="active">
          {item.name}
        </Button>
      ))}
      <a className="btn btn-primary active" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

export const Tamanos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizesButton.map((item) => (
        <Button key={item.size} type="secondary" size={item.size}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-secondary" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

Tamanos.story = { name: 'Tamaños' };

export const Deshabilitados = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizesButton.map((item) => (
        <Button key={item.size} type="secondary" disabled={true} size={item.size}>
          {item.name}
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
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type} outline={true}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-outline-primary" href="#" target="_blank">
        Enlace
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
