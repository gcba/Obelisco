// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { buttonTypes, sizes, sizesButton, buttonSpinnerTypes, buttonOutlineSpinnerTypes } from '../utils';
import { Button } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Botones',
  component: Button,
  decorators: [withA11y]
};

export const ButtonSolid = (): JSX.Element => {
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
ButtonSolid.story = { name: 'Colores' };

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

export const ButtonSizes = (): JSX.Element => {
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
ButtonSizes.story = { name: 'Tamaños' };

export const ButtonDisabled = (): JSX.Element => {
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
ButtonDisabled.story = { name: 'Deshabilitados' };

export const ButtonBlock = (): JSX.Element => {
  return (
    <div className="btn-block-wrapper">
      <Button type="secondary" block={true}>
        Expandible
      </Button>
    </div>
  );
};
ButtonBlock.story = { name: 'Expandible' };

export const ButtonOutline = (): JSX.Element => {
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
ButtonOutline.story = { name: 'Con bordes' };

export const ButtonWithIcon = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper">
        {sizes.map((size) => (
          <Button key={size} type="primary" size={size} iconBx="bxs-car">
            Botón
          </Button>
        ))}
        {sizes.map((size) => (
          <Button key={size} type="primary" outline={true} size={size} iconMaterial="drive_eta">
            Botón
          </Button>
        ))}
      </div>
    </>
  );
};
ButtonWithIcon.story = { name: 'Con ícono' };

export const ButtonWithSpinner = (): JSX.Element => (
  <>
    <div className="btn-wrapper">
      {buttonSpinnerTypes.map((item) => (
        <Button key={item.type} type={item.type} spinner={item.spinner}>
          Botón
        </Button>
      ))}
    </div>
    <div className="btn-wrapper">
      {buttonOutlineSpinnerTypes.map((item) => (
        <Button key={item.type} type={item.type} outline={true} spinner={item.spinner}>
          Botón
        </Button>
      ))}
    </div>
  </>
);
ButtonWithSpinner.story = { name: 'Con spinner' };
