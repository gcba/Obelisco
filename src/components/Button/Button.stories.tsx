// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { withXD } from 'storybook-addon-xd-designs';

// Components
import { buttonTypes, sizes } from '../utils';
import { Button } from '.';

// Config
export default {
  title: 'Componentes|Botón',
  component: Button,
  decorators: [withA11y, withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES'
    }
  }
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
