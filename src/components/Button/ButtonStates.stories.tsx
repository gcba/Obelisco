// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { buttonTypes, sizesButton } from '../utils';
import { Button } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Botones/Estados',
  component: Button,
  decorators: [withA11y]
};

export const ButtonFocus = (): JSX.Element => {
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
ButtonFocus.story = { name: 'Con foco' };

export const ButtonActive = (): JSX.Element => {
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
ButtonActive.story = { name: 'Activos' };

export const ButtonDisabled = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizesButton.map((item) => (
        <Button key={item.size} type="secondary" isDisabled size={item.size}>
          {item.name}
        </Button>
      ))}
    </div>
  );
};
ButtonDisabled.story = { name: 'Deshabilitados' };
